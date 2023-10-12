import React from "react";
import { View, Text, Image } from "react-native";
import { useDataContext } from "../Context";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {Button} from "react-native-paper";

const PlatoItem = () => {
  const navigation = useNavigation();
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
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DetallePlato',{Idplato: data})}
      />
      </Card>
      ))}
    </View>
  );
};

export default PlatoItem;


