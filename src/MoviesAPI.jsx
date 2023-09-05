import React from "react";

const imgPath = "https://image.tmdb.org/t/p/w500/";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: data.results,
          isLoading: false,
        });
      });
  }

  render() {
    const { movies, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>Movie List using API fetch</h2>
        {movies.map((movie) => (
          <div
            style={{
              display: "inline-grid",
              gridGap: "20px",
            }}
          >
            <img
              src={imgPath + movie.poster_path}
              alt={movie.title}
              style={{ width: "360px", marginRight: "10px" }}
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default MovieList;
