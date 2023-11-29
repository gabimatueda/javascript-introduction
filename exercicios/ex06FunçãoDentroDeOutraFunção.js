function escrevaMeuNome(nome) {
    return 'Meu nome é ' + nome;
}
escrevaMeuNome('Gabriela');
escrevaMeuNome('Mayumi');

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome('Gabriela') + ' é maior de idade');
    }else {
        console.log('Menor de idade');
    }
}

verificarIdade(18)