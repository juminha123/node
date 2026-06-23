const prompt = require("prompt-sync")();

// os verdes estão funcionando
let alunos = ["juliaremovida", "juliasegunda", "juliaterceira", "juliaquarta", "juliaquinta"];

// ------atividade 01 -------------------------------
console.log("quais os alunos que estão na escola:");

for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i]);
}

// ------atividade 02 -------------------------------
console.log("adicione a nova aluna ao sistema.");
alunos.push("Juliaadicionada");

console.log("a nova aluna foi adicionada", alunos[alunos.length - 1]);

for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i]);
}

// ------atividade 03 -------------------------------
alunos.pop();

console.log("a julia adicionada foi removida do sistema");

for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i]);
}

// ------atividade 04 -------------------------------
console.log("mostre quantos alunos estão presentes no dia de hoje:", alunos.length);

// ------atividade 05 -------------------------------
console.log("ocorreu algum engano a primeira aluna não está presente");

alunos.shift();

console.log("A aluna foi removida");

for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i]);
}

// ------atividade 06 -------------------------------
alunos.unshift("juliaaddnocmc");

console.log("uma aluna foi adicionada no começo da lista:", alunos[0]);

for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i]);
}

// ------atividade 07 -------------------------------
console.log("a juliasegunda esta presente?");

let encontrou = false;

for(let i = 0; i < alunos.length; i++){
    if(alunos[i] == "juliasegunda"){
        encontrou = true;
    }
}

console.log(encontrou);

// ------atividade 08 -------------------------------
console.log("mostre-me o primeiro aluno da lista:", alunos[0]);

// ------atividade 09 -------------------------------
console.log("mostre-me o ultimo aluno da lista:", alunos[alunos.length - 1]);