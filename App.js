import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";

import Home from "./src/components/home";

import Plato from "./src/components/Plato";

import { DataProvider } from "./src/Context";

export default function App() {
  return (
    <DataProvider>
      <View style={styles.container}>
        <Plato />
        
        <StatusBar style="auto" />
      </View>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",

    alignItems: "center",

    justifyContent: "center",
  },
});
