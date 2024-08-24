import { Dimensions, StyleSheet, View } from "react-native";
import Slide, { SLIDER_HEIGHT } from "./Slide";
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

const Onboarding = () => {
  const x = useSharedValue(0);

  const backgroundColor = interpolateColor(
    x.value,
    [0, width, width * 2, width * 3],
    ["#BFEAF5", "#BEECC4", "#FFE4D9", "#FFDDDD"]
  );

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      console.log(event.contentOffset.x);
    },
    onMomentumEnd: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={scrollHandler}
        >
          <Slide label="Relaxed" />
          <Slide label="Playful" right />
          <Slide label="Eccentric" />
          <Slide label="Funky" right />
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }} />
        <View
          style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 75 }}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDER_HEIGHT,
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
});

export default Onboarding;
