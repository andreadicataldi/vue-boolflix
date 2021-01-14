let app = new Vue({
  el: "#app",
  data: {
    movies: [],
    series: [],
    searchText: "",
    counter: 0,
  },
  methods: {
    getMovies: function (searchText) {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=1a404737bd28f16647b6ba305c98e1ed&language=it-IT&page=1&include_adult=true&query=" +
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
      axios
        .get(
          "https://api.themoviedb.org/3/search/tv?api_key=1a404737bd28f16647b6ba305c98e1ed&language=it_IT&include_adult=true&query=" +
            searchText
        )
        .then((response) => {
          this.series = response.data.results;
          this.series.forEach((element) => {
            let score = Math.ceil(element.vote_average / 2);
            element.vote_average = score;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    reloadPage: function () {
      location.reload();
    },
  },
});
