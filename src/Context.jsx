import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();
export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = async () => {
    try {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          params: {
            apiKey: "6804828f174047269f342ccf36f63f8d",
          },
        }
      );

      // Almacena los datos de la API en el estado local del contexto

      setData(response.data);
    } catch (error) {
      console.error("Error al obtener datos de la API", error);
    }
  };

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
}
  export function useDataContextPlato() {
    return useContext(DataContext);};
