import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

export default function DurationExercise({ route, navigation }) {
  const { exercise, exercises } = route.params;
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer = null;

    if (running) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running]);

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;

    const paddedMins = String(mins).padStart(2, "0");
    const paddedSecs = String(secs).padStart(2, "0");

    return `${paddedMins}:${paddedSecs}`;
  };

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
      <Text style={{ fontSize: 30, marginBottom: 20 }}>{formatTime(seconds)}</Text>

      {!running && <Button title="Start" onPress={() => setRunning(true)} />}
      {running && <Button title="Stop" onPress={() => setRunning(false)} />}
      <Button
        title="Reset"
        onPress={() => {
          setRunning(false);
          setSeconds(0);
        }}
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