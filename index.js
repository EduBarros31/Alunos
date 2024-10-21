
const prompt = require("prompt-sync")();
const { criarAlunos } = require("./alunos/criarAlunos");
const { editarAlunos} = require("./alunos/editarAlunos")
const { excluirAlunos } = require("./alunos/excluirAlunos")
const { listarAlunos } = require("./alunos/listarAlunos")



criarAlunos("a0123","João","joão@gmail.com","849999-9999")
criarAlunos("a0123","João","joão@gmail.com","849999-9999")
listarAlunos()

editarAlunos("a0123","Maria João","mariajoão@gmail.com", "83999999")
listarAlunos()

excluirAlunos("a0123")