alert("calcular fuerz de un objeto en caida libre en newtons > W = N");

function resetear (){
    document.getElementById("resetear").reset();
}

var fuerza = function (n1,n2){
    var masa = Number(document.getElementById("masa").value);
    var gravedad = Number(document.getElementById("gravedad").value);
    var resultado = masa * gravedad;
    return resultado  + "N";
}