const movies = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genres: ["Sci-Fi", "Thriller"],
    rating: 9,
  },
  {
    id: 2,
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    genres: ["Sci-Fi", "Drama"],
    rating: 8,
  },
  {
    id: 3,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genres: ["Action", "Crime"],
    rating: 9,
  },
  {
    id: 4,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genres: ["Crime", "Drama"],
    rating: 10,
  },
  {
    id: 5,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genres: ["Crime", "Drama"],
    rating: 9,
  },
  {
    id: 6,
    title: "The Matrix",
    director: "Lana Wachowski",
    year: 1999,
    genres: ["Sci-Fi", "Action"],
    rating: 9,
  },
];

let nextId = movies.length + 1;

// -------------------------
// Assign a unique id and add the movie to the array
// Return the new movie object
// -------------------------
function addMovie(movieData) {
  movieData.id = nextId++;
  movies.push(movieData)
  return movieData;
}

// addMovie({title: "The Avengers", director: "Joss Whedon", year: 2012, genres: ["Sci-Fi", "Action"], rating: 8})

// -------------------------
// Update the rating of a movie by ID.
// If found, update its rating and return the updated movie
// If not found, return null.
// -------------------------
function updateRating(id, newRating) {
  for(let film of movies){
    if(film.id === id){
      film.rating = newRating;
      return film
    }
  }
  return false;
}

// const isRatingUpdated = updateRating(2, 3);
// console.log(isRatingUpdated);

// -------------------------
// Delete a movie by ID.
// If found, remove it from the array and return true
// If not found, return false
// -------------------------
function deleteMovie(id) {
  for(n of movies){
    if(n.id === id){
      const indexToBeDeleted = movies.indexOf(n);
      movies.splice(indexToBeDeleted, 1);
      return true;
    }
  }
  return false;
}
// const isMovieDeleted = deleteMovie(3);
// console.log(isMovieDeleted);


// -------------------------
// Return an array of movie titles directed by the given director
// -------------------------
function findByDirector(director) {
  const arr =  movies.filter(function(n){
    return n.director === director;
  });
  return arr.map(function(n){
    return n.title;
  })
}

// const moviesByDirector = findByDirector("Christopher Nolan");
// console.log(moviesByDirector);

// -------------------------
// Return an array of movies that include the specified genre
// -------------------------
function filterByGenre(genre) {
  const arr = movies.filter(function(n){
    if(n.genres.indexOf(genre) !== -1){
      return true;
    }
  })
  return arr.map(function(n){
    return n.title;
  })
}
// console.log(filterByGenre("Action"));


// -------------------------
// Return the average rating of all movies
// Return 0 if no movies exist
// -------------------------
function averageRating() {
  let average = 0, sum = 0, noOfMovies = 0;
  for(let n of movies){
    sum += n.rating;
    noOfMovies++;
  }
  average = sum/noOfMovies;
  return average;
}
// let av = averageRating();
// console.log(av);

// -------------------------
// Return an array of movie titles released before the given year
// -------------------------
function moviesBefore(year) {
  const arr = movies.filter(function(n){
    return (n.year < year);
  })
  return arr.map(function(n){
    return n.title;
  })
}

// const moviesBeforeYear = moviesBefore(2000);
// console.log(moviesBeforeYear);

// Uncomment to test your implementation

console.log("\nAdding a new movie:");
const newMovie = addMovie({ title: "Test Movie", director: "Test Dir", year: 2021, genres: ["Test"], rating: 7 });
console.log(newMovie);
console.log("Movies after adding:", movies);

console.log("\nUpdating rating of the new movie:");
console.log(updateRating(newMovie.id, 9));
console.log("Movies after update:", movies);

console.log("\nUpdating rating of a non-existent movie (id: 999):");
console.log(updateRating(999, 10));

console.log("\nDeleting the new movie:");
console.log(deleteMovie(newMovie.id));
console.log("Movies after deletion:", movies);
console.log("\nDeleting a non-existent movie (id: 999):");
console.log(deleteMovie(999));

console.log("\nFinding movies by director 'Christopher Nolan':");
console.log(findByDirector("Christopher Nolan"));

console.log("\nFiltering movies by genre 'Sci-Fi':");
console.log(filterByGenre("Sci-Fi"));

console.log("\nAverage rating of all movies:");
console.log(averageRating());

console.log("\nMovies released before 2000:");
console.log(moviesBefore(2000));
