let app = new Vue({
  el: "#app",
  data: {
    movies: [],
    searchText: "",
    counter: 0,
  },
  methods: {
    getMovies(searchText) {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=1a404737bd28f16647b6ba305c98e1ed&language=it-IT&page=1&query=" +
            searchText
        )
        .then((response) => {
          this.movies = response.data.results;
          this.movies.forEach((element) => {
            let score = Math.ceil(element.vote_average / 2);
            element.vote_average = score;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
