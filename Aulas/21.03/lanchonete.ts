let sanduiche = {

	pao: 'integral',
	queijo: 'suico',

	preparar:function(){
		return 'Primeiro pão: '+ this.pao + ' depois o queijo ' + this.queijo;
	},
	servir:function(){
		setTimeout(()=>{
			console.log(this.preparar())
		}, 3000);
	},
}

sanduiche.preparar()
sanduiche.servir()