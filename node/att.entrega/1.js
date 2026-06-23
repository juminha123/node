const prompt = require("prompt-sync")();
// os verdes estão funcionando
let alunos = ["juliaremovida","juliasegunda", "juliaterceira","juliaquarta","juliaquinta"];

// ------atividade 01 -------------------------------
console.log("quais os alunos que estão na escola:")
console.log(alunos);

// ------atividade 02 -------------------------------
console.log("adicione a nova aluna ao sistema.")
alunos.push("Juliaadicionada");
console.log("a nova aluna foi adicionada", alunos[alunos.length - 1] );
console.log(alunos);



// ------atividade 03 -------------------------------
alunos.pop();
console.log("a julia adicionada foi removidabdo sistema");
console.log(alunos);

// ------atividade 04 -------------------------------
console.log("mostre quantos alunos estão presentes no dia de hoje ", alunos.length);

// ------atividade 05 -------------------------------
console.log("ocorreu algum engano a primeira aula não esta presente")
alunos.shift();
console.log(alunos);
console.log("A aluna foi removida")

// ------atividade 06 -------------------------------
alunos.unshift("juliaaddnocmc");
console.log("uma aluna foi adicionada no começo da lista a: ", alunos[0] );
console.log(alunos);

// ------atividade 07 -------------------------------
console.log("a julia segunda esta presente? ")
console.log(alunos.includes("juliasegunda"));
console.log("sim")

// ------atividade 08 -------------------------------
console.log("mostre-me o primeiro aluno da lista: " , alunos[0])

// ------atividade 09 -------------------------------
console.log("mostre-me o ultimo aluno da lista: " , alunos[alunos.length - 1]);


