var teclado = require("prompt-sync")();
var nUm = 0;
var nDois = 0;
var resultado = 0;
function menu() {
    console.log("----Calculadora----");
    console.log("Digite a op\u00E7\u00E3o desejada:");
    console.log("0 -> Sair");
    console.log("1 -> Calculadora");
    var opcao = parseInt(teclado("Digite a op\u00E7\u00E3o: "));
    switch (opcao) {
        case 0:
            sair();
            break;
        case 1:
            resolucao();
            break;
        default: break;
    }
}
function adicao() {
    nUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
    nDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
    resultado = nUm + nDois;
    console.log("O valor da soma de ".concat(nUm, " com ").concat(nDois, " \u00E9 ").concat(resultado, "."));
}
function subtracao() {
    nUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
    nDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
    resultado = nUm - nDois;
    console.log("O valor da subtra\u00E7\u00E3o de ".concat(nUm, " com ").concat(nDois, " \u00E9 ").concat(resultado, "."));
}
function multiplicacao() {
    nUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
    nDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
    resultado = nUm * nDois;
    console.log("O valor da multiplica\u00E7\u00E3o de ".concat(nUm, " com ").concat(nDois, " \u00E9 ").concat(resultado, "."));
}
function divisao() {
    nUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
    nDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
    resultado = nUm / nDois;
    console.log("O valor da divis\u00E3o de ".concat(nUm, " com ").concat(nDois, " \u00E9 ").concat(resultado, "."));
}
function resolucao() {
    console.log("Qual opera\u00E7\u00E3o deseja? Digite:");
    console.log("+ > Adi\u00E7\u00E3o");
    console.log("- > Subtra\u00E7\u00E3o");
    console.log("* > Multiplica\u00E7\u00E3o");
    console.log("/ > Divis\u00E3o");
    var escolha = teclado("Digite a opera\u00E7\u00E3o desejada: ");
    switch (escolha) {
        case "+":
            adicao();
            break;
        case "-":
            subtracao();
            break;
        case "*":
            multiplicacao();
            break;
        case "/":
            divisao();
            break;
    }
    menu();
}
function sair() {
    console.log("Fim de programa...");
}
menu();
