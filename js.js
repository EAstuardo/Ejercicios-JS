let a = parseFloat(prompt("Ingrese el primer numero"));
let b = parseFloat(prompt("Ingrese el segundo numero"));
let c = parseFloat(prompt("Ingrese el tercer numero"));

let menor, medio, mayor;

if (a <= b && a <= c) {
    menor = a;
    if (b <= c) {
    medio = b;
    mayor = c;
    } else {
    medio = b;
    mayor =c;
    }
    } else if (b <= a && b <= c) {
    menor = b;
    if (a <= c) {
    medio =a;
    mayor =c;
    } else {
    medio =c;
    mayor = a;
    }
    } else{
    menor = c;
    if (a <= b) {
    medio =a;
    mayor = b;    
    }else{
    medio =b;
    mayor =a;
    }
}

alert("Números ordenados de menor a mayor: " + menor + ", " + medio + ", " + mayor);