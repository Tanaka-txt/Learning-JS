const frutas= [
    'Banana', // 0
    'Maça', // 1
    'Uva', // 2
    'kiwi', // 3
    'Morango' // 4
]

console.log(frutas[2])
console.log(frutas.length) // tamanho do array
frutas.push('Melancia') // adiciona

console.log(frutas.length) // total de frutas depois do push

console.log(frutas[frutas.length - 1]) // ultima fruta

console.log(frutas)

// frutas.splice(posiçao, qtd)
frutas.splice(2,1)

console.log(frutas)


// FOR, FOR-OF, FOR EACH
for(let i = 0; i < frutas.length; i++) {
    console.log(i,frutas[i]);
// 0 Banana
// 1 Maça
// 2 kiwi
// 3 Morango
// 4 Melancia
}

// forEach
frutas.forEach((valor, indice) => {
    console.log('Indíce:', indice, valor);
})

for (const fruta of frutas) {
     console.log('Fruta:', fruta);
}


