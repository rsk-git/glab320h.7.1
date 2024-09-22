import { useState } from 'react';
import './App.css';
import MovieDisplay from './components/MovieDisplay.jsx'
import Form from './components/Form.jsx'


export default function App() {
  
  const [count, setCount] = useState(0);

  // export default function App() {
    // Constant with your API Key
    const apiKey = "a85bd575";

  

// State to hold movie data
const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async(searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=${searchTerm}`
    
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setMovie(data);
  };

  return (
    <>
      
    
      <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie = {movie}/>
    </div>
    </>
  )
}

// export default App
