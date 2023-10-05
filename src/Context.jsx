import React, { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/food/menuItems/search?apiKey=6804828f174047269f342ccf36f63f8d&query=pasta&number=10`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchDataFromAPI();
  }, []);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};
