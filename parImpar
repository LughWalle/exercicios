function parImpar (n) {
	const pares = [];
	let maiorPar = 0;
	const impares = [];
	let maiorImpar = 0;

	for (let i = 0; i < n.length; i++) {
		if (n[i] % 2 === 0) {
			pares.push(n[i]);
			if (n[i] > maiorPar) {
				maiorPar = n[i];
			}
		} else {
			impares.push(n[i]);
			if (n[i] > maiorImpar) {
				maiorImpar = n[i];
			}
		}
		
	}
	console.log('pares: ', pares, 'maior par: ', maiorPar, '\n', 'imaperes: ', impares, 'maior impar: ', maiorImpar);
}

parImpar([1,2,3,4,5,6,7,8,9,54,9,5,2,6,45,21,65,5,48,4,48,4,84,8,456,69,29,59,5,948,15])
