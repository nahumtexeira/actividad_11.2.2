//Creamos un escuchador de eventos para detectar caundo se envía el documento al momenot de hacer "click"
document.getElementById("registroForm").addEventListener("submit", function (event) {

    // Ayuda a mantener la información escrita en los espacios a rellenar. 
    event.preventDefault();

    // Se declaran variables llamandolas con un "get".
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;

    // Realizamos una solicitud POST al API para crear un nuevo usuario con los datos proporcionados.
    fetch('https://jsonplaceholder.typicode.com/users', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento: fechaNacimiento,
        })
    })

        // Se realiza una solicitud web, se analiza su respuesta JSON y maneja cualquie error que pueda ocurrir durante la solicitud.
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error('Error:', error));

});