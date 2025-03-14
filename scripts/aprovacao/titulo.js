document.getElementById('i-cnpj').addEventListener('input', function() {
    var cnpj = this.value;
    document.title = "Banco Topázio - Tela de Aprovação [" + cnpj + "]";
});