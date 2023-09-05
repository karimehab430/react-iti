import React, { Component } from "react";


class ClassComponent extends Component {
state={
    movies: [
      { id: 1, title: 'Oppenheimer (2023)' },
      { id: 2, title: 'Dune (2021)' },
      { id: 3, title: 'Aliens (1986)' },
    ],
  };
  render() {
    const { movies } = this.state;
    return (
      <div style={{backgroundColor:"purple" ,color:'white' ,margin:"10px auto"}}>
        <h2>Movies Class Component</h2>
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>{movie.title}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default ClassComponent;
