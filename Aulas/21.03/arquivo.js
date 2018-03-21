function lerArquivo(callback) {
    setTimeout(function () {
        var conteudo = 'Lorem Ipsum';
        callback();
    }, 2000);
    console.log('');
}
var mostrarTela = function (conteudo) {
    console.log(conteudo);
};
lerArquivo(mostrarTela);
