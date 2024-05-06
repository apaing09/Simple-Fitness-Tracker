import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import GlobalStyles from "../constants/GlobalStyles";
import CustomButton from "../components/CustomButton";
import { SettingsStackParamList } from "../components/StackTracker";

const SettingsScreen = () => {

  const navigation = 
  useNavigation <createNativeStackNavigator<SettingsStackParamList>>();
 
  return (
  <View style={GlobalStyles.screenContainer}>
    <CustomButton
      text="Track Exercise!"
      textStyle={styles.TrackerButtonText}
      pressableStyle={styles.TrackerButton}
      onPress={() => navigation.navigate("ExerciseTracking")}
      />
      <CustomButton
      text="Track Calories!"
      textStyle={styles.TrackerButtonText}
      pressableStyle={[styles.TrackerButton, styles.space]}
      onPress={() => navigation.navigate("CalorieTracking")}
      />
  </View>
  );
};

const styles = StyleSheet.create({
  settingsContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 20,
  },
 
  TrackerButton: {
    width: "100%",
    marginTop: 0,
    backgroundColor: Colors.accent3,
    borderRadius: 0,
    borderBottomWidth: 4,
    borderColor: Colors.textBack + "80",
  },
  TrackerButtonText: {
    color: Colors.textBack,
    fontWeight: "bold",
  },
  space: {
    marginTop: 10, // Add margin or padding to create space between buttons
  },
});

export default SettingsScreen;
