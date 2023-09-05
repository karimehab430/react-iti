import "./App.css";
import FunctionComponent from "./functionComponent";
import ClassComponent from "./classComponent";
import { v4 as uuid } from "uuid";
import ImageSlider from "./ImageSlider";
import MovieList from "./MoviesAPI";
import InfoForm from "./form";
const movies = [
  { id: uuid(), title: "Alien (1979)" },
  { id: uuid(), title: "The Thing (1982)" },
  { id: uuid(), title: "Barbie (2023)" },
];

function App() {
  return (
    <div className="App">
      <FunctionComponent movies={movies} />
      <ClassComponent />
      <hr/>
      <ImageSlider />
      <hr/>
      <InfoForm />
      <hr/>
      <MovieList />
    </div>
  );
}

export default App;
