const teclado = require (`prompt-sync`)();
let nUm: number = 0;
let nDois: number = 0;
let resultado: number = 0;

function menu(): void{
    console.log(`----Calculadora----`);
    console.log(`Digite a opção desejada:`)
    console.log(`0 -> Sair`);
    console.log(`1 -> Calculadora`);
    let opcao: number = parseInt(teclado(`Digite a opção: `));
    
    switch (opcao){
        case 0: sair(); break;
        case 1: resolucao(); break;
        default: break;
    }
}
  
function adicao(): void{
        nUm = parseInt(teclado(`Digite o 1º número: `));
        nDois = parseInt(teclado(`Digite o 2º número: `));
        resultado = nUm + nDois;
        console.log(`O valor da soma de ${nUm} com ${nDois} é ${resultado}.`);
}

function subtracao(): void{
        nUm = parseInt(teclado(`Digite o 1º número: `));
        nDois = parseInt(teclado(`Digite o 2º número: `));
        resultado = nUm - nDois;
        console.log(`O valor da subtração de ${nUm} com ${nDois} é ${resultado}.`);
}

function multiplicacao(): void{
        nUm = parseInt(teclado(`Digite o 1º número: `));
        nDois = parseInt(teclado(`Digite o 2º número: `));
        resultado = nUm * nDois;
        console.log(`O valor da multiplicação de ${nUm} com ${nDois} é ${resultado}.`);
}

function divisao(): void{
        nUm = parseInt(teclado(`Digite o 1º número: `));
        nDois = parseInt(teclado(`Digite o 2º número: `));
        resultado = nUm / nDois;
        console.log(`O valor da divisão de ${nUm} com ${nDois} é ${resultado}.`);
}

function resolucao(): void{
    console.log(`Qual operação deseja? Digite:`);
    console.log(`+ > Adição`);
    console.log(`- > Subtração`);
    console.log(`* > Multiplicação`);
    console.log(`/ > Divisão`);

    let escolha = teclado (`Digite a operação desejada: `)

    switch (escolha){
        case `+`: adicao(); break;
        case `-`: subtracao(); break;
        case `*`: multiplicacao(); break;
        case `/`: divisao(); break;
    }  
    menu();
}

function sair(): void{
    console.log(`Fim de programa...`)
}

menu()