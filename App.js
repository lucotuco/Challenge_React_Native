import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";

import DetallePlato from "./src/components/DetallePlato";

import Plato from "./src/components/Plato";

import { DataProvider } from "./src/Context";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <DataProvider>
    <NavigationContainer>
      <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Plato" component={Plato}  />
        <Stack.Screen name="DetallePlato" component={DetallePlato}  />


      </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",


    justifyContent: "center",
  },
});
