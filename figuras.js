// Cuadrado

const ladoCuadrado = 5;
console.group('cuadrado');
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd('cuadrado');

// Triangulo
console.group('triangulo');

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}

console.groupEnd('triangulo');

// Circulos
console.group('circulo');

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd('circulo');

// Aqui interactuamos con el HTML

//Funciones Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Funciones Triangulo
function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputLado1Triangulo");
    const input2 = document.getElementById("InputLado2Triangulo");
    const input3 = document.getElementById("InputBaseTriangulo");
    
    const value = parseInt(input.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);
    
    const perimetro = perimetroTriangulo(value, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input = document.getElementById("InputBaseTriangulo");
    const input2 = document.getElementById("InputAlturaTriangulo");
    
    const value = parseInt(input.value);
    const value2 = parseInt(input2.value);

    const area = areaTriangulo(value,value2);
    alert(area);
}

//Funciones Circulo
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");

    const value = parseInt(input.value);

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");

    const value = parseInt(input.value);

    const area = areaCirculo(value);
    alert(area);
}

function calcularAlturaTrianguloISO(lado1, lado2, base) {
    if(lado1 === lado2 && lado1 !== base){
        return (Math.sqrt((lado1*lado1)-((base*base)/4)))
    }else{
        alert('Debes ingresar los datos de un triangulo isosceles')
    }
}

console.log("La altura del triangulo isosceles es" + " " +calcularAlturaTrianguloISO(2,2,3))