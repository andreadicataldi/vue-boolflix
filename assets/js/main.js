let app = new Vue({
  el: "#app",
  data: {
    movies: [],
    searchText: "",
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
        });
    },
  },
});
