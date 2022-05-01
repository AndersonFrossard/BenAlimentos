
window.onload = () => { console.log("ola mentoria ");


async function pegaProdutos() {
	const response = await fetch('https://bendevoficial.com/api/mentoria/produtos').then(res => {
		return res.json();
		});
	console.log(response)
}

pegaProdutos()
}


