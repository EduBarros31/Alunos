
const prompt = require("prompt-sync")();

function exibirMenu(){
    console.log("==================")
    console.log("1 - Criar Aluno")
    console.log("2 - editar Aluno")
    console.log(" 3 - Excluir Aluno")
    console.log("4 - Listar Aluno")
    console.log("5 - Sair do Aluno")
    console.log("==================")
}

let opcao;
do {
    exibirMenu()
    opcao = parseInt(prompt("digite uma opcao"))
   switch(opçao){

    case 1 :
    console.log("Criando aluno")
    break;
    case 2  : 
    console.log("editar aluno...")
    break;
    case 3  : 
    console.log("excluir Aluno..")
    break;
    case 4  :
     console.log("listar aluno")
    break;
    case 5 :
    console.log(" Sair do sistema")
    default :
    console.log("numero invalido")
    break

   }

} while (numero !== "5");

