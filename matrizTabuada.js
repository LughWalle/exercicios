function matrizTabuada2(array) {
    const matriz = []; // matriz
    for (let i = 0; i < array.length; i++) {
        matriz.push(`tabuada de ${array[i]}`); // identificador de  tabuada
	const resultTabuada = []; // recebera tabuada
	for (let n = 1; n <= 10; n++) {
			resultTabuada.push(array[i] * n); // insere cada resultado da tabuada
	}
        matriz.push(resultTabuada); // insere cada tabuada na matriz
    }
    return matriz;
}

console.log(matrizTabuada2([2, 3, 7]);

// responsabilidades separadas

function tabuada(n) {
    const resultTabuada = []
    for (let i = 1; i <= 10; i++) {
        resultTabuada.push(n * i)
    }
		console.log(resultTabuada);
    return resultTabuada;
}

function matrizTabuada(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(`tabuada de ${array[i]}`)
        result.push(tabuada(array[i]));
    }
    return result;
}

console.log(matrizTabuada([1, 2, 3]));
