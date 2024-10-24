
const {alunos} = require ("./alunos")

function excluirAlunos(matricula, nome, email, telefone){
    // funçaõ para encontrar aluno
    try {
    const indice = alunos.findIndex(aluno =>
        aluno.matricula === matricula
    )
    // função para encontrar aluno
    if(indice === -1) {
        console.log("Aluno não encontrado")
    } else {
        alunos.splice(indice, 1)
        console.log("Aluno deletado com sucesso")
    }  
    } catch (error){
        console.error("Erro ao excluir alunos", error.message)
    }
}

module.exports = { excluirAlunos }