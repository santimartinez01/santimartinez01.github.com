//Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");

//Recorrerlos
links.forEach(function(link) {
  //Agregar un evento dando click a cada uno de ellos
  link.addEventListener("click", function(ev){
    ev.preventDefault();
    return false;
  });
});
