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
import { FontAwesome } from "@expo/vector-icons";
import GlobalStyles from "../../constants/GlobalStyles";

export default function App() {
  const [Exercise, setExercise] = useState("");
  const [Weight, setWeight] = useState("");
  const [Sets, setSets] = useState("");
  const [Reps, setReps] = useState("");
  const [getValue, setValue] = useState(0);
  const [WorkOuts, setWorkOuts] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("sessionValue");
      const jsonValue2 = JSON.parse(jsonValue);
      if (jsonValue2 !== null) {
        setWorkOuts(jsonValue2);
      }
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
      console.log(WorkOuts);
    }
  };

  const storeData = async () => {
    if (!loading) {
      try {
        const jsonValue = await AsyncStorage.setItem(
          "sessionValue",
          JSON.stringify(WorkOuts)
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
  }, [WorkOuts]);

  const handleAddTask = () => {
    const newWorkOut = {
      id: Date.now(),
      getValue,
      Exercise,
      Weight,
      Sets,
      Reps,
      date: Date().toLocaleString(),
    };
    setWorkOuts([...WorkOuts, newWorkOut]);
    setExercise("");
    setWeight("");
    setSets("");
    setReps("");
    closeShowDataInput();
  };

  const submitValues = () => {
    setExercise("");
    setWeight("");
    setSets("");
    setReps("");
  };

  const showDataInput = () => {
    setOpen(true);
  };

  const closeShowDataInput = () => {
    setOpen(false);
    setExercise("");
    setWeight("");
    setSets("");
    setReps("");
    setValue(0);
  };

  const removeExerciseValue = (workout) => {
    const updateRemoveWorkOut = WorkOuts.filter((item) => item.id !== workout.id);
    console.log(updateRemoveWorkOut);
    setWorkOuts(updateRemoveWorkOut);
  };

  if (open === true) {
    return (
      <View style={styles.farBackView}>
        <View style={styles.container}>
          <View style={styles.kvp}>
            <Text style={styles.key}>Exercise : </Text>
            <TextInput
              style={styles.inputText}
              placeholder="Enter Exercise"
              value={Exercise}
              onChangeText={setExercise}
            />
          </View>

          <View style={styles.kvp}>
            <Text style={styles.key}>Weight : </Text>
            <TextInput
              style={styles.inputText}
              placeholder="Enter Weight"
              value={Weight}
              onChangeText={setWeight}
              keyboardType="number-pad"
            />
          </View>

          <View style={styles.kvp}>
            <Text style={styles.key}>Sets : </Text>
            <TextInput
              style={styles.inputText}
              placeholder="Enter Sets"
              value={Sets}
              onChangeText={setSets}
              keyboardType="number-pad"
            />
          </View>

          <View style={styles.kvp}>
            <Text style={styles.key}>Reps : </Text>
            <TextInput
              style={styles.inputText}
              placeholder="Enter Reps"
              value={Reps}
              onChangeText={setReps}
              keyboardType="number-pad"
            />
          </View>

          <Pressable style={styles.basicButtons} onPress={handleAddTask}>
            <Text style={styles.submitText}>Submit Exercise</Text>
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
          <Text style={styles.submitText}>Add New Exercise</Text>
        </Pressable>
        <ScrollView style={styles.scrollViewStyle}>
          {WorkOuts.map((workout) => (
            <View key={`${workout.id}`}>
              <View style={GlobalStyles.ItemContainer}>
                <View style={styles.finalCalcView}>
                  <Text style={styles.finalCalText}>{workout.Exercise}</Text>
                </View>
                <Text style={styles.dateText}>{workout.date}</Text>
                <Text style={styles.calText}>Weight: {workout.Weight}</Text>
                <Text style={styles.calText}>Sets: {workout.Sets}</Text>
                <Text style={styles.calText}>Reps: {workout.Reps}</Text>

                <Pressable
                  style={styles.dataValue}
                  key={`${workout.id}`}
                  onPress={() => removeExerciseValue(workout)}
                >
                  <FontAwesome name="trash" size={24} color="red" style={styles.trashIcon} />
                  {/* Existing Exercise item content */}
                </Pressable>
              </View>
            </View>
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
  scrollViewStyle: {
    width: "100%",
    marginTop: 10,
  },
  dataValue: {
    margin: 20,
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
  inputText: {
    fontSize: 29,
    backgroundColor: "#D3D3D3",
    padding: 5,
    borderWidth: 2,
    borderColor: "white",
  },
  finalCalcView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 4,
  },
  kvp: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  key: {
    flex: 1,
    marginHorizontal: 12,
    fontSize: 30,
    color: "white",
  },
});
