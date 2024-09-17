let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");

const cadenacaracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz,.-1234567890'¡'!$%&/(@·#"

function generar(){
    let numerodigitado = parseInt (cantidad.value);

    if(numerodigitado < 8){
        alert("La cantidad de caracteres debe ser mayor o igual a 8");
    }
    let password = '';
for(let i= 0; i < numerodigitado; i++){

    let caracterAleatorio = cadenacaracteres [Math.floor(Math.random() * cadenacaracteres.length)];

    password+=caracterAleatorio;

}


}


