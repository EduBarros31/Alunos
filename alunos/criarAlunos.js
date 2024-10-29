

const {alunos} = require ("./alunos")

var validator = require('validator');                    //  validator serve validar por parametro e cada etapa. 
                                                         //  apos cada validação, o suario segue para cada etapa
function criarAlunos(matricula, nome, email, telefone){
   const novoAluno = (matricula, nome, email, telefone )
  try {
    if(!validator.isEmail(email)){
        console.error("Este email não existe")
    return
  }

    if ( validator.isEmpty(matricula)||
        validator.isEmpty(nome)||
        validator.isEmpty(telefone)
)  
{ 
    
    
    console.error("Todos os campos deve serem preenchidos")
    return
    

  }
  alunos.push(novoAluno)
  
  } 
  catch (error) {
    console.error("O e-mail informado é invalido",error.message);
  }
}








module.exports = { criarAlunos };