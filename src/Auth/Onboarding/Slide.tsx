import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

interface SlideProps {
  label: string;
  right?: boolean;
}

const Slide = ({ label }: SlideProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    backgroundColor: "red",
    height: 100,
    justifyContent: 'center'
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    fontFamily: "SFProText-Bold",
    color: "#FFFFFF",
    textAlign: 'center'
  },
});

export default Slide;
