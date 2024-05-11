import { StyleSheet } from "react-native";
import Colors from "./Colors";

// We would ideally extract colors into a separate file too.
const GlobalStyles = StyleSheet.create({
  button: {
    backgroundColor: Colors.backgroundFore,
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "black",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: Colors.textFore,
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    color: Colors.textBack,
    lineHeight: 24,
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.backgroundBack,
  },
  ItemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.backgroundItem,
    marginBottom: 10,
  }
});


export default GlobalStyles;
