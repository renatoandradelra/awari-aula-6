const number = window.prompt ("Digite um numero inteiro:");

const par = [];
const impar = [];

for (j=1; j<=number; j++){
    if (j % 2 === 0) {
    par.push(j);
    } else {
        impar.push(j)
    }
}

console.log ("Os numeros pares são", par);
console.log ("Os numeros impares são", impar);