import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { Button } from "react-native-elements";
import styles from "../styles";

export default function RunningExercise({ route, navigation }) {
  const { exercise, exercises } = route.params;

  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);

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
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const recordLap = () => {
    const currentTime = formatTime(seconds);
    setLaps((prevLaps) => [...prevLaps, currentTime]);
  };

  const goToSuggested = () => {
    const next = exercises.find((e) => e.id === exercise.suggested);
    if (!next) return;

    if (next.type === "repetiton") {
      navigation.push("Repetition", { exercise: next, exercises });
    } else if (next.type === "duration") {
      navigation.push("Duration", { exercise: next, exercises });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>
      <Text style={styles.counter}>{formatTime(seconds)}</Text>

      <View style={{marginBottom:20}}>
      {!running && (<Button title="Start" onPress={() => setRunning(true)} buttonStyle={styles.button} />)}
      {running && (<Button title="Stop" onPress={() => setRunning(false)} buttonStyle={styles.stopButton} />)}
      {running && (<Button title="Record Lap" onPress={recordLap} buttonStyle={styles.button} />)}
      <Button title="Reset" onPress={() => {setRunning(false); setSeconds(0); setLaps([]);}} buttonStyle={styles.resetButton}/>
      </View>

  
      <View style={{width: "80%", maxHeight: 150, marginBottom: 20 }}>
      <Text style={styles.lapText}>Laps</Text>
        <FlatList
          data={laps}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Text style={{ fontSize: 16, marginVertical: 2, textAlign: "center", }}>
              Lap {index + 1}: {item}
            </Text>
  )}
      />
      </View>

      <Button
        title="Suggested Exercise"
        onPress={goToSuggested}
        buttonStyle={styles.sugButton}
      />

      <Button
        title="Home"
        onPress={() => navigation.navigate("Home")}
        buttonStyle={styles.homeButton}
      />
    </View>
  );
}