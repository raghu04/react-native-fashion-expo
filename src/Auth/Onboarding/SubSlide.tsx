import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface SubSlideProps {
  subtitle: string;
  description: string;
  last?: boolean;
}

const SubSlide = ({ subtitle, description, last }: SubSlideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default SubSlide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 42
  },
  subtitle: {
    fontFamily: "SFProText-Semibold",
    fontSize: 24,
    color: "#0C0D34",
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontFamily: "SFProText-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#0C0D34",
    textAlign: 'center',
  },
});
