function soma(num1, num2) {
    return num1 + num2;
}
function subtracao(num1, num2) {
    return num1 - num2;
}
function calculadora(num1, num2, callback) {
    return callback(num1, num2);
}
console.log(calculadora(2, 4, soma));
console.log(calculadora(2, 4, subtracao));
