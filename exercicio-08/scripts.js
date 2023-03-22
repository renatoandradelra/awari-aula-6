
let idadeTotal = 0;

for (j=1; j<=5; j++){
    const idade = window.prompt ("Digite a idade:");
    let idadeT = parseInt(idade);
    idadeTotal += idadeT;
    
}
 const media = idadeTotal / 5;

console.log (`${media}`);



