function lerArquivo(callback:any){
	setTimeout(function(){
		let conteudo = 'Lorem Ipsum'
		callback()
	}, 2000)

	console.log('')
}

let mostrarTela = function(conteudo:string){
	console.log(conteudo)
}

lerArquivo(mostrarTela)