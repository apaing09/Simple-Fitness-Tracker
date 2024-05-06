import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Colors from "./constants/Colors";
import AcceptTermsModal from "./screens/AcceptTermsModal";
import WelcomeScreen from "./screens/WelcomeScreen";
import { StackTracker } from "./components/StackTracker";


export default function App() {
  
  const Drawer = createDrawerNavigator();

  const getAppJSX = () => {
    if (termsAccepted) {
      return (
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{
              drawerStyle: {
                backgroundColor: Colors.accent1, // Background color of the drawer
                width: 160, // Width of the drawer
              },
              drawerActiveTintColor: "#000", // Set the color of the active drawer item
              drawerInactiveTintColor: "#000", // Set the color of the inactive drawer items
              headerStyle: { backgroundColor: Colors.accent1 }, // Background color of the header
              headerTintColor: Colors.textBack, // Color of the header text and back button
            }}
          >
            <Drawer.Screen name="Home" component={WelcomeScreen} />
            <Drawer.Screen name="Tracking" component={StackTracker} />
          </Drawer.Navigator>
        </NavigationContainer>
      );
    } else {
      return (
        <AcceptTermsModal
          onAccept={() => {
            setTermsAccepted(true);
          }}
        />
      );
    }
  };

  // Modal will start visible - it is an "accept terms" screen
  const [termsAccepted, setTermsAccepted] = useState(false);
  return (
    <>
      <StatusBar style="auto" />
      {getAppJSX()}
    </>
  );
}
