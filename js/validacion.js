function validarFormulario(){
    let nombre = document.getElementById('mensaje').value;
    let email = document.getElementById('nombre').value;
    let mensaje = document.getElementById('fecha').value;

    if(nombre == '' || email == '' || mensaje == ''){
        alert('Debe completar todos los campos');
    }else{
        alert('Comentario agregado');
      //  document.getElementById('formulario').submit();
    }
}

function rest() {
	const rick = document.getElementById("apibusqueda").value;
    
	fetch(`https://rickandmortyapi.com/api`)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error(error));
  
}

function eliminar() {
fetch('https://rickandmortyapi.com/api', {
method: 'DELETE',
headers: {
'Content-Type': 'application/json'
}
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))

}

function actualizar(){
fetch('https://rickandmortyapi.com/api', {
method: 'PUT',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
mensaje: 'mensaje',
nombre: 'nombre',
fecha: 'fecha'
})
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
}

function enviar(){
fetch('https://rickandmortyapi.com/api', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
mensaje: 'mensaje',
nombre: 'nombre',
fecha:'fecha'
})
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
}