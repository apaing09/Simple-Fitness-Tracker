import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import GlobalStyles from "../constants/GlobalStyles";

const WelcomeScreen = () => {
  return (
    <View style={GlobalStyles.screenContainer}>
      <Text style={[GlobalStyles.text, { fontSize: 24, fontWeight: "bold" }]}>
        Welcome to Fitness Tracker!
      </Text>
      <View style={styles.imageContainer}>
      <Image
        source={require("../assets/workout.jpg")}
        style={styles.image}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain", // Adjust the resizeMode as needed
  },
});

export default WelcomeScreen;
