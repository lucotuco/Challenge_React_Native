import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import Platos from '../Context';

const PlatoItem = ({ plato, onEliminarPlato }) => {
  return (
    <View>
      
      <Image
        source={{ uri: "https://spoonacular.com/recipeImages/"+plato.id+"-312x231.jpg" }} 
      />
      <Text>Nombre: {plato.title}</Text>
      <Text>Características: {plato.caracteristicas}</Text>
      <Button title="Ver Detalle" onPress={() => onVerDetalle(plato.id)} />
      <Button title="Eliminar del Menú" onPress={() => onEliminarPlato(plato.id)} />
    </View>
  );
};

export default PlatoItem;
