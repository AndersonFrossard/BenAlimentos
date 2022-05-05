

const menu = document.getElementById("menu");
let button = document.getElementById("mobile-button-menu");
button.addEventlistener("click", () => {
	menu.classList.toggle("active");
});

function fecharMenu() {
	menu.classList.remove("active")
}



