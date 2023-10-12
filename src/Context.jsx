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
        const response = await fetch(`https://api.spoonacular.com/food/menuItems/search?apiKey=d2b669cce7d641cd8c8ab976e4125928&query=pasta&number=2`);
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
