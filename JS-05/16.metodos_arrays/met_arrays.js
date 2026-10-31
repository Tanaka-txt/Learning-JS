const numero = [1,2,3,4,5,6,7,8,9,10]

const numerosPares = numero.filter((numero) =>{
    return numero % 2 === 0  // Retorna como um array novo (não é a lista original/ não altera ela)
})
const numerosImpares = numero.filter((numero) =>{
    return numero % 2 !== 0  // Retorna como um array novo (não é a lista original/ não altera ela)
})

console.log('Todos: ', numero);

console.log('Pares: ', numerosPares);
console.log('Impares: ', numerosImpares);

const numerosDobro = numero.map((numero) =>{
    return numero * 2 // Retorna como um array novo (não é a lista original/ não altera ela)
})

console.log('Numeros Dobrados:', numerosDobro);