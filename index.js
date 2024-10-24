
const prompt = require("prompt-sync")();
const { criarAlunos } = require("./alunos/criarAlunos");
const { editarAlunos} = require("./alunos/editarAlunos")
const { excluirAlunos } = require("./alunos/excluirAlunos")
const { listarAlunos } = require("./alunos/listarAlunos")



criarAlunos("1","João","joãogmail.com","849999-9999")
criarAlunos("2","João","joão@gmail.com","849999-9999")
listarAlunos()

