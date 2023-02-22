function nextInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function nextString(min, max) {
  let n = [nextInt(65, 90)];
  for(let l = 0; l < nextInt(min, max); l++) {
    n.push(nextInt(97, 122));
  }

  return String.fromCharCode(...n);
}

function pick(arr) {
  return arr[nextInt(0, arr.length - 1)];
}

const genres = [
  'action',
  'drama',
  'fantasy',
  'scifi',
  'comedy',
  'thrills',
  'horror',
  'nonfic'
];

const catgories = [
  'house',
  'pizza',
  'burger',
  'drink',
  'furniture',
  'face'
]

function nextMovie(id) {

  const movie = {
    id,
    title: "",
    genre: pick(genres),
    rating: nextInt(0, 100),
    poster: `https://api.lorem.space/image/${pick(catgories)}?w=680&h=${nextInt(900,1100)}`
  };

  let addedNumber = false;
  for(let t = 0; t < nextInt(1, 4); t++) {
    if(t > 0) movie.title += " ";

    if(t > 0 && nextInt(0, 1) && !addedNumber) {
      movie.title += nextInt(2, 6) + ": ";
      addedNumber = true;
    }

    movie.title += nextString(8, 20);
  }

  return movie;
}

function getMovie(id) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(nextMovie(id));
    }, nextInt(1000, 5000));
  });
}