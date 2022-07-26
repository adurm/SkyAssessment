import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

export default function Movies() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch("https://my-json-server.typicode.com/alb90/aieng-tech-test-assets/data");
            const moviesJSON = await response.json();
            setMovies(moviesJSON);
        }
        fetchMovies()
    }, [])


    return (
        <div className="flex flex-wrap justify-center">
            {movies.map((movie, idx) => <MovieCard key={idx} movie={movie}/>)}
        </div>
    )
}
