import { StyleSheet, Text } from "react-native";
import React from "react";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps {
  label: string;
  variant: "Primary" | "Default";
  onPress: () => void;
}

const Button = ({ label, variant, onPress }: ButtonProps) => {
  const backgroundColor = {
    backgroundColor:
      variant === "Primary" ? "#2CB9B0" : "rgba(12, 13, 52, 0.05)",
  };
  const color = {
    color: variant === "Primary" ? "white" : "#0C0D34",
  };
  return (
    <RectButton style={[styles.container, backgroundColor]} {...{ onPress }}>
      <Text style={[styles.label, color]}>{label}</Text>
    </RectButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: 245,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontFamily: "SFProText-Regular",
    fontSize: 15,
    textAlign: "center",
  },
});
