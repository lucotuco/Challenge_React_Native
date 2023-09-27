import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const PlatoItem = ({ plato, onEliminarPlato }) => {
  return (
    <View>
      
      <Image
        source={{ uri: "https://spoonacular.com/recipeImages/"+plato.id+"-312x231.jpg" }} // Reemplaza 'plato.imagen' con la URL de la imagen real
        style={{ width: 100, height: 100 }}
      />
      <Text>Nombre: {plato.nombre}</Text>
      <Text>Características: {plato.caracteristicas}</Text>
      <Button title="Ver Detalle" onPress={() => onVerDetalle(plato.id)} />
      <Button title="Eliminar del Menú" onPress={() => onEliminarPlato(plato.id)} />
    </View>
  );
};

export default PlatoItem;
