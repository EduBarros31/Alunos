
 
function listarAlunos (){
    try {
       
        console.table(alunos)
       
    } catch (error) {
        console.error("Erro ao listar Alunos")
        
    }
    
}

module.exports = { listarAlunos }