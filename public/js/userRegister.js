
window.addEventListener('load', function(){
    
   let name = document.querySelector('#name');
    let nombreValidado = name.value.trim() 
    const errorName= document.querySelector('#errorName');
    let email = document.querySelector('#email');
    let lastName = document.querySelector('#lastName');
    let rEmail = document.querySelector('#rEmail');
    let date = document.querySelector('#fechaNac')
    let file = document.querySelector('#file')
    let rPassword = document.querySelector('#rPassword')
    name.addEventListener("keyup", function(e){
        
        let value = e.target.value
        if(value.length < 4){
            errorName.innerHTML = "Campo Obligatorio";
            errorName.classList.add("error")
         }
        
       /*  let regex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
        if(!regex.test(value)){
            errorName.innerHTML("incorrecto")
        }
         */
    else{
        errorName.innerHTML = "Correcto";
        errorName.classList.remove("error")
        errorName.classList.add("sucess");
    }
})
    lastName.addEventListener("keyup", function(e){
        let errorlastName= document.querySelector('#errorLastName');
        let value = e.target.value
        if(value.length < 2){
            errorlastName.innerHTML = "Campo Obligatorio";
            errorlastName.classList.add("error")
            
    }else{
        errorlastName.innerHTML = "Correcto";
        errorlastName.classList.remove("error")
        errorlastName.classList.add("sucess")
    }
    })
    date.addEventListener("blur", function(e){
        let errorDate= document.querySelector('#errorDate');
        let value = e.target.value
        
        if(value == ""){
            errorDate.innerHTML = "Campo Obligatorio";
            errorDate.classList.add("error")
    }else{
        errorDate.innerHTML = "Correcto";
        errorDate.classList.remove("error")
        errorDate.classList.add("sucess")
       
    }
    })

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
        errorEmail.innerHTML = "Campo correcto"
    }
})
    rEmail.addEventListener("blur", function(e){
        let valueEmail = document.querySelector('#email');
        let errorRemail= document.querySelector('#errorRemail');
        let valueRemail = e.target.value
       if(valueEmail.value !== valueRemail){
        errorRemail.innerHTML = "Email no coincide";
        errorRemail.classList.add("error")
       }else{
        errorRemail.innerHTML = "correcto";
        errorRemail.classList.remove("error")
        errorRemail.classList.add("sucess")
       }
       /*  if(valueRemail.length < 1){
            errorRemail.innerHTML = "Campo Obligatorio";
            errorRemail.classList.add("error")
    }
    let regex= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if(!regex.test(valueRemail)){
        
        errorRemail.innerHTML = "example@example.com";
        errorRemail.classList.add("error")
    

    }else{
        errorRemail.classList.remove("error")
        errorRemail.classList.add("sucess")
        errorRemail.innerHTML = "Campo correcto"
    } */
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
        errorPassword.innerHTML = "La Contraseña es correcta";
        errorPassword.classList.add("sucess")
    }
    })
    rPassword.addEventListener("keyup", function(e){
        let valuePassword = document.querySelector('#password')
        let errorRpassword = document.querySelector('#errorRpassword')
        let valueRpasword = e.target.value
        
        if(valuePassword.value !== valueRpasword){
         errorRpassword.innerHTML = "Las contraseñas no coinciden";
         errorRpassword.classList.add("error")
        }else{
         errorRpassword.innerHTML = "correcto";
         errorRpassword.classList.remove("error")
         errorRpassword.classList.add("sucess")
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
    /* document.querySelector("#mostrar").addEventListener("click",function(e){
        let target = e.target
        let fieldset = target.parentElement
        let password = fieldset.querySelector("input[name="password"]")
        let type = password.getAttribute("type")
        if(type == "password"){
            password.setAttribute("type", "text")
        }else{
            password.setAttribute("type", "password")
        }
    }) */
})