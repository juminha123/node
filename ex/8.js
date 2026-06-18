const prompt = require(prompt-sync)();
let filmes = [];
for(let i=0; i<5; i++){
    filmes[i]=prompt?("filmes: ")
}
console.log(filmes);
let posicao= Number(prompt("diga a posição a ser alterada"));
filmes.splice(posicao, 1);
filmes.slice(posicao,0,novofilme);
console.log(filmes);