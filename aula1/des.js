alert('boas vindas ao nosso site')
let nome = prompt('Digite seu(a) Nome');
let idade = prompt('Digite seu(a) Idade');
let numerodevendas = prompt('Digite seu(a) Numero de vendas');
let saldodisponivel = prompt('Digite seu(a) Saldo disponivel ');
function verificarCampos(nome, idade, numerodevendas, saldodisponivel) {    
    if (!nome || !idade || !numerodevendas || !saldodisponivel){
            alert("Erro! Preencha todos os campos corretamente.");
                return false;
            }
            alert("Todos os campos foram preenchidos corretamente!");
            return true;
    
    }
    verificarCampos(nome, idade, numerodevendas, saldodisponivel);