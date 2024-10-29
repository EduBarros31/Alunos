
const prompt = require("prompt-sync")();
const { criarAlunos } = require("./alunos/criarAlunos");
const { editarAlunos } = require("./alunos/editarAlunos")
const { excluirAlunos } = require("./alunos/excluirAlunos")
const { listarAlunos } = require("./alunos/listarAlunos")
const { excluirTodos } = require("./alunos/excluirTodos")


function exibirMenu() {
    console.log("==================")
    console.log("1 - Criar Aluno")
    console.log("2 - editar Aluno")
    console.log(" 3 - Excluir Aluno")
    console.log("4 - Listar Aluno")
    console.log("5 - excluir Todos")
    console.log("6 -  sair do do Aluno")
    console.log("==================")
}
let opcao;
do {

    exibirMenu()
    opcao = parseInt(prompt("digite uma opcao")) // passar o parseInt para que o usuario coloqeu a opcao
      let matricula;
    switch (opcao) {

        case 1:
             matricula = prompt("Digite a matricula:")  // adicionar let e prompt para editar os novos dados  
            let nome = prompt("Digite o nome:")
            let email = prompt("Digite o email:")
            let telefone = prompt("Digite o telefone do aluno")
            criarAlunos(matricula, nome, email, telefone)
            listarAlunos()
            break;
        case 2:
             matricula 
             let novoNome = prompt("Digite o novo nome do aluno")
             let novoEmail = prompt("Digite o novo email")
             let novoTelefone = prompt("Digite o novo telefone")
            editarAlunos(matricula, novoNome, novoEmail, novoTelefone)
           
            break;
        case 3:
            matricula = prompt("Digite a matricula");
            excluirAlunos(matricula)
            break;
        case 4:
            console.log("listar aluno")
            listarAlunos()
            break;
        case 5:
            excluirTodos()
            console.log("excluido todos com sucesso")
            break
        case 6:
            console.log("Sair do Sistema")
        default:
            console.log("numero invalido")
            break

    }

} while (opcao !== 6);