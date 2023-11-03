import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import {  Row, Cell } from "react-native-table-component";

const Detalles = ({ route, navigation }) => {
  const { Plato } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: Plato.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{Plato.title}</Text>
        <Text style={styles.summary}>{Plato.summary}</Text>
        <View style={styles.tableContainer}>
            <Row data={["Gluten free", Plato.glutenFree ? "Sí" : "No"]} style={styles.row} textStyle={styles.cellText} />
            <Row data={["Health score", Plato.healthScore]} style={styles.row} textStyle={styles.cellText} />
            <Row data={["Price per serving", `$${Plato.pricePerServing}`]} style={styles.row} textStyle={styles.cellText} />
        </View>
      </View>
      <Button title="Volver" onPress={() => navigation.goBack()} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  summary: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
  },

  row: {
    height: 40,
  },
  cellText: {
    textAlign: "center",
  },
  button: {
    marginTop: 16,
    width: 200,
    height: 40,
  },
});

export default Detalles;