const formulario = document.getElementById("formulario");
formulario?.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const input=document.getElementById("personaje") as HTMLInputElement;
    buscar(input.value);
});

async function buscar(character:string) {

    const respuesta = await fetch(`https://rickandmortyapi.com/api/${character}`);
    const data = await respuesta.json();
}
    //console.log(data.data);
//let tablaBusqueda = crearTabla(data.data);
//let resultado = document.getElementById("resultado");
//resultado?.appendChild(tablaBusqueda);

/*
function crearTabla(response:Array<any>){
    const musicaArray = response;

    const table = document.createElement('table');

    const tableHeader = document.createElement('tr');

    const idHeader = document.createElement('th');
    const titleHeader = document.createElement('th');
    const urlHeader = document.createElement('th');

    idHeader.innerText = "ID";
    titleHeader.innerText ="Titulo"
    urlHeader.innerText = "URL";

    tableHeader.appendChild(idHeader);
    tableHeader.appendChild(titleHeader);
    tableHeader.appendChild(urlHeader);

    table.appendChild(tableHeader);  

    for(let i=0; i<musicaArray.length;i++)
    {
        
        const musicaRow = document.createElement('tr');

        const idData = document.createElement('td');
        const titleData = document.createElement('td');
        const urlData = document.createElement('td');

        idData.innerText = `${i + 1}`;

        titleData.innerText = musicaArray[i].title;
        urlData.innerHTML = `<a href="${musicaArray[i].link}" target="_blank">Ver</a>`;

        musicaRow.appendChild(idData);
        musicaRow.appendChild(titleData);
        musicaRow.appendChild(urlData);

        table.appendChild(musicaRow);
        

    }
    
    return table;
}*/
