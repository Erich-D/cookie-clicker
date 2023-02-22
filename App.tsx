import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CoreComponent from './components/core-component';

export default function App() {
  return (
    <View style={styles.container}>
      <CoreComponent/>
    </View>
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
//npx expo install @react-native-async-storage/async-storage