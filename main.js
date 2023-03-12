const clases = [
  { hora: "08:00", nombre: "Matemáticas", profesor: "Juan" },
  { hora: "09:00", nombre: "Ciencias", profesor: "María" },
  { hora: "10:00", nombre: "Historia", profesor: "Pedro" },
  { hora: "11:00", nombre: "Inglés", profesor: "Ana" },
  { hora: "12:00", nombre: "Educación física", profesor: "Luis" }
];
function generarHorario() {
  const tabla = document.createElement("table");
  const encabezado = tabla.createTHead();
  const filaEncabezado = encabezado.insertRow();

  const horaCeldaEncabezado = filaEncabezado.insertCell();
  horaCeldaEncabezado.textContent = "Hora";

  const nombreCeldaEncabezado = filaEncabezado.insertCell();
  nombreCeldaEncabezado.textContent = "Nombre";

  const profesorCeldaEncabezado = filaEncabezado.insertCell();
  profesorCeldaEncabezado.textContent = "Profesor";

  const cuerpoTabla = tabla.createTBody();

  for (let i = 0; i < clases.length; i++) {
    const fila = cuerpoTabla.insertRow();

    const horaCelda = fila.insertCell();
    horaCelda.textContent = clases[i].hora;

    const nombreCelda = fila.insertCell();
    nombreCelda.textContent = clases[i].nombre;

    const profesorCelda = fila.insertCell();
    profesorCelda.textContent = clases[i].profesor;
  }

  document.body.appendChild(tabla);
}
generarHorario();
