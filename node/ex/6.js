const prompt = require(prompt-sync)();
let tarefas = [];
let i;
for(i=0; i<5; i++){
    tarefas.push(prompt("informe"));
}
console.log(tarefas);
tarefas.shift();
console.log(tarefas);