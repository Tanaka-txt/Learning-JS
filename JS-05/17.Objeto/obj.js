const pessoa = {
    nome: 'Ana',
    idade: 26,
    temCnh: true
}
// chave: valor

pessoa.sobrenome = 'Paula'

console.log(pessoa)

// const livro = {
//     titulo: 'Diario',
//     autor: 'José',
//     idioma: ['Ingles', 'Portugues', 'Alemao']
// }

const livro = {
  titulo: "O Hobbit",
  autor: "J.R.R. Tolkien",
  paginas: 310
};

const propriedade = "autor";
console.log(livro[propriedade]); // Imprime: J.R.R. Tolkien