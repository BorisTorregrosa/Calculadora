const botones = document.querySelectorAll("button");
const input = document.getElementById("input");
let resultado;

botones.forEach((boton) => { // este forEach recorre todos los botones y obtine el valor del boton que se le hizo click
    boton.addEventListener("click", function() {
        
        if(boton.value != "C" && boton.value != "="){
            input.value = input.value + boton.value;
        }
        else if(boton.value == "C"){
            input.value = "";
        }
        else if(boton.value == "="){
            resultado = eval(input.value);   // eval hace el casting para poder guardar el resultado de la oprecion en la variable.
            input.value = Number(resultado);
        }
    });
});



