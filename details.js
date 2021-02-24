const getUrl = document.location.search
console.log (getUrl)

const para = new URLSearchParams(getUrl)
const id = para.get("id")
console.log (id)
const box = document.querySelector (".details")
const url = `https://ghibliapi.herokuapp.com/films/${id}`
console.log(window.location.href)

const ghibliStudio = (movie) => {
    
    box.innerHTML = "";
    
    let nyFilm = `
    <ul>
        <h1>${movie.title}</h1>
        <p>${movie.release_date}</p>
        <p>Director: ${movie.director}</p>
        <p>Description: ${movie.description}</p>
        <p>Rating: ${movie.rt_score}</p>
        
    </ul>`;
        box.innerHTML += nyFilm;
        document.title = (movie.title)
    
    
};

 fetch(url)
    .then(response => response.json())
    .then(data => ghibliStudio(data))
    .catch(err => console.error(err.message)
);