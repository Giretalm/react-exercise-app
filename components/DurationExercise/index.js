import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import styles from "../styles";

export default function DurationExercise({ route, navigation }) {
  const { exercise, exercises } = route.params;
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer = null;
    if (running) timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, [running]);

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const goToSuggested = () => {
    const next = exercises.find((e) => e.id === exercise.suggested);
    if (!next) return;
    if (next.type === "reps") navigation.push("Reps", { exercise: next, exercises });
    else if (next.type === "duration") navigation.push("Duration", { exercise: next, exercises });
    else if (next.type === "running") navigation.push("Running", { exercise: next, exercises });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>
      <Text style={styles.counter}>{formatTime(seconds)}</Text>

      {!running && <Button title="Start" onPress={() => setRunning(true)} buttonStyle={styles.button} />}
      {running && <Button title="Stop" onPress={() => setRunning(false)} buttonStyle={styles.stopButton} />}
      <Button title="Reset" onPress={() => { setRunning(false); setSeconds(0); }} buttonStyle={styles.resetButton} />
      <Button title="Suggested Exercise" onPress={goToSuggested} buttonStyle={styles.sugButton} />
      <Button title="Home" onPress={() => navigation.navigate("Home")} buttonStyle={styles.homeButton} />
    </View>
  );
}