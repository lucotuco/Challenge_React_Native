// PlatoDetail.js

import React from "react";
import { View, Text, Image } from "react-native";

const PlatoDetail = ({ route }) => {
  const { plato } = route.params;

  return (
    <View>
      <Image source={{ uri: plato.image }} style={{ width: 100, height: 100 }} />
      <Text>{plato.title}</Text>
      {/* Agrega más detalles del plato aquí si es necesario */}
    </View>
  );
};

export default PlatoDetail;
