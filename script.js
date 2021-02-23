const url = "https://ghibliapi.herokuapp.com/films/"
const container = document.querySelector('div')



 const ghibliStudio = (movie) => {
    console.log(movie)
    container.innerHTML = "";
    for (i of movie) {
        
        let nyFilm = `
        <a href="./details.html?id=${i.id}"</ul>
    <ul>
    <h2>${i.title}</h2>
    <p>Director: ${i.director}</p>
    <p>Description: ${i.description}</p>
    </ul>`;
        container.innerHTML += nyFilm;
    };
    
  };

 fetch(url)
    .then(response => response.json())
    .then(data => ghibliStudio(data))
    .catch(err => console.error(err.message));