const side = window.prompt ("Digite o tamanho do quadrado");

let result = '';


for(let i=1; i<=side; i++) {
    for(let j=1; j<=i; j++) {
        result += '*';
    }
    result += "\n"

}

console.log(result)