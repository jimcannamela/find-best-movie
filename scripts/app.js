/*
Docs:

* getMovie(movieId) -> Promise({ id, title, genre, rating, poster })

Ex:
getMovie(1).then(console.log);

* createMovieSection(movieData) -> Movie container element

Ex:
const $movie1 =  createMovieSection({...});
document.body.append($movie1);

---

Instructions:

1. Get 10 (or more) movies
   Hint: You can use a loop or Promise.all()
2. Create a container for each one
3. Add the class "highest" to the container
   of the movie with the highest rating --
   If there is a tie, pick one
   Hint: This will require having access to
   all the movie data in one place to compare
4. Append the containers to the page

*/

//Prior work to the demonstration
// const movieList = []

// for(let p = 0; p < 10; p++) {
//    getMovie(p)
//       .then((movie) => {
//          return createMovieSection(movie)
//       })
//       .then((section) => {
//          document.body.append(section)
//       })
// }

// Creates a list of promises
const movieProms = [];
for(let m = 0; m < 10; m++){
   movieProms.push(getMovie(nextInt(100, 1000)));
}

//Once all promises are resolved then call the callback function
Promise.all(movieProms)
   //Executes the callback function once all promises in the list have been resolved
   .then(function(movies) {
      //Sets the topRated to the first movie
      let topRated = movies[0]

      //Iterates through each movie and creates a container for each
      for(let mov of movies){
         mov.container = createMovieSection(mov)

         //Sets the topRated variable to the highest rated movie
         if(mov.rating > topRated.rating) {
            topRated = mov;
         }

         //Appends eash movie to the body
         document.body.append(mov.container)
      }

      //Once each movie has been iterated through it then appends the class name of the highest one
      topRated.container.classList.add('highest');
   })