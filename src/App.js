import { useState } from "react";
import Header from "./components/Header";
import MovieBody from "./components/MovieBody";
import Searchbar from "./components/Searchbar";

function App() {
  const [errMsg, setErrMsg] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="App">
      <Header />
      <Searchbar
        setErrMsg={setErrMsg}
        setMovieData={setMovieData}
        setIsLoading={setIsLoading}
      />
      <MovieBody movieData={movieData} errMsg={errMsg} isLoading={isLoading} />
    </div>
  );
}

export default App;
