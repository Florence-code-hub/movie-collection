const movieSection = document.getElementById("movieSection");

// Fetch data from the movies.json, console log error msg if data loading fails
fetch('js/data/movies.json')
  .then(response => response.json())
  .then(movies => {
    movies.forEach(movie => {
      movieSection.innerHTML += `
        <div class="movie-card">
          <div>
            <img src="${movie.image}" alt="Movie Poster">
          </div>

          <div class="movie-details">
            <h2>${movie.title}</h2>
            <ul class="movie-specifics">
              <li>■ ${movie.year}</li>
              <li>■ ${movie.genre}</li>
            </ul>
            <p>${movie.description}</p>

            <div class="button-container">
              <button class="watch-online-btn">Watch Online</button>
            </div>
          </div>
        </div>
      `;
    });
  })


  .catch(err => console.error("Failed to load movies:", err));

