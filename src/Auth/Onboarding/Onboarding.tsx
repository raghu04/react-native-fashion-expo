import { Dimensions, StyleSheet, View } from "react-native";
import Slide, { SLIDER_HEIGHT } from "./Slide";
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

const slides = [
  { label: "Relaxed", color: "#BFEAF5" },
  { label: "Playful", color: "#BEECC4" },
  { label: "Eccentric", color: "#FFE4D9" },
  { label: "Funky", color: "#FFDDDD" },
];

const Onboarding = () => {
  const x = useSharedValue(0);

  const backgroundColor = interpolateColor(
    x.value,
    slides.map((_, i) => i * width),
    slides.map((slide) => slide.color)
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
          {slides.map(({ label }, index) => (
            <Slide key={index} {...{ label }} right={!!(index % 2)} />
          ))}
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
