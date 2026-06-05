import AnimeCard from '../components/AnimeCard'
import { useState, useEffect } from 'react'
import "../css/Home.css"
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
    const [searchQuery,setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const[error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async() => {
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }
            catch(err){
                console.log(err)
                setError("Failed to fetch movies...")
            }
            finally{
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])
{/* Dependency arrat at end of useEffect*/}

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        }
        catch(err){
            console.log(err)
            setError("Failed to search movies...")
        }
        finally{
            setLoading(false)
        }
    }
    {/* Anonymous function */ }

    return (
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search Your Favourite Movies..."
                className="search-input" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />

            <button type="submit" className="search-button"> Search </button>
            </form>

            {error && <div className='error-message'>{error} </div>}
            
            <div className="animes-grid">
                {
                    movies.map((anime) =>
                    (<AnimeCard anime={anime} key={anime.id} />)
                    )}
                {/* .map renders dynamically what i need, movie is the parameter accepted and after arrow function is the Animecard component we want to return */}

            </div>
        </div>
    )
}
export default Home;
