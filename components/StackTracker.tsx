import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";
import ExerciseTracking from "../screens/settings/ExerciseTracking";
import CalorieTracking from "../screens/settings/CalorieTracking";
import TrackerScreen from "../screens/TrackerScreen";


export type SettingsStackParamList = {
  ExerciseTracking: undefined;
  CalorieTracking: undefined;
};


export const StackTracker = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="TrackerScreen" 
      component={TrackerScreen}
      options={{ headerShown: false }} 
      />
      <Stack.Screen 
      name="ExerciseTracking" 
      component={ExerciseTracking} 
      />
      <Stack.Screen 
      name="CalorieTracking" 
      component={CalorieTracking} 
      />
    </Stack.Navigator>
  );
};
