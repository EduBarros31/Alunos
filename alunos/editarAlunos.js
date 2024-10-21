function editarAlunos(matricula, novoNome,novoEmail,novoTelefone){   
    try{
        // função para encontrar um aluno
       const aluno = alunos.find(elementodoarray =>
           elementodoarray.matricula === matricula

        )
        // verificar se aluno existe
       if(aluno){
        aluno.nome = novoNome
        aluno.email = novoEmail
        aluno.telefone = novoTelefone
        console.log("Aluno editado com sucesso")
       } else{
        console.log("Aluno não encontrado")
       }

} catch (error){
    console.error("Erro ao editar aluno", error.message)

}    
}

module.exports = { editarAlunos }