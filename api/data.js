var users = [
  {
    id: '1',
    name: 'Alex',
    age: 30
  },
  {
    id: '2',
    name: 'Chris',
    age: 40
  }
]

var movies = [
  {
    id: '1',
    title: 'Fight Club'
  },
  {
    id: '2',
    title: 'Lion King'
  }
]

var favoriteMovies = [
  {
    user_id: '1',
    movie_id: '1'
  },
  {
    user_id: '1',
    movie_id: '2'
  },
  {
    user_id: '2',
    movie_id: '2'
  }
]

module.exports = {
  users,
  movies,
  favoriteMovies
}
