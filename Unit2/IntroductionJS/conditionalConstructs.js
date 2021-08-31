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

/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/