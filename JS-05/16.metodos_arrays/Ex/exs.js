// 1. Lista de nomes
// Crie um array com 5 nomes. Use for para imprimir cada nome no console, um por linha.

const nomes = [
    'Juca',
    'Gisele',
    'Janja',
    'Virgulino',
    'Moana'
]

for(let i = 0; i < nomes.length; i++) {
    console.log('Nome: ', nomes[i])
}

// 2. Adicionar e remover itens
// Comece com um array de frutas. Adicione uma nova fruta ao final com push() e remova a primeira com shift(). Mostre o array antes e depois.

const frutas = [
    'Maça',
    'Abacate',
    'Uva'
]

frutas.push('Morango');

console.log(frutas)

// 3. Contar itens do array
// Crie um array com nomes de cidades e exiba no console a quantidade total de itens usando .length.

const cidades = [
    'São Paulo',
    'São Carlos',
    'Belo Horizonte',
    'Campinas'
]

console.log(cidades.length)

// 4. Somar todos os números
// Crie um array com 10 números. Use for para somar todos os valores e mostrar o total no final.
const numeros1 = [1,3,4,6,44,3,2,122,34,37]

let contador = 0;

for(let i = 0; i< numeros1.length; i++){
    contador += numeros1[i];
}

console.log(contador);

// 5. Média de notas
// Crie um array com 4 notas. Some os valores e calcule a média, exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7
const notas = [10,4,8,9]
let contador2 = 0;

for(let i = 0; i< notas.length; i++){
    contador2 += notas[i];
}

console.log('Média: ', (contador2/notas.length));

// 6. Mensagens personalizadas com forEach
// Crie um array com nomes de usuários. Use forEach para imprimir "Olá, [nome]!" para cada um.

const nomesUser = [
    'xablau',
    'Jureg',
    'Dino23',
    'Carlos'
]

nomesUser.forEach((valor, indice) => {
    console.log('Olá, '+ valor + '!')
})

// 7. Descontos com map
// Crie um array com preços de produtos. Use map para aplicar 10% de desconto em cada um e mostre os preços com desconto.

const pProdutos = [3.20,4.00,5.50]

const pMaior = pProdutos.map((pProdutos) =>{
    return pProdutos - (pProdutos * 0.10);
})

console.log(pMaior)

// 8. Filtrar valores altos
// Crie um array com idades. Use filter para retornar apenas as idades maiores ou iguais a 18 e exiba o resultado.

const idades = [10, 21, 54, 63,2]

const idadesAdulta = idades.filter((idade) => { // Op ternário
    return idade >= 18
})
console.log(idadesAdulta)

// 9. Simulando carrinho de compras
// Crie um array com os preços de produtos em um carrinho de compras.
// Utilize um laço for ou for...of para calcular o valor total da compra.

// Em seguida, aplique um desconto de 20% sobre o total e exiba o valor final no console.

for(preco of pProdutos) {
    console.log('Produto:', preco)
}

// Diferença entre Set, Map e Array
// Array: Guarda valores em ordem e permite duplicatas.

// Set: Guarda valores únicos, sem duplicatas.

// Map: Guarda pares de chave e valor com chaves únicas e ordenadas.