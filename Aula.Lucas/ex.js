/*console.log("Hello World")
var numero1 = 5;
var numero2 = 3;
numero1 = 5
numero2 = 8
var resultado;
resultado = numero1 == numero2
console.log(numero1, '=', numero2,'?',resultado)
resultado = numero1 != numero2
conso.log(numero1, '=!',numero2,'?',resultado) 
resultado = numero1 > numero2
console.log(numero1, ">", numero2,"?",resultado)
resultado = numero1 < numero2
console.log(numero1, "<", numero2,'?',resultado)
resultado = numero1 >= numero2
console.log(numero1, ">=", numero2,"?",resultado);
resultado = numero1 <= numero2;


var a1 = true && true;
var a2 = true && false 
var a3 = true && true;
var a4 = false && 3 == 4;
console.log(a4)
var a5 = "Gato" && "Cão";
console.log(a5)
var a6 = false && "Gato";
console.log(a6);
var a7 = "Gato" && false ;
console.log(a7);

var idade = 15
var status = idade >= 18 ? "adulto" : "menor de idade"
console.log(status) 

var minhastring= "alfa"
console.log(minhastring += "beto") */

/*1) Imprima “True” se a variável a for maior que 10 e menor que 20, ou se a variável b for igual 
a 5 */
let a = 11
let b = 3
let c = 7
let d = 20
let resultado = a > 10 && a < 20 || 10 === 5 // true
console.log(resultado)

/*2) Imprima “True” se a variável a for maior que 10 ou se a variável b for igual a 5.*/
let resultado2 = a > 10 || a === 5
console.log(resultado2)// true

/*3) Imprima “True” se a variável a for maior que 10 e menor que 20, ou se a variável b for igual 
a 5, ou se a variável c for igual a 10.*/
let resultado3 = a > 10 && a < 20 || a === 5 || c === 10
console.log(resultado3)// true

/*4)Imprima “True” se a variável a for maior que 10 ou se a variável b for igual a 5, mas não se a 
variável c for igual a 10. */
let resultado4 = a > 10 || b === 5 || c === 10
console.log(resultado4)// true

/*5)Imprima “True” se a variável a for maior que 10 ou se a variável b for igual a 5, mas não se a 
variável c for igual a 10 e nem se a variável d for igual a 20*/
let resultado5 = a > 10 || b === 5 || c === 10 || d === 20
console.log(resultado5)// true
