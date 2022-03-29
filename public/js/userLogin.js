window.addEventListener('load', function(){

    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    email.addEventListener("keydown", function(e){
        let errorEmail= document.querySelector('#errorEmail');
        const valueEmail = e.target.value
        if(valueEmail.length < 1){
            errorEmail.innerHTML = "Campo Obligatorio";
            errorEmail.classList.add("error")
    }
    let regex= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if(!regex.test(valueEmail)){
        
        errorEmail.innerHTML = "example@example.com";
    }else{
        errorEmail.classList.remove("error")
        errorEmail.classList.add("sucess")
        errorEmail.innerHTML = ""
    }
})
    password.addEventListener("keyup", function(e){
        let errorPassword= document.querySelector('#errorPassword'); 
        let value = e.target.value
   
        if(value.length < 1){
            errorPassword.classList.add("error")
            errorPassword.innerHTML = "La Contraseña es obligatoria";
    }
    let regex= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(!regex.test(value)){
        errorPassword.classList.add("error")
        errorPassword.innerHTML = "La Contraseña debe tener al menos 8 caracteres, 1 letra y 1 número";
        
    }else{
        errorPassword.classList.remove("error")
        errorPassword.innerHTML = "";
        errorPassword.classList.add("sucess")
    }
    })


})