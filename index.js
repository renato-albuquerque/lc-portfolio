// variables



// functions

function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'Portfólio - Luciano Costa',
			text: 'Consultor Empresarial',
			url: 'https://renato-albuquerque.github.io/lc-portfolio/'
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}