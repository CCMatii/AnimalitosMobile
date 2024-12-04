export const fetchAnimales = async () => {
    try {
      const response = await fetch('https://huachitos.cl/api/animales');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al cargar los datos:', error);
      throw new Error('Error al cargar los datos');
    }
  };