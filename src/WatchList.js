import { Link } from 'react-router-dom';


function WatchList(props) {
    return (
        <div className="watchListBox">
            {props.savedMovie.map((movie) => {
                return (
                    <ul key={movie.key}>
                        <li><h2>{movie.title}</h2></li>
                        <li><p>{movie.overview}</p></li>
                        <li className="img"><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={`poster for ${movie.title}`}
                        /></li>
                    </ul>
                )
            })
            }
            <Link to="/roulette"><p className="escape">Escape</p></Link>

        </div>

    );
}

export default WatchList;
