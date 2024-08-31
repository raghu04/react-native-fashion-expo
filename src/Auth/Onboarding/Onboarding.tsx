import { Dimensions, StyleSheet, View } from "react-native";

import Animated, {
  interpolateColor,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import Slide, { SLIDER_HEIGHT } from "./Slide";
import SubSlide from "./SubSlide";

const BORDER_RADIUS = 75;

const { width } = Dimensions.get("window");

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfit",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: "#BFEAF5",
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    color: "#BEECC4",
  },
  {
    title: "Eccentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
  },
];

const Onboarding = () => {
  const scroll = useAnimatedRef<Animated.ScrollView>();

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
          ref={scroll}
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={scrollHandler}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} {...{ title }} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }} />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              transform: [
                {
                  translateX: x.value * -1,
                },
              ],
            },
          ]}
        >
          {slides.map(({ subtitle, description }, index) => (
            <SubSlide
              key={index}
              last={index === slides.length - 1}
              onPress={() => {
                if (scroll.current) {
                  scroll.current.scrollTo({
                    x: width * (index + 1),
                    animated: true,
                  });
                }
              }}
              {...{ subtitle, description }}
            />
          ))}
        </Animated.View>
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
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

export default Onboarding;
