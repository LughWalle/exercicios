//Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:
//Para cada número da Array que seja divisível por 3, apresente uma string "fizz";
//Para cada número da Array que seja divisível por 5, apresente uma string "buzz";
//Caso o número seja divisível por 3 ou 5, retorne a string "fizzBuzz";
//Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
//Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar 
//["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].

 function fizzBuzz (numeros){

    for (var contador = 0; contador < numeros.length; contador++)
   
    if ( numeros[contador] % 3 === 0 && numeros[contador] % 5 ===0){
    console.log ('FizzBuzz');
   } else if (numeros[contador] % 5 === 0){
      console.log ("Buzz");
   } else if (numeros[contador] % 3 === 0 ){
      console.log ('Fizz');
   } else {
      console.log ('Bug');
   }

 } 
 fizzBuzz([3,5,8,55,36,100,15,45,9]) 

Resultado do Código

Fizz
Buzz
Bug
Buzz
Fizz
Buzz
FizzBuzz
FizzBuzz
Fizz
