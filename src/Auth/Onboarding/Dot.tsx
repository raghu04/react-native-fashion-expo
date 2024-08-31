import { StyleSheet } from "react-native";
import React from "react";

import Animated, { interpolate } from "react-native-reanimated";

interface DotProps {
  index: number;
  currentIndex: number;
}

const Dot = ({ index, currentIndex }: DotProps) => {
  const opacity = interpolate(
    currentIndex,
    [index - 1, index, index + 1],
    [0.5, 1, 0.5]
  );
  const scale = interpolate(
    currentIndex,
    [index - 1, index, index + 1],
    [1, 1.25, 1]
  );

  return (
    <Animated.View
      style={[styles.container, { opacity, transform: [{ scale }] }]}
    />
  );
};

export default Dot;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2CB9B0",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 4
  },
});
