import React from 'react';
import { View, Flatlist } from 'react-native';
import { Button } from 'react-native-elements';

export default function Home({ navigation }) {
  
  const exercises = [
    { id: "1", name: "Squat", type: "repetition", suggested: "2" },
    { id: "2", name: "Deadlift", type: "repetiton", suggested: "3" },
    { id: "3", name: "Bicep Curl", type: "repetition", suggested: "1" },
    { id: "4", name: "Running", type: "running", suggested: "6" },
    { id: "5", name: "Plank", type: "duration", suggested: "4" },
    { id: "6", name: "Cycling", type: "duration", suggested: "5" },
  ];

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() => {
              if (item.type === 'reps') {
                navigation.navigate('Reps', { exercise: item, exercises });
              } else if (item.type === 'duration') {
                navigation.navigate('Duration', { exercise: item, exercises });
              } else if (item.type === 'running') {
                navigation.navigate('Running', { exercise: item, exercises });
              }
            }}
            buttonStyle={{ marginBottom: 10 }}
          />
        )}
      />
    </View>
  );
}