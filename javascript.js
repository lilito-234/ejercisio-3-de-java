let boton = document.getElementById("saludar");

boton.addEventListener("click",function() {
    let nombre = document.getElementById("nombre").value;

    if(nombre.trim()==="") {
        document.getElementById("resultado").textContent =
        "Por favor, escribe tú nombre.";
    } else {
        document.getElementById("resultado").textContent = 
    "¡Hola, " + nombre + " !Bienvenido a la programación.";
    }
});