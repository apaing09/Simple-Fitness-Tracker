import React from "react";
import { Text, View } from "react-native";
import GlobalStyles from "../constants/GlobalStyles";

const WelcomeScreen = () => {
  return (

    <View style={GlobalStyles.screenContainer}>
      <Text style={[GlobalStyles.text, { fontSize: 24, fontWeight: "bold", }]}>
        Welcome to Fitness Tracker!
      </Text>
    </View>

  );
};

export default WelcomeScreen;
