let peso = parseInt (prompt("INGRESE SU PESO:"))
let estatura = parseInt(prompt("INGRESE SU ESTATURA"))
 
  let clasificacion = "";
  let imc = peso / (estatura * estatura);

  if (imc < 18.5) {
    clasificacion = "Bajo peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    clasificacion = "Normal";
  } else if (imc >= 25.0 && imc <= 29.9) {
    clasificacion = "Sobrepeso";
  } else if (imc >= 30.0 && imc <= 34.9) {
    clasificacion = "Obesidad grado I";
  } else if (imc >= 35.0 && imc <= 39.9) {
    clasificacion = "Obesidad grado II";
  } else { // IMC 40.0 o más
    clasificacion = "Obesidad grado III";
  }




let resultado = "clasificacion: " + clasificacion;
console.log  (resultado);