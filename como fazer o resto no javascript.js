/*5) Verificador de número par ou ímpar: Faça um programa que peça ao usuário para inserir um número e determine se par ou ímpar.*/

let numeroDigitado

numeroDigitado = Number(prompt('digite o numero: '))


if(numeroDigitado % 2 == 0){

 alert('numero é par')   

}else{
    alert('numero é impar')
}