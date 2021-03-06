/*Prueba declarando a la función triple, la cual triplique el valor pasado por parámetro y nos devuelva su resultado.*/

function triple(numero) {
  return 3 * numero;
}

/*Veamos si se va entendiendo: escribí ahora una función con nombre  mitad, que tome un número y devuelva su mitad.*/

function mitad(numero){
  return numero/2;
}

/*la función cuadruple que recibe un número y lo multiplica por 4. Ahora te pedimos que debajo de la declaración te encargue de ejecutar esa función, para ello necesitas darle un valor de reemplazo al parámetro, en este caso te pedimos que el valor sea 5. Además queremos que imprimas por consola el resultado de esa ejecución.*/

function cuadruple(numero) {
  return 4* numero;
}

console.log(cuadruple(5));

/*Escribí la función multiplicar que tome dos parámetros, los multiplique y retorne su valor.*/

function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}

/*Declares una función llamada  tripleDeLaSuma() que reciba dos parámetros. Luego tiene que sumar ambos y devolvernos el triple del valor del resultado de sumar ambos parámetros . Para ello ya contás (aunque no la veas declarada) con la función triple, que recibe un parámetro y retorna el valor del mismo multiplicado por tres.*/

function triple(numero1, numero2) {
  return numero1 + numero2;
}

function tripleDeLaSuma(numero1, numero2) {
  let resultadoDeSuma = triple(numero1, numero2);
  return resultadoDeSuma * 3;
}

/*Hagamos una función llamada perimetro que nos diga el perímetro de un círculo cuando le damos el radio como parámetro.

Luego hagamos otra función llamada  area que nos dé el area de un círculo cuando recibe el radio como parámetro.*/

let pi=3.14;
function perimetro(radio){
    return 2*pi*radio;
}
function area(radio){
    return pi*radio*radio;
}

/*Escribí una función longitudNombreCompleto que tome un nombre y un apellido como parametro y devuelva su longitud total, contando un espacio extra para separar a ambos.*/

function longitudNombreCompleto(name, subname) {
  let resultado = name + " " + subname;
  return resultado.length;
}

/*Escribí la función escribirCartelito, que tome como parámetros un título, un nombre y un apellido y devuelva un único string como resultado.*/

function escribirCartelito(title, name, subname) {
  let resultado = title + " " + name + " " + subname;
  return resultado;
}