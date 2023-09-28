import React from 'react';
import { View, Text, Image, Button,FlatList } from 'react-native';
import {useDataContext} from '../Context';

const PlatoItem = () => {
  const {data}= useDataContext(); 

  return (

    <View>
      <Image
        source={{ uri: "https://spoonacular.com/recipeImages/"+data.id+"-312x231.jpg" }} 
      />
      <Text>Nombre: {data.title}</Text>
      <Text>Características: {data.caracteristicas}</Text>
      <Button title="Ver Detalle" onPress={() => onVerDetalle(data.id)} />
      <Button title="Eliminar del Menú" onPress={() => onEliminarPlato(data.id)} />
    </View>
  );
};

export default PlatoItem;
