import Platos from './Context';

const searchPlates = async (query) => {
    try {
      const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=6804828f174047269f342ccf36f63f8d`;
      
      const response = await fetch(apiUrl);
      
      const {setPlato} = React.useContext(Platos);
      setPlato=response;
      
      if (!response.ok) {
        throw new Error('Error en la solicitud a la API Spoonacular');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al buscar platos:', error);
      throw error;
    }
  };
  
  export default searchPlates;
  
