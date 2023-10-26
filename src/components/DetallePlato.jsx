import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useDataContext } from "../Context";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const DetallePlato = (props) => {
  const [data, setData] = useState(null);

  const Idplato = props.route.params;
  console.log(Idplato);
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${Idplato.Idplato}/information?apiKey=2f3ecdfbb20e494da7885893868a2b7e`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    };

    fetchDataFromAPI();
  }, []);
  const navigation = useNavigation();
  console.log(data);
  if (!data) {
    return <Text>No hay datos disponibles.</Text>;
  }

  console.log(data.vegetarian);
  const styles = StyleSheet.create({
    foto: {
      width: 100,
      height: 100,
    },
  });

  return (
    <>
    {data &&(<View>
      <h1>{data.title}</h1>
      <Image
        source={{
          uri: data.Image,
        }}
        style={styles.foto}
      />
      <h2>Porciones: {data.servings}</h2>
        <h2>Vegano: {data.vegan}</h2>
        <h2>Saludable:{data.veryHealthy}</h2>
        <h2>Precio: ${data.pricePerServing}</h2>
        <h2>Listo en: {data.readyInMinutes}</h2>
    </View>)}
    </>
  );
};

export default DetallePlato;
