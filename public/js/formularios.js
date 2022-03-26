window.addEventListener('load', function() {
    let formulario = document.querySelector("form")
      // escribí tu código aquí
    formulario.addEventListener("submit",function(evento){
      evento.preventDefault()
    })
    if( nombre.value == ""){
        console.log("Hubo un error en el nombre")
      }
      if( password.value.length <0){
        console.log("Hubo un error en el password")
      }
    });