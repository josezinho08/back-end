// LISTAS 
//Lista de Strings :
//Indices :
const lanches = [ "x-egg", "x-ovo", "x-bacon", "x-tudo", "x-frango"];
// Lista de Numbers :
const precos = [12, 15, 15, 20, 12];

console.log(lanches);
console.log(precos);
//Acessar um item especifico da lista :
console.log("lanche - Preço")
console.log(lanches[0] + " - R$ " + precos[0])
// x-egg - R$ 12 
console.log(lanches[1] + " - R$ " + precos[1])
// x-ovo - R$ 15
console.log(lanches[2] + " - R$ " + precos[2])
// x-bacon - R$ 15
console.log(lanches[3] + " - R$ " + precos[3])
// x-tudo - R$ 20
console.log(lanches[4] + " - R$ " + precos[4])
// x-frango - R$ 12

const tamanho = lanches.length;
console.log(tamanho);



