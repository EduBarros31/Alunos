const {alunos} = require ("./alunos")
 
function listarAlunos (){
    try {
       alunos.forEach((alunos) => {
        console.table(alunos)
       
    })
 } catch (error) {
        console.error("Erro ao listar Alunos", error.message);
        
    }
    
}

module.exports = { listarAlunos };