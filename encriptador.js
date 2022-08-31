var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".contenedor-munieco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");
var botonCopiar = document.querySelector(".btn-copiar");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;

function encriptar(){
    ocultarSection2();
    var area = recuperarTexto();
    resultado.textContent = encriptarTexto(area);
}

function copiar(){
    var copiado = document.getElementsByClassName("texto-resultado");
    copiado.select();
    document.execCommand('copy');
}

function desencriptar(){
    ocultarSection2();
    var area = recuperarTexto();
    resultado.textContent = desencriptarTexto(area);
}
/*
function copiar(){
    var mensaje = recuperarCopia();
    navigator.clipboard.writeText(mensaje);
}

function recuperarCopia(){
    var copia = resultado.value;
    alert(copia);
    return copia;
}*/

function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}

function ocultarSection2(){
    munieco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    var mayus = /[A-Z]/g;
    var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

    if(mensaje == ""){
        alert("no debe estar vacio");
    }else if (mensaje.match(mayus) != mensaje.match(mayus)){
      alert("No puede contener mayusculas");
    }else if (mensaje.match(caracteres) != mensaje.match(caracteres)){
        alert("no puede contener acentos ni caracteres especiales");
    }else{
        for( var i=0 ; i<texto.length ; i++ ){
            if(texto[i] == "a" ){
                textoFinal = textoFinal + "ai";
            }else if(texto[i] == "e" ){
                textoFinal = textoFinal + "enter";
            }else if(texto[i] == "i" ){
                textoFinal = textoFinal + "imes";
            }else if(texto[i] == "o" ){
                textoFinal = textoFinal + "ober";
            }else if(texto[i] == "u" ){
                textoFinal = textoFinal + "ufat";
            }else{
                textoFinal = textoFinal + texto[i];
            }
        }
    }
    return textoFinal;
}   

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    var mayus = /[A-Z]/g;
    var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

    if(mensaje == ""){
        alert("no debe estar vacio");
    }else if (mensaje.match(mayus) != mensaje.match(mayus)){
      alert("No puede contener mayusculas");
    }else if (mensaje.match(caracteres) != mensaje.match(caracteres)){
        alert("no puede contener acentos ni caracteres especiales");
    }else{
        textoFinal = mensaje.replace(/ai/g, "a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");
    }
    return textoFinal;
}