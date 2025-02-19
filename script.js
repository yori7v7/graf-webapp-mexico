document.addEventListener('DOMContentLoaded', () => {
  // Obtenemos los elementos de los sliders y los recuadros
  const brilloVerde = document.getElementById('brillo-verde');
  const cajaVerde = document.getElementById('caja-verde');
  const hexVerde = document.getElementById('hex-verde');

  const brilloRojo = document.getElementById('brillo-rojo');
  const cajaRojo = document.getElementById('caja-rojo');
  const hexRojo = document.getElementById('hex-rojo');

  // Función para convertir un porcentaje de brillo en un código HEX
  function ajustarBrillo(colorBase, brillo) {
    const color = parseInt(colorBase, 16); // Convertimos a número
    const nuevoColor = Math.round(color * (brillo / 100)); // Ajustamos el brillo
    const hex = nuevoColor.toString(16).padStart(2, '0'); // Convertimos de vuelta a HEX
    return hex.toUpperCase();
  }

  // Ajustar brillo para el recuadro verde
  brilloVerde.addEventListener('input', () => {
    const valor = brilloVerde.value; // Rango 0 - 100
    const nuevoVerde = ajustarBrillo(255, valor); // Calculamos el nuevo valor HEX
    cajaVerde.style.backgroundColor = `#00${nuevoVerde}00`; // Aplicamos el color
    hexVerde.textContent = `#00${nuevoVerde}00`; // Mostramos el código HEX
  });

  // Ajustar brillo para el recuadro rojo
  brilloRojo.addEventListener('input', () => {
    const valor = brilloRojo.value; // Rango 0 - 100
    const nuevoRojo = ajustarBrillo(255, valor); // Calculamos el nuevo valor HEX
    cajaRojo.style.backgroundColor = `#${nuevoRojo}0000`; // Aplicamos el color
    hexRojo.textContent = `#${nuevoRojo}0000`; // Mostramos el código HEX
  });
});
