

const {alunos} = require ("./alunos")

function criarAlunos(matricula, nome, email, telefone){
    try{
    const novoAluno = {
        matricula, 
        nome, 
        email, 
        telefone
   
 }
alunos.push(novoAluno);  

} catch (error){
    console.error("Erro ao cadastrar dados", error.message)

}
}

module.exports = { criarAlunos };