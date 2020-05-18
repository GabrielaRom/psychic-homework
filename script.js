let pantallas = ["login","menu", "add", "lista"];
// Función que muestra una pantalla y oculta las demás
let mostrar = function (id) {
  //Abstracción
  // Buscar y mostrar el elemento deseado
  let aMostrar = document.querySelector("#" + id);
  aMostrar.style.display = "block";
  // Ocultar los demás elementos
  for (pantalla of pantallas) {
    if (pantalla !== id)
      document.querySelector("#" + pantalla).style.display = "none";
  }
  //   return
};

mostrar("login");

let botonesAdd = document.getElementsByClassName("irAAdd");
for (boton of botonesAdd) {
  // onclick necesita la referencia a una función, no
  // el resultado de evaluar una función
  // ARROW FUNCTIONS ()=>{aksj}, funciones anónimas
  boton.onclick = () => mostrar("add");
  // boton.onmouseover = () => mostrar("lista");
}

let botonesLista = document.getElementsByClassName("irALista");
for (boton of botonesLista) {
  boton.onclick = () => mostrar("lista");
}

let botonesCerrarSesión = document.getElementsByClassName("irACerrarC");
for (boton of botonesCerrarSesión) {
  boton.onclick = () => mostrar("login");
}

let botonesMenú = document.getElementsByClassName("irAMenu");
for (boton of botonesMenú) {
  boton.onclick = () => mostrar("menu");
}

let usuarios = [
    {nombre:"Luis", clave: "clave1234"},
    {nombre:"Juan", clave: "abcd.1234"},
    {nombre:"María", clave:"miClave"},
    {nombre:"Gabriela", clave:"Román"},
];
let USUARIO; 
let iniciarSesion = function(){
    console.log("Intento de inicio de sesión");
    let nombreIntento = document.getElementById("nombre").value;
    let claveIntento = document.getElementById("password").value;
    console.log(nombreIntento);
    console.log(claveIntento);
    for(usuario of usuarios){
      if(usuario.nombre == nombreIntento && usuario.clave == claveIntento){
        //Inicio de sesión exitoso
        USUARIO = usuario.nombre;
        mostrar("menu");
        return false; 
      }
    }
    //Si se llega a este punto quiere decir que el inicio de sesión no fue exitoso
    alert("Nombre de usuario o contraseña equivocados")
    return false;
};
let formaInicioSesion = document.getElementById("formaInicioSesion");
formaInicioSesion.onsubmit = iniciarSesion;

let tareas = [
  {
    materia:"Física", 
    detalle:"Hacer el laboratorio de movimiento parabólico", 
    fecha: new Date(2020, 4, 25)
  },
  {
    materia:"Informática", 
    detalle:"Hacer aplicación tareas v1", 
    fecha: new Date(2020, 4, 14)
  },
  {
    materia:"Matemáticas", 
    detalle:"Hacer ejercicios 546 y 547 del libro", 
    fecha: new Date(2020, 4, 26)
  },
  {
    materia:"Historia", 
    detalle:"Evaluación Guerra de los 100 Años", 
    fecha: new Date(2020, 4, 13)
  },
  {
    materia:"Italiano", 
    detalle:"Evaluación Boccaccio", 
    fecha: new Date(2020, 4, 27)
  },
  
];

let crearTabla = function(lista){
  let stringTabla = " <tr><th>Materia</th><th>Detalles</th><th>Fecha</th></tr>";
  for(let tarea of lista){
    let fila = "<tr> <td>"
    fila += tarea.materia;
    fila += "</td>"

    fila += "<td>"
    fila += tarea.detalle;
    fila += "</td>"

    fila += "<td>"
    fila += tarea.fecha;
    fila += "</td>"

    fila += "</tr>";
    stringTabla += fila;
    
  }
  return stringTabla;
};

document.getElementById("tablaTareas").innerHTML = crearTabla(tareas);

//let guardar = function(lista){
 //let materiaNueva = document.getElementById("materia");
 //let detalleNuevo = document.getElementById("detalle");
 //let fechaNueva = document.getElementById("fecha");
 //let stringTabla = " <tr><th>Materia</th><th>Detalles</th><th>Fecha</th></tr>";
 //for(let tarea of lista){
    //let fila = "<tr> <td>"
    //fila += materiaNueva;
    //fila += "</td>"

    //fila += "<td>"
    //fila += detalleNuevo;
    //fila += "</td>"

    //fila += "<td>"
    //fila += fechaNueva;
    //fila += "</td>"

    //fila += "</tr>";
    //stringTabla += fila;
  //} 
  //return stringTabla;
//}
//mostrar ("lista")
//let formaAdd = document.getElementById("formaAdd");
//document.getElementById("tablaTareas").innerHTML = crearTabla(tareas);
//formaAdd.onsubmit = guardar



