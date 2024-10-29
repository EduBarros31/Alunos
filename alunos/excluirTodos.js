 const { alunos } = require("./alunos")


 function excluirTodos() {
 try {
    alunos.length = 0                           // metodo para esvaziar e excluir todo o array. Não precisa incrementar um novo array
 } catch (error) {                                 
    console.error("erro ao excluir todos !")
 }
}

module.exports = { excluirTodos }