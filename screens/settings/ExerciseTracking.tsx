import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


//npm install @react-native-async-storage/async-storage

export default function App() {
  const [calories, setCalories] = useState("");
  const [fat, setFat] = useState("");
  const [protein, setProtein] = useState("");
  const [carb, setCarb] = useState("");
  const [getValue, setValue] = useState(0);
  const [notes, setNotes] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("dayValue");
      const jsonValue2 = JSON.parse(jsonValue);
      if (jsonValue2 !== null) {
        setNotes(jsonValue2);
      }
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
      console.log(notes);
    }
  };

  const storeData = async () => {
    if (!loading) {
      try {
        const jsonValue = await AsyncStorage.setItem(
          "dayValue",
          JSON.stringify(notes)
        );
        return jsonValue;
      } catch (e) {
        alert(e);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    storeData();
  }, [notes]);

  const handleAddTask = () => {
    const newNote = {
      id: Date.now(),
      getValue,
      calories,
      fat,
      carb,
      protein,
      date: Date().toLocaleString(),
    };
    setNotes([...notes, newNote]);
    setCalories("");
    setFat("");
    setCarb("");
    setProtein("");
    closeShowDataInput();
  };

  const submitValues = () => {
    setValue(parseFloat(getValue) + parseFloat(calories));
    setCalories("");
    setFat("");
    setCarb("");
    setProtein("");
  };

  const showDataInput = () => {
    setOpen(true);
  };

  const closeShowDataInput = () => {
    setOpen(false);
    setCalories("");
    setFat("");
    setCarb("");
    setProtein("");
    setValue(0);
  };

  const removeFoodValue = (note) => {
    const updateRemoveNote = notes.filter((item) => item.id !== note.id);
    console.log(updateRemoveNote);
    setNotes(updateRemoveNote);
  };

  if (open === true) {
    return (
      <View style={styles.farBackView}>
        <View style={styles.container}>
          <View>
            <Text style={styles.calclatedNumber}>{getValue}</Text>
          </View>
          <TextInput
            style={styles.inputText}
            placeholder="Enter todays calories(kcal)"
            value={calories}
            onChangeText={setCalories}
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.inputText}
            placeholder="Enter Fat(g) in food"
            value={fat}
            onChangeText={setFat}
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.inputText}
            placeholder="Enter Carb(g) in food"
            value={carb}
            onChangeText={setCarb}
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.inputText}
            placeholder="Enter Protein(g) in food"
            value={protein}
            onChangeText={setProtein}
            keyboardType="number-pad"
          />
          
          <Pressable style={styles.basicButtons} onPress={handleAddTask}>
            <Text style={styles.submitText}>Submit Food</Text>
          </Pressable>
          <Pressable style={styles.basicButtons} onPress={closeShowDataInput}>
            <Text style={styles.submitText}>Close</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.farBackView}>
      <View style={styles.container}>
        <Pressable style={styles.basicButtons} onPress={showDataInput}>
          <Text style={styles.submitText}>Add New Food Item</Text>
        </Pressable>
        <ScrollView style={styles.scrollViewStyle}>
        {notes.map((note) => (
          <Pressable
            style={styles.dataValue}
            key={`${note.id}`}
            onPress={() => removeFoodValue(note)}
          >
            <View style={styles.finalCalcView}>
              <Text style={styles.finalCalText}>Food</Text>
            </View>
            <Text style={styles.dateText}>{note.date}</Text>
            <Text style={styles.calText}>Total Calories: {note.calories}</Text>
            <Text style={styles.calText}>Fat(g): {note.fat}</Text>
            <Text style={styles.calText}>Carb(g): {note.carb}</Text>
            <Text style={styles.calText}>Protein(g): {note.protein}</Text>
          </Pressable>
        ))}
        </ScrollView>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  farBackView: {
    backgroundColor: "#0086D0",
  },
  container: {
    paddingTop: 5,
    backgroundColor: "#572c57",
    alignItems: "center",
    justifyContent: "center",
  },

  basicButtons: {
    width: "70%",
    backgroundColor: "#0086D0",
    borderRadius: 10,
    padding: 5,
    margin: 10,
  },
  submitText: {
    textAlign: "center",
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  headerContainer: {
    paddingTop: 40,
    width: "100%",
  },
  scrollViewStyle: {
    width: "100%",
    marginTop: 10,
  },
  dataValue: {
    margin: 20,
    borderColor: "#ffffff",
    borderWidth: 5,
    borderRadius: 10,
    padding: 5,
  },
  finalCalText: {
    margin: 10,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  dateText: {
    textAlign: "center",
    color: "grey",
    fontSize: 18,
    fontWeight: "bold",
  },
  calText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  calclatedNumber: {
    fontSize: 50,
    color: "#fff",
    fontWeight: "bold",
  },
  inputText: {
    fontSize: 29,
    backgroundColor: "#D3D3D3",
    padding: 5,
    borderWidth: 2,
    borderColor: "white",
  },
  pressed: {
    backgroundColor: "grey",
  },
  finalCalcView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9f5f91",
    borderRadius: 10,
    margin: 4,
  },
});