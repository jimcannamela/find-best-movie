function generateRandomColor() {
  return Math.floor(Math.random()*16777215).toString(16).padEnd(6, "0");
}

function createMovieSection(movie) {
  const $container = document.createElement('section'),
        $title = document.createElement('h2'),
        $rating = document.createElement('p'),
        $genre = document.createElement('p'),
        $picked = document.createElement('p');

  $container.append($picked, $genre, $title, $rating);

  $picked.textContent = 'USER CHOICE!';
  $picked.classList.add('user-choice');

  const titleSplit = movie.title.split(':');
  $title.textContent = titleSplit[0];
  if(titleSplit[1]) {
    const $subtitle = document.createElement('span');
    $subtitle.classList.add('subtitle');
    $subtitle.textContent = titleSplit[1].trim();
    $title.append($subtitle);
  }

  $rating.classList.add('rating');
  $rating.textContent = movie.rating + '/100!';
  
  $ratingSource = document.createElement('span');
  $ratingSource.textContent = "Users rate this movie";
  $ratingSource.classList.add('rating-source');
  $rating.prepend($ratingSource);

  $genre.textContent = movie.genre;
  $genre.classList.add('genre', movie.genre);

  $container.id = 'movie' + movie.id;
  $container.classList.add('movie');
  $container.style.backgroundImage = `url('${movie.poster}')`;

  $container.style.backgroundColor = '#' + generateRandomColor();
  return $container;
}