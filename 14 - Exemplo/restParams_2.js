/**
 * Arquivo: restParams_2.ts
 * Author: Glaucia Lemos
 * Description: Exercício prático sobre o uso de parâmetros rest em TypeScript.
 * Comando para executar:
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 *
 *
 * Link: https://www.typescriptlang.org/docs/handbook/functions.html (Rest Parameters)
 *
 */
function somarNumeros(numero1, numero2) {
    var numeros = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        numeros[_i - 2] = arguments[_i];
    }
    var resultado = numero1 + numero2;
    for (var i = 0; i < numeros.length; i++) {
        resultado += numeros[i]; //[30 + 40 + 50 + 60 + 70 + 80 + 90]   i = 420        
    }
    return resultado;
}
var resposta = somarNumeros(10, 20, 30, 40, 50, 60, 70, 80, 90); // Primeiro: 10 + 20 = 30 || // Segundo: i = 420                                                                                                                      
console.log("A soma dos números são...........: ", resposta); // Total = 450
//# sourceMappingURL=restParams_2.js.map