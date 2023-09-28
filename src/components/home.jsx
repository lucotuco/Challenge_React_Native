import React, { useContext, useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';


const Home = () => {
  const [menu, setMenu] = useState([]);
  const [acumulativoPrecio, setAcumulativoPrecio] = useState(0);
  const [promedioHealthScore, setPromedioHealthScore] = useState(0);

  useEffect(() => {
    const maxPlatos = 4;
    const maxVeganos = 2;
    const maxNoVeganos = 2;

    const veganos = platosData.filter((plato) => plato.esVegano);
    const noVeganos = platosData.filter((plato) => !plato.esVegano);

    const menuVeganos = veganos.slice(0, maxVeganos);
    const menuNoVeganos = noVeganos.slice(0, maxNoVeganos);

    const nuevoMenu = [...menuVeganos, ...menuNoVeganos];

    setMenu(nuevoMenu);

    const totalPrecio = nuevoMenu.reduce((acc, plato) => acc + plato.precio, 0);
    const promedio =
      nuevoMenu.reduce((acc, plato) => acc + plato.healthScore, 0) / nuevoMenu.length;

    setAcumulativoPrecio(totalPrecio);
    setPromedioHealthScore(promedio);
  }, []);

  return (
        <View>
          <Text>Acumulativo de Precio: ${acumulativoPrecio.toFixed(2)}</Text>
          <Text>Promedio de Health Score: {promedioHealthScore.toFixed(2)}</Text>
          <FlatList
            data={menu}
            renderItem={({ item }) => (
              <View>
                <Text>{item.nombre}</Text>
                <Text>Precio: ${item.precio}</Text>
                <Text>Health Score: {item.healthScore}</Text>
                <Button title="Eliminar" onPress={() => handleEliminarPlato(item.id)} />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
  );
};

export default Home;
