import React from "react";

const FunctionComponent = ({ movies }) => {
  return (
    <div style={{backgroundColor:"indigo" ,color:'white' ,margin:"10px auto"}}>  
      <h2>Movies Function Component</h2>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>
    </div>
  );
};

export default FunctionComponent;
