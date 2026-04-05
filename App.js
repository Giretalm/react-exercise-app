import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './components/Home';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';
import RunningExercise from './components/RunningExercise';

const Stack = createNativeStackNavigator();
function HomeScreen() {
  return (
  
  <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    <StatusBar style="auto" />
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Reps" component={RepetitionExercise} />
        <Stack.Screen name="Duration" component={DurationExercise} />
        <Stack.Screen name="Running" component={RunningExercise} />
        
        
      </Stack.Navigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
