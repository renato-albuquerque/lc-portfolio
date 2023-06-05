// variables

const menuHamburger = document.querySelector(".fa-bars")
const mobileMenuHide = document.querySelector(".mobileMenuHide")
const mobileMenuOpen = document.querySelector(".mobileMenuOpen")

// functions

function openMenuHamburger() {
    mobileMenuHide.classList.toggle("mobileMenuOpen")

    if (mobileMenuHide.classList.contains("mobileMenuOpen")) {
        menuHamburger.classList.remove("fa-bars")
        menuHamburger.classList.add("fa-x")
    } else {
        menuHamburger.classList.add("fa-bars")
        menuHamburger.classList.remove("fa-x")
    }
}

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