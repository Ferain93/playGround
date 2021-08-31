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

/**/
/**/
/**/
/**/
/**/