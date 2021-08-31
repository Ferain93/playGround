/*Definí la función sePoneLaOlla, la cual recibe por parámetro el string del día de la semana. Esta función retorna "¡Pongamos la olla, hoy se comen pastas!" si recibe por parámetro el valor "Domingo", caso contrario retornará "Mejor lo dejamos para el domingo"*/

function sePoneLaOlla(day) {
  if ( day == "Domingo"){
      return "¡Pongamos la olla, hoy se comen pastas!";
  } else {
      return "Mejor lo dejamos para el domingo";
  }
}

/*Definí la función elMayor, la cual debe recibir por parámetro dos números, y como resultado nos devuelva (retorne) el mayor de los dos. Por ejemplo, si la función recibiera 4 y 5 retornaría 5 pues es el mayor, y si pasamos 10 y 4, retornará 10.*/

function elMayor(num1,num2) {
  if (num1<num2){
      return num2;
  } else {
      return num1;
  }
}

/*Ahora, necesitamos de tus geniales habilidades para que definas la función signo, la cual dado un número, nos retorne solo uno de los siguientes valores:

1, si el número es positivo
0, si el número es cero
-1, si el número es negativo*/

function signo(num) {
  if ( num>1){
      return 1;
  } else if (num==0){
      return 0;
  } else {
      return -1;
  }
}

/*Primero que todo tenemos que saber que un banco está abierto de Lunes a Viernes entre las 10 y las 15 horas.

Es tu turno. Define la función puedoIrAlBanco la cual, recibiendo dos parámetros, el primero: diaDeLaSemana (string) y el segundo horaActual (number), deberá retornar true, solo si es posible ir al banco y que lo encontremos abierto.*/

function puedoIrAlBanco(diaDeLaSemana, horaActual) {
  return  10>=horaActual && horaActual<=15 && diaDeLaSemana !== "Domingo" && diaDeLaSemana !== "Sábado";
}

/*Definí la función filosofoHipster  que tome 3 parámetros (en éste orden):

La profesión de una persona(string)
Su nacionalidad (string)
La cantidad de kilómetros que camina por día (number)
Y que evalúe con estos datos, si una persona es o no (true/false) un Filósofo Hipster. Tené en cuenta que un Filósofo Hipster es alguien con Nacionalidad Argentina, de profesión Músico y a quien le gusta caminar más de 2 kilómetros por día.*/

function filosofoHipster(profesion,nacionality, kilo) {
  return  profesion=="Músico" &&nacionality=="Argentina" && kilo>2;
}

/*Utiliza la función console.log para mostrar los resultados de ejecutar la función filosofoHipster con distintos parámetros, al menos 3 veces. La función filosofoHipster ya se encuentra definida aunque no la veas, simplemente la tenés que llamar como en el ejemplo anterior.*/

console.log(filosofoHipster("Músico","Argentina",1));
console.log(filosofoHipster("Panadero","Camboya",5));
console.log(filosofoHipster("Camarero","Armenia",23));

/*Utiliza la función console.log para mostrar los resultados de ejecutar la función pagoConTarjeta con distintos parámetros, al menos 4 veces. La función pagaConTarjeta ya se encuentra definida aunque no la veas, simplemente la tenés que llamar como en el ejemplo anterior y mostrar su resultado en consola.*/

console.log(pagoConTarjeta(false, 7,3550));
console.log(pagoConTarjeta(true, 6,84540));
console.log(pagoConTarjeta(false, 9,2455));
console.log(pagoConTarjeta(true, 2,754));

/*Escribí la función esNumeroDeLaSuerte la cual recibiendo un número, le diga a Mariana si es un número de la suerte. Recuerda que el número debe cumplir con las tres condiciones mencionadas:

Tiene que ser un número positivo.
Tiene que ser múltiplo de 2 o de 3
No tiene que ser el número 15*/

function esNumeroDeLaSuerte(numsuerte) {
  return numsuerte>0  && numsuerte!==15 && ( numsuerte%2==0  ||  numsuerte%3==0 );
}

/*Escribí la función puedeJubilarse que recibe por parámetro la edad, el género y además, los años de aportes jubilatorios (en ese orden) que posee una persona, ejemplo:

puedeJubilarse(62, 'F', 34);
// Ésto da como resultado true ya que cumple con las tres condiciones. 
Tené en cuenta que el mínimo de edad para realizar el trámite para las mujeres (género "F") es de 60 años, mientras que para los hombres (género "M") es 65. En ambos casos, se deben contar con al menos 30 años de aportes jubilatorios.*/

function estaEnEdad(edad,genero){
  let condicionalEdad= (genero=='F'&& edad>=60)||(genero=='M' && edad>=65);
  return condicionalEdad
}
function tieneSuficientesAportes(aniosAporte){
  let condicionalAporte= aniosAporte>=30;
  return condicionalAporte
}
function puedeJubilarse(edad,genero,aniosAporte){
  return  estaEnEdad(edad, genero) && tieneSuficientesAportes(aniosAporte);
}

/*Los requisitos para que una persona pueda subir a la atracción son:

Alcanzar la altura mínima de 1.5m (o 1.2m si está acompañada por un adulto)
No tener ninguna afección cardíaca
Definí la función puedeSubirse, la cual, recibiendo 3 parámetros:

alturaPersona (number)
vieneConCompania (booleano)
tieneAfeccionCardiaca (booleano)
Retorne true  o  false  según el caso. Tené en cuenta, las condiciones necesarias, mencionadas anteriormente.*/

function puedeSubirse(alturaPersona, vieneConCompania, tieneAfeccionCardiaca){
  let resultado=(alturaPersona>=1.5|| alturaPersona>=1.2 &&  vieneConCompania== true) && (!tieneAfeccionCardiaca);  
  return resultado
}

/**/
/**/