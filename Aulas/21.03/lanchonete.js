var sanduiche = {
    pao: 'integral',
    queijo: 'suico',
    preparar: function () {
        return 'Primeiro pão: ' + this.pao + ' depois o queijo ' + this.queijo;
    },
    servir: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.preparar());
        }, 3000);
    }
};
sanduiche.preparar();
sanduiche.servir();
