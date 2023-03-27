function buscarrick() {
	const rick = document.getElementById("apibusqueda").value;
    
	fetch(`https://rickandmortyapi.com/api/character/${rick}`)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error(error));
  
}
 
function traerrick(rick){
    const img = document.createElement('img');
    img.src = rick.stripes.front_default;
    const h3 = document.createElement('h3');
    h3.textContent= rick.name;

}
