function soma(num1, num2) {
    return num1 + num2;
}
function subtracao(num1, num2) {
    return num1 - num2;
}
function ambos(num1, num2) {
    return 'Soma: ' + soma(num1, num2) + '; Subtração: ' + subtracao(num1, num2);
}
function informaDados(num1, num2) {
    return 'informou ' + num1 + ' e ' + num2;
}
function calculadora(num1, num2, callback) {
    return callback(num1, num2);
}
console.log(calculadora(2, 4, soma));
console.log(calculadora(2, 4, subtracao));
console.log(calculadora(2, 4, ambos));
console.log(calculadora(2, 4, informaDados));
var numbers = [1, 2, 3, 4, 5];
var quadrados = numbers.map(function (number) {
    return 'O quadrado de ' + number + ' é: ' + number * number;
});
console.log(quadrados);
