const formulario = document.getElementById("miFormulario")
formulario.addEventListener ("submit",validar)
function validar(evento) {
    evento.preventDefault()
    const nombre = document.getElementById("nombre").value
    const email = document.getElementById("email").value
    const telefono = document.getElementById("telefono").value
    const asunto = document.getElementById("asunto").value
    const mensaje = document.getElementById("mensaje").value
    const regex_texto = /^[a-zA-Z\s]+$/;
    const regex_email = /^\S+@\S+\.\S+$/;
    //validando que los datos no esten vacios...
    if (valor_sin_espacios(nombre)==""){
        alert('debes llenar el nombre')
        return;
    }
    if (valor_sin_espacios(email)==""){
        alert('debes llenar el email')
        return;
    }
    if (valor_sin_espacios(telefono)==""){
        alert('debes llenar el telefono')
        return;  
    }
    if (valor_sin_espacios(asunto)==""){
        alert('debes llenar el asunto')
        return;
    }
    if (valor_sin_espacios(mensaje)==""){
        alert('debes llenar el mensaje')
        return;
    }
    //validando el tipo de dato
    if (isNaN(telefono)) {
      alert('el telefono debe ser solamente numerio');
      return;
    }
    if (!regex_texto.test(nombre)) {
        alert('el nombre debe ser solamente texto');
        return;
      }
      if (!regex_texto.test(asunto)) {
        alert('el asunto debe ser solamente texto');
        return;
      }
      if (!regex_texto.test(mensaje)) {
        alert('el mensaje debe ser solamente texto');
        return;
      }
      if (!regex_email.test(email)) {
        alert('debe ser un email valido');
        return;
      }
      formulario.submit()
}
function valor_sin_espacios(valor){
    return valor.trim()
}