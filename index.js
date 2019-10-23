console.log('Hello world!');

var schema = {
	properties: {
		name: {
			pattern: /^[a-zA-Z\s\-]+$/,
			message: 'O nome deve conter apenas letras espaços ou traços. Sem caracteres especiais.',
			required: true
		},
		sobrenome: {
			pattern: /^[a-zA-Z\s\-]+$/,
			message: 'O sobrenome deve conter apenas letras espaços ou traços. Sem caracteres especiais.',
			required: true
		},
		endereco: {
			required: true
		},
		email: {
			pattern: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
			message: 'Email invalido',
			required: true
		},
		cpf: {
			pattern: /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/,
			message: 'CPF ou CNPJ invalido, deve conter pontos e traços',
			required: true
		}
	}
};

const prompt = require("prompt");
prompt.start();
prompt.get(schema, function (err, result) {
	//
	// Log the results.
	//
	console.log('Command-line input received:');
	console.log("Nome: " + result.name);
	console.log("sobrenome: " + result.sobrenome);
	console.log("endereco: " + result.endereco);
	console.log("email: " + result.email);
	console.log("cpf: " + result.cpf);
});