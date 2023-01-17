import { Link } from 'react-router-dom';


function WatchList(props) {
    return (
        <div>
            {props.savedMovie.map((movie) => {
                return (
                    <div className="chooseMovie" key={movie.key}>
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={`poster for ${movie.title}`}
                        />
                    </div>
                )
            })
            }
            <Link to="/roulette"><p className="escape">Escape</p></Link>

        </div>

    );
}

export default WatchList;
