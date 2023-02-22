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


