// ordenação
function ordenarção(array) {
	let count = 0;
	for (let index = 1; index < array.length; index += 1) {

		console.log(`\n${index} interação\n`);
			
		for (let secondIndex = 0; index > secondIndex; secondIndex += 1) {
			// console.log(`enquanto o primeiro index ${index} for menor que o sedundo ${secondIndex}`);	
			count++;
			console.log(`${array[index]} é menor que ${array[secondIndex]}?`);
					
			if (array[index] < array[secondIndex]) {
						
				console.log(`Sim, guarda ${array[index]} em variavel auxiliar`);
							
				let auxiliar = array[index];
							
				console.log(`põe o ${array[secondIndex]} no lugar de ${array[index]}`);
							
				console.log(`e põe o ${array[index]} que esta em auxiliar no lugar de ${array[secondIndex]}`);
				array[index] = array[secondIndex];
							
							
				array[secondIndex] = auxiliar;
					
			}	else {
				console.log('não');
			}	
		}
	}
	console.log('rodou: ', count, ' vezes');
	return array
}
console.log('numeros ordenados: ', ordenarção([515,5,654,5158,51,551,515,5115,5208,52]));
