
window.onload = () => { console.log("ola mentoria ");

const containerLista = document.getElementById("lista-produtos");
//Esta função é assíncrona
async function pegaProdutos() {
	const response = await fetch('https://bendevoficial.com/api/mentoria/produtos').then((res) => {
		return res.json();
		});
	console.log(response);
	console.log(response[1]);
	console.log(response[1].productName);
	console.log(response[2].productName);
	//productName:
	console.log('Deus nos ajude');
	containerLista.innerHTML = '';
	response.map((produto) => {
		containerLista.innerHTML += `<div class="produto_item">
										<img src = "${produto.productImage}" />
										<div class="produto_item_text">
											<h2>${produto.productName}</h2>
										</div>
									</div>`;

})

}

const p = pegaProdutos();

//containerLista.addEventListener("click", () => {
//console.log('clickou em lista de produtos')
//})


}


