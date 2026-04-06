import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import styles from "../styles";

export default function RepetitionExercise({ route, navigation }) {
  const { exercise, exercises } = route.params;
  const [count, setCount] = useState(0);

  const goToSuggested = () => {
    const next = exercises.find((e) => e.id === exercise.suggested);
    if (!next) return;

    if (next.type === "repetition") {
      navigation.push("Repetition", { exercise: next, exercises });
    } else {
      navigation.push("Duration", { exercise: next, exercises });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>
      <Text style={styles.counter}>{count}</Text>

      <Button title="+1 Rep" onPress={() => setCount(count + 1)} buttonStyle={styles.button}/>
      
      <Button title="Reset" onPress={() => setCount(0)} buttonStyle={styles.resetButton}/>

      <Button title="Suggested Exercise" onPress={goToSuggested} buttonStyle={styles.sugButton}/>

      <Button title="Home" onPress={() => navigation.navigate("Home")} buttonStyle={styles.homeButton}/>
    </View>
  );
}