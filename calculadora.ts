function soma(num1:number, num2:number){
	return num1+num2
}

function subtracao(num1:number, num2:number){
	return num1-num2
}

function calculadora (num1:number, num2:number, callback): number{
	return callback(num1, num2)
}

console.log(calculadora(2, 4, soma))
console.log(calculadora(2, 4, subtracao))
