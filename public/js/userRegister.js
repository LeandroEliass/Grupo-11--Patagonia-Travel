window.addEventListener('load', function(){
    let name = document.querySelector('#name');
    let nombreValidado = name.value.trim()
    let email = document.querySelector('#email');
    let button = document.querySelector('#enviar');
    let text = document.querySelector('#text-danger')
    let form = document.querySelector('#form');
    const etiqueta = document.querySelector('#text-danger')
    let lastName = document.querySelector('#lastName');
    let date = document.querySelector('#fechaNac');
    
    let rEmail = document.querySelector('#rEmail');
    let password = document.querySelector('#password');
    let rPassword = document.querySelector('#rPassword');
    let nameError = document.querySelector('#nameError');
    let emailError = document.querySelector('#emailError');
    let passwordError = document.querySelector('#passwordError');
    let repasswordError = document.querySelector('#repasswordError');
    button.addEventListener('click', (event)=> {
        let errores = {};
        
        if(nombreValidado.length < 4 ){
            errores.name = 'Nombre demasiado corto';
        }
        if(email.value.length < 1 ){
            errores.email = 'Este campo debe estar completo';
        }
        if(password.value.length < 1 ){
            errores.password = 'Este campo debe estar completo';
        }
        if(repassword.value.length < 1 ){
            errores.repassword = 'Este campo debe estar completo';
        }
        if (Object.keys(errores).length >= 1){
            etiqueta.innerHtml = errores
             event.preventDefault();

        }else {
            form.submit();
        }
    })
})