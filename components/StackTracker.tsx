import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";
import ExerciseTracking from "../screens/tracking/ExerciseTracking";
import CalorieTracking from "../screens/tracking/CalorieTracking";
import TrackerScreen from "../screens/TrackerScreen";


export type StackTrackerParamList = {
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
