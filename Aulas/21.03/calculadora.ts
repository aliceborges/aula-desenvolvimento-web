function soma(num1:number, num2:number){
	return num1+num2
}

function subtracao(num1:number, num2:number){
	return num1-num2
}

function ambos(num1:number, num2:number){
	return 'Soma: ' + soma(num1, num2) +'; Subtração: ' + subtracao(num1, num2)
}

function informaDados(num1, num2): string{
	return 'informou ' + num1 + ' e ' + num2;
}

function calculadora (num1:number, num2:number, callback): number{
	return callback(num1, num2)
}

console.log(calculadora(2, 4, soma))
console.log(calculadora(2, 4, subtracao))
console.log(calculadora(2, 4, ambos))
console.log(calculadora(2, 4, informaDados))
