import React from "react";
import { View, Text, Image } from "react-native";
import { useDataContext } from "../Context";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {Button} from "react-native-paper";


const DetallePlato = () => {
  const {data} = useDataContext();
  useEffect(() => {
      const fetchDataFromAPI = async () => {
        try {
          const response = await fetch('https://api.spoonacular.com/recipes/'+data.id+'/information');
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.error("Error fetching Pokemon data:", error);
        }
        
      };
  
      fetchDataFromAPI();
      
    }, []);
  const navigation = useNavigation();
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

export default DetallePlato;


