import React from "react";
import { View, Text, Image } from "react-native";
import { useDataContext } from "../Context";
import { Card } from "react-native-paper";


const PlatoItem = () => {
  const {data} = useDataContext();
  console.log(data)
  if (!data) { 
    return <Text>No hay datos disponibles.</Text>;
  }

  
  return (
    <View>
      
      {data.menuItems.map((item) => (
        <Card key={item.id} style={{ margin: 10 }}>
        <Card.Cover source={{ uri: item.image }} />
        <Card.Content>
          <Text>{item.title}</Text>
          {}
        </Card.Content>
      </Card>
      ))}
    </View>
  );
};

export default PlatoItem;


