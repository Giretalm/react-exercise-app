import React from 'react';
import { View, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import styles from "../styles";

export default function Home({ navigation }) {
  
  const exercises = [
    { id: "1", name: "Squat", type: "repetition", suggested: "2" },
    { id: "2", name: "Deadlift", type: "repetition", suggested: "3" },
    { id: "3", name: "Bicep Curl", type: "repetition", suggested: "1" },
    { id: "4", name: "Running", type: "running", suggested: "6" },
    { id: "5", name: "Plank", type: "duration", suggested: "4" },
    { id: "6", name: "Cycling", type: "duration", suggested: "5" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Button
              title={item.name}
              buttonStyle={styles.button}
              onPress={() => {
                if (item.type === 'repetition') {
                  navigation.navigate('Repetition', { exercise: item, exercises });
                } else if (item.type === 'duration') {
                  navigation.navigate('Duration', { exercise: item, exercises });
                } else if (item.type === 'running') {
                  navigation.navigate('Running', { exercise: item, exercises });
                }
              }}
            />
          </View>
        )}
      />
    </View>
  );
}