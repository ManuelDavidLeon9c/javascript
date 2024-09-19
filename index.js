console.log(eval(new String("2 + 2")));
console.log("\n");
console.log(eval("2 + 2"))

var nombre="Manuel";
nombre = "lopez"
console.log(nombre)

const nom= "carlos";
console.log(nom)

let no = "lina";
console.log()

var simbolo=Symbol("Mi simbolo");
var c= undefined;
var bandera= true;

var objeto= {
    nombre:"Manolo",
    apellido : "Leon",
    edad:"22"
}
console.log (objeto)
var frutas=["pera","manzana","banana"];
console.log(frutas) 
var y= null;

function myfuncion(){

}
//constructor//
class person{
    constructor(nombre,apellido){
        this.nombre= nombre;
        this.apellido= apellido;
    }
}

//operadores de calculo
let a =3;
let b= 2;
let c= 10;
let z =a + b + c;
let e= a - b - c;
let d= b*c;
let f= a/b;
let g= a**b;
//--------------------//
let x= 2, y=4;
let sum= x+y;
console.log(sum);
sum =y++;
sum=x++;
sum=--y;
//--------------------//
let as = 1;

a += 3; // a = a + 3
a -= 2; // a = a - 2
a *= 5; // a = a * 5
a /= 3; // a = a / 3
a %= 2; // a = a % 3
a **= 2; // a = a ** 2
let ar = 3, bs= 2, cs="3", q = 3;
zs= (ar!= bs);
zs= (ar!== bs);
zs= (ar == bs);
//comparacion//
b = 3;
z = (a < b);
z = (a <= b);
z = (a > b);
z = (a >= b)
let resultado = (1 > 2) ? "verdadero" : "falso";
let resultado2 = (1 > 2) ? "verdadero" : 0;
let numero = 10;
resultado = ( numero % 2 == 0) ? "par" : "impar";
let ap = 11;
let minimo = 0;
let maximo = 10;
//AND: Se cumple cuando dos condiciones son
verdaderas
if( ap >= minimo && ap <= maximo ){
console.log("El número está en el rango")
}
else{
console.log("El número está fuera del rango")
}
let vacaciones = false;
let diaDescanso = true;
if ( vacaciones || diaDescanso ){
console.log("El padre puede asistir al juegodel hijo");
}
else{
console.log("El padre está ocupado");
}
