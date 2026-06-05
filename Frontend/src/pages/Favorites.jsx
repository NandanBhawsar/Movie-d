import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import AnimeCard from "../components/AnimeCard"

function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites && favorites.length > 0) {
        return (
            <div className="favorites">
            <h2>Your Favorites</h2>

            <div className="animes-grid">
                {
                    favorites.map((anime) =>
                        (<AnimeCard anime={anime} key={anime.id} />)
                    )}
            </div>
        </div>
        );
    }

    return (<div>
        <h2>No favorites yet</h2>
        <p>Click on the Heart button on an anime to add it to favorites!</p>
    </div>
    );
}
export default Favorites