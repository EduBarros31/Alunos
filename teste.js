var validator = require('validator');

let nome = ""
let email  = "teste@gmail.com"

console.log(validator.isEmpty(nome));
console.log(validator.isEmpty(email));
console.log(validator.isDate(data,{format:"DD/MM/YYYY"}))
console.log(validator.isLength)(descrição,{min:2, max:4})