import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import GlobalStyles from "../constants/GlobalStyles";
import CustomButton from "../components/CustomButton";
import { StackTrackerParamList } from "../components/StackTracker";
import Ionicons from "@expo/vector-icons/Ionicons";

const TrackerScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackTrackerParamList>>();

  return (
    <View style={GlobalStyles.screenContainer}>
      <CustomButton
        text="Track Exercise!"
        textStyle={styles.TrackerButtonText}
        pressableStyle={styles.TrackerButton}
        onPress={() => navigation.navigate("ExerciseTracking")}
        icon="barbell-outline"
        
      />
      
      <CustomButton
        text="Track Calories!"
        textStyle={styles.TrackerButtonText}
        pressableStyle={[styles.TrackerButton, styles.space]}
        onPress={() => navigation.navigate("CalorieTracking")}
        icon="barbell-outline"
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
    flexDirection: "row", // Align icon and text horizontally
    justifyContent: "center", // Center the icon and text
    alignItems: "center", // Center the icon and text
  },
  TrackerButtonText: {
    color: Colors.textBack,
    fontWeight: "bold",
    marginLeft: 10, // Add margin between icon and text
  },
  space: {
    marginTop: 10, // Add margin or padding to create space between buttons
  },
});

export default TrackerScreen;
