console.log('Teste 01:', '1' == 1)

/* com dois ==: o valor é igual?
com três ===: o valor é EXTRITAMENTE igual? */

console.log('Teste 02:', '1' === 1)

console.log('Teste 03:', '3' != 3) // o valor é diferente?

console.log('Teste 04:', '3' !== 3) // o valor é EXTRITAMENTE diferente?

console.log('Teste 05:', '3' < 2)

console.log('Teste 06:', '3' > 2)

console.log('Teste 07:', '3' <= 2)

console.log('Teste 08:', '3' >= 2)

const d1 = new Date(0)
const d2 = new Date(0)

console.log('Teste 09:', d1 === d2)
console.log('Teste 10:', d1 == d2)
console.log('Teste 11:', d1.getTime == d2.getTime)
console.log('Teste 12:', d1.getTime === d2.getTime)
console.log('Teste 13:', undefined == null)
console.log('Teste 14:', undefined === null)