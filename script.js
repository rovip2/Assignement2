//https://api.disneyapi.dev/characters
/*
{
    data: [
        {films, shortFilms, tvShows, videoGames, parkAttractions, ... , imageUrl},
        {}
    ],
    count: 50,
    total: 149,
    nextPage: "",
}*/
let imagenes = document.getElementById("imagenes")



fetch('https://api.disneyapi.dev/characters').then( respuesta => respuesta.json())
        .then( datos => {
            console.log(datos.data)
            datos.data.forEach(element => {
                dibujar(element)
            });
        })

        
function dibujar(datos){
    let img = document.createElement("img")
    let url = datos.imageUrl;
    index = url.indexOf('/revision')
    url = url.substr(0, index)
    img.src = url
    img.width = 400
    imagenes.appendChild(img)
};