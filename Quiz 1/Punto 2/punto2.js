
const ciudades = [
    { nombre: 'Nueva York', poblacion: 8419000 },
    { nombre: 'Los Ángeles', poblacion: 3980000 },
    { nombre: 'Chicago', poblacion: 2716000 },
    { nombre: 'Houston', poblacion: 2328000 }
  ];
  

  function ciudadConMayorPoblacion(ciudades) {
    if (ciudades.length === 0) {
      return null;
    }
  
    let ciudadMayorPoblacion = ciudades[0];
  
    for (let ciudad of ciudades) {
      if (ciudad.poblacion > ciudadMayorPoblacion.poblacion) {
        ciudadMayorPoblacion = ciudad;
      }
    }
  
    return ciudadMayorPoblacion;
  }
  
  const ciudadMásPoblada = ciudadConMayorPoblacion(ciudades);
  console.log(ciudadMásPoblada);
  