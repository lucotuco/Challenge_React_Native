import React from 'react';
import { View, Text, Image, Button,FlatList } from 'react-native';
import {useDataContextPlato} from '../Context';

const PlatoItem = () => {
  const {platoData}= useDataContextPlato();
  if(!platoData)
  {
    console.log(platoData)
    
  } 
  return (

    <View>
      <Image
        source={{ uri: "https://spoonacular.com/recipeImages/"+platoData.id+"-312x231.jpg" }} 
      />
      <Text>Nombre: {platoData.title}</Text>
      <Text>Características: {platoData.caracteristicas}</Text>
      <Button title="Ver Detalle" onPress={() => onVerDetalle(platoData.id)} />
      <Button title="Eliminar del Menú" onPress={() => onEliminarPlato(platoData.id)} />
    </View>
  );
};

export default PlatoItem;
