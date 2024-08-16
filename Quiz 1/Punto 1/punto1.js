let tareas = [
  { id: 1, nombre: 'Hacer la compra', completada: false },
  { id: 2, nombre: 'Lavar los platos', completada: false },
  { id: 3, nombre: 'Hacer ejercicio', completada: false }
];

function marcarComoCompletada(id) {
  tareas.forEach((tarea) => {
    if (tarea.id === 1) {
      tarea.completada = true;
    }
  });
  return tareas;
}

marcarComoCompletada(2);
console.log(tareas);

  