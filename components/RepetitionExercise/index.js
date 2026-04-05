import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

export default function RepetitionExercise({ route, navigation }) {
  const { exercise, exercises } = route.params;
  const [count, setCount] = useState(0);

  const goToSuggested = () => {
    const next = exercises.find((e) => e.id === exercise.suggested);
    if (!next) return;

    if (next.type === "reps") {
      navigation.push("Reps", { exercise: next, exercises });
    } else {
      navigation.push("Duration", { exercise: next, exercises });
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>{exercise.name}</Text>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>{count}</Text>

      <Button title="+1 Rep" onPress={() => setCount(count + 1)} />
      <Button
        title="Reset"
        onPress={() => setCount(0)}
        buttonStyle={{ backgroundColor: "orange", marginTop: 10 }}
      />

      <Button
        title="Suggested Exercise"
        onPress={goToSuggested}
        buttonStyle={{ backgroundColor: "green", marginTop: 10 }}
      />

      <Button
        title="Home"
        onPress={() => navigation.navigate("Home")}
        buttonStyle={{ backgroundColor: "blue", marginTop: 10 }}
      />
    </View>
  );
}