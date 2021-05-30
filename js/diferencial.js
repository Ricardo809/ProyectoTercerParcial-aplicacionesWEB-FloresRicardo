alert("Caldula la funcion especificada cuando x tienda a un valor");

function resetear (){
    document.getElementById("resetear").reset();
}

var calculo = function (n1){
    var numeroX = Number(document.getElementById("numeroX").value);
    var resultado = (9 * numeroX)+(numeroX * numeroX);
    return resultado;
}