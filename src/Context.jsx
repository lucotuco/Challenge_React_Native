import React, { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // El estado del usuario
  const [loading, setLoading] = useState(false); // Estado de carga
}

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/food/menuItems/search?apiKey=2f3ecdfbb20e494da7885893868a2b7e&query=pasta&number=2`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
      
    };

    fetchDataFromAPI();
    
  }, []);

  const login = async (email, password) => {
    setLoading(true);

    try {
      const response = await fakeLogin(email, password); // Simulación de inicio de sesión

      // Si la autenticación es exitosa, actualiza el estado del usuario
      setUser({ email, response });
    } catch (error) {
      // Maneja los errores de inicio de sesión, por ejemplo, muestra un mensaje de error
      console.error("Error al iniciar sesión:", error);
    } finally {
      setLoading(false);
    }
  };

  const fakeLogin = async (email, password) => {
    let token;
    try {
      const response = await fetch("http://challenge-react.alkemy.org/?email="+ email +"&password=" + password, {
        method: "POST",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        token = data;
      } else {
        console.log("Request failed:", response.status);
        alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error(error);
    }
    return token;
  };

  const logout = async () => {
    setUser(null);
  };

  const signup = async (email, password) => {
    // Lógica de registro aquí
  };

  const value = {
    user,
    loading,
    login,
    logout,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
  
};




