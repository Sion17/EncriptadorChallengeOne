// Obtener referencias a los elementos del DOM
var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var searchImage = document.querySelector(".search-image");
var textoEncriptado = document.querySelector(".texto-resultado");
var botonCopiar = document.querySelector(".boton-copiar");

// Asignar eventos a los botones
botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
botonCopiar.addEventListener("click", copiarTexto);

function encriptar() {
    var texto = document.getElementById("texto").value;
    var textoEncriptado = encriptarTexto(texto);
    mostrarResultado(textoEncriptado);
}

function desencriptar() {
    var texto = document.getElementById("texto").value;
    var textoDesencriptado = desencriptarTexto(texto);
    mostrarResultado(textoDesencriptado);
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";
// investigar si hay algna manera mas eficiente 
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] === "a") {
            textoFinal += "ai";
        } else if (texto[i] === "e") {
            textoFinal += "enter";
        } else if (texto[i] === "i") {
            textoFinal += "imes";
        } else if (texto[i] === "o") {
            textoFinal += "ober";
        } else if (texto[i] === "u") {
            textoFinal += "ufat";
        } else {
            textoFinal += texto[i];
        }
    }

    return textoFinal;
}


function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] === "a") {
            textoFinal += "a";
            i++;
        } else if (texto[i] === "e") {
            textoFinal += "e";
            i += 4;
        } else if (texto[i] === "i") {
            textoFinal += "i";
            i += 3;
        } else if (texto[i] === "o") {
            textoFinal += "o";
            i += 3;
        } else if (texto[i] === "u") {
            textoFinal += "u";
            i += 3;
        } else {
            textoFinal += texto[i];
        }
    }

    return textoFinal;
}
function mostrarResultado(resultado) {
    textoEncriptado.textContent = resultado;
    searchImage.style.display = "none";
    textoEncriptado.style.opacity = 1;
    botonCopiar.style.display = "block";
}

function copiarTexto() {
    var contenido = textoEncriptado.textContent;
    navigator.clipboard.writeText(contenido)
}
const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

