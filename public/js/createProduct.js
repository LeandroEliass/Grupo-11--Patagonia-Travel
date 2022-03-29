window.addEventListener('load', function(){
let name = document.querySelector("#name")
let address = document.querySelector("#address")
let capacity = document.querySelector("#capacity")
let surface = document.querySelector("#surface")
let description = document.querySelector("#description")
let price = document.querySelector("#price")
let file = document.querySelector("#file")
let icono = document.querySelector("#tilde")
name.addEventListener("keyup", function(e){
    let errorName = document.querySelector("#errorName")
    let value = e.target.value
        if(value.length < 4){
            errorName.innerHTML = "Campo Obligatorio";
            errorName.classList.add("error")
    }else{
        errorName.innerHTML = "";
        errorName.classList.remove("error")
        icono.style.display = "block";
        
    }
})
address.addEventListener("keyup", function(e){
    let errorAddress = document.querySelector("#errorAddress")
    let value = e.target.value
        if(value < 7){
            errorAddress.innerHTML = "Campo Obligatorio";
            errorAddress.classList.add("error")
    }else{
        errorAddress.innerHTML = "";
        errorAddress.classList.remove("error")
        icono.style.display = "block"
    }
})
capacity.addEventListener("blur", function(e){
    let errorCapacity = document.querySelector("#errorCapacity")
    let value = e.target.value
        if(value == ""){
            errorCapacity.innerHTML = "Campo Obligatorio";
            errorCapacity.classList.add("error")
    }else{
        errorCapacity.innerHTML = "";
        errorCapacity.classList.remove("error")
        icono.style.display = "block"
    }
})
description.addEventListener("keyup", function(e){
    let errorDescription = document.querySelector("#errorDescription")
    let value = e.target.value
        if(value.length < 20){
            errorDescription.innerHTML = "Debe tener como mínimo 20 caracteres";
            errorDescription.classList.add("error")
    }else{
        errorDescription.innerHTML = "Correcto";
        errorDescription.classList.remove("error")
        errorDescription.classList.add("sucess");
    }
})
surface.addEventListener("blur", function(e){
    let errorSurface = document.querySelector("#errorSurface")
    let value = e.target.value
        if(value == ""){
            errorSurface.innerHTML = "Campo Obligatorio";
            errorSurface.classList.add("error")
    }else{
        errorSurface.innerHTML = "Correcto";
        errorSurface.classList.remove("error")
        errorSurface.classList.add("sucess");
    }
})
price.addEventListener("blur", function(e){
    let errorPrice = document.querySelector("#errorPrice")
    let value = e.target.value
        if(value == ""){
            errorPrice.innerHTML = "Campo Obligatorio";
            errorPrice.classList.add("error")
    }else{
        errorPrice.innerHTML = "Correcto";
        errorPrice.classList.remove("error")
        errorPrice.classList.add("sucess");
    }
})
file.addEventListener("change", function(e){
    let target = e.target;
    let value = target.files;
    let errorFile = document.querySelector('#errorFile')
    let regex = /^image\//;

    if(!regex.test(value[0].type)){
        target.classList.add("error")
        errorFile.classList.add("error")
        errorFile.innerHTML = "El archivo no es una imagen"
    }else{
        target.classList.add("sucess")
        errorFile.classList.remove("error")
        errorFile.classList.add("sucess")
        errorFile.innerHTML = "El archivo es una imagen"
    }
})
})