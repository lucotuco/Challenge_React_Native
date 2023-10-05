import React from "react";
import { View, Text, Image } from "react-native";
import { useDataContext } from "../Context";

const PlatoItem = () => {
  const data = useDataContext();
  console.log(data)
  if (!Array.isArray(data)) { 
    return <Text>No hay datos disponibles.</Text>;
  }

  return (
    <View>
      {data.map((item) => (
        <View key={item.id}>
          <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
          <Text>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default PlatoItem;
