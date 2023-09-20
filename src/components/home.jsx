import React, { useContext, useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useAuth } from '../context/AuthContext'; // Importa el contexto de autenticación

// Ejemplo de datos de platos (puedes reemplazarlo con datos reales)
const platosData = [
  { id: 1, nombre: 'Plato 1', precio: 10, healthScore: 90, esVegano: false },
  { id: 2, nombre: 'Plato 2', precio: 15, healthScore: 95, esVegano: true },
  { id: 3, nombre: 'Plato 3', precio: 12, healthScore: 88, esVegano: false },
  { id: 4, nombre: 'Plato 4', precio: 18, healthScore: 92, esVegano: true },
];

const Home = () => {
  const { token } = useAuth(); // Obtén el token de autenticación desde el contexto
  const [menu, setMenu] = useState([]);
  const [acumulativoPrecio, setAcumulativoPrecio] = useState(0);
  const [promedioHealthScore, setPromedioHealthScore] = useState(0);

  // Filtra los platos para el menú (máximo 4, con 2 veganos y 2 no veganos)
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

    // Calcular el acumulativo de precio y el promedio de Health Score
    const totalPrecio = nuevoMenu.reduce((acc, plato) => acc + plato.precio, 0);
    const promedio =
      nuevoMenu.reduce((acc, plato) => acc + plato.healthScore, 0) / nuevoMenu.length;

    setAcumulativoPrecio(totalPrecio);
    setPromedioHealthScore(promedio);
  }, []);

  return (
    <View>
      {token ? (
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
      ) : (
        <Text>Debes iniciar sesión para ver el menú.</Text>
      )}
    </View>
  );
};

export default Home;
