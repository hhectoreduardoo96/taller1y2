function buscarrick() {
	const results = document.getElementById("results").value;
	fetch(`https://rickandmortyapi.com/api/character/${results}`)
	.then(response => response.json())
	.then(data => console.log(data, results))
	.catch(error => console.error(error));
  
}



function traerrick(rick){
    const img = document.createElement('img');
    img.src = rick.stripes.front_default;
    const h3 = document.createElement('h3');
    h3.textContent= rick.name;

}
