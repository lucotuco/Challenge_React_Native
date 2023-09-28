import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/home'
import Plato from './src/components/Plato'
import Platos from './src/Context';

export default function App() {
  return (

    <Platos>
    <View style={styles.container}>
      <Home/>
      <Plato/>
      <StatusBar style="auto" />
    </View>
    </Platos>
    
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
