import React,{useEffect,useState} from "react";
import { View, Text, Image } from "react-native";
import { useDataContext } from "../Context";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {Button} from "react-native-paper";


const DetallePlato = ( props) => {
  const [data, setData] = useState(null);

  const Idplato = props.route.params
  console.log(Idplato);
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/${Idplato.Idplato}/information?apiKey=d2b669cce7d641cd8c8ab976e4125928`);
          const data = await response.json();
           setData(data);
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    };
    
    fetchDataFromAPI();
  }, []);
    const navigation = useNavigation();
    console.log(data)
    console.log(Idplato)
  if (!data) { 
    return <Text>No hay datos disponibles.</Text>;
  }

  
  return (
    <View>
      
        <Card  style={{ margin: 10 }}>
        <Card.Cover  />
        <Card.Content>
          <Text>{if(data.vegetarian==true)
          {
            
          }}</Text>
        </Card.Content>
        
      </Card>
      </View>
  );
};

export default DetallePlato;


