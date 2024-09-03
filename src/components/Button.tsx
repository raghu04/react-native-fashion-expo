import { StyleSheet } from "react-native";
import React from "react";

import { RectButton } from "react-native-gesture-handler";

import Text from "./Text";
import { useTheme } from "@shopify/restyle";
import { Theme } from "./Theme";

interface ButtonProps {
  label: string;
  variant: "primary" | "default";
  onPress: () => void;
}

const Button = ({ label, variant, onPress }: ButtonProps) => {
  const theme = useTheme<Theme>();

  const backgroundColor = {
    backgroundColor:
      variant === "primary" ? theme.colors.primary : theme.colors.gray,
  };
  const color = {
    color: variant === "primary" ? theme.colors.pureWhite : theme.colors.title,
  };
  return (
    <RectButton style={[styles.container, backgroundColor]} {...{ onPress }}>
      <Text variant="button" style={color}>
        {label}
      </Text>
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
});
