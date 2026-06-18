let i;
for(i=0; i<5; i++){
    nomes.push(prompt("digite um nome:"));
}
let novoNome = (prompt("digite mais um nome: "));
nomes.push(novoNome);

console.log(nomes);