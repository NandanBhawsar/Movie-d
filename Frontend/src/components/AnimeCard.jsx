import "../css/AnimeCard.css"
import { useMovieContext } from "../contexts/MovieContext"

function AnimeCard({anime}){

    const{ isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()
    const favorite = isFavorite(anime.id)

    
    function whenLiked(e){
        e.preventDefault()
        if (favorite) removeFromFavorites(anime.id)
        else addToFavorites(anime)
    }

    return( <div className="anime-card">
        <div className="anime-poster">
            <img src={`https://image.tmdb.org/t/p/w500${anime.poster_path}`} alt={anime.title}/>
            <div className="anime-overlay" >
            <button className={`favorite-btn ${favorite ? "active" : ""}`} 
                    onClick={whenLiked}>
                    {favorite ? "♥" : "♡"}
            </button>
            </div>
        </div>
    <div className="anime-info">
        <h3>{anime.title}</h3>
        <p>{anime.release_date?.split("-")[0]}</p>
    </div> 
    </div>
    )
}
export default AnimeCard