let idadeTotal = 0;

for (j=1; j<=10; j++){
    const idade = window.prompt ("Digite a idade:");
    let idadeT = parseInt(idade);
    if (idadeT >= 18){
        idadeTotal ++;
    }

    }
    console.log(`Existem ${idadeTotal} pessoas maiores de 18 anos`)