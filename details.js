const getUrl = document.location.search
console.log (getUrl)

const ny = new URLSearchParams(getUrl)
const id = ny.get("id")
console.log (id)
const place = document.querySelector (".details")
const url = `https://ghibliapi.herokuapp.com/films/${id}`
console.log(window.location.href)
 place.innerHTML = '<div class="load loading-icon"></div>';
const ghibliStudio = (movie) => {
    
    let nyFilm = `
    <ul>
        <h1>${movie.title}</h1>
        <p>${movie.release_date}</p>
        <p>Director: ${movie.director}</p>
        <p>Description: ${movie.description}</p>
        <p>Rating: ${movie.rt_score}</p>
        
    </ul>`;
        place.innerHTML = nyFilm;
        document.title = (movie.title)
};

fetch(url)
    .then(response => response.json())
    .then(data => ghibliStudio(data))
    .catch(err => console.error(err.message)
);