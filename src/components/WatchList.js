import { Link } from 'react-router-dom';


function WatchList(props) {
    return (
        <div>
            <h1 className="watchListh1">Watch List</h1>
            <div className="watchListBox">
                {props.savedMovie.map((movie) => {
                    return (
                        <ul key={movie.key}>
                            <li><h2>{movie.name.title}</h2></li>
                            <li><p>{movie.name.overview}</p></li>
                            <li className="img"><img src={`https://image.tmdb.org/t/p/w500${movie.name.poster_path}`}
                                alt={`poster for ${movie.name.title}`}
                            /></li>
                            <li><button onClick={() => { props.removeMovie(movie.key) }}>Remove</button></li>
                        </ul>
                    )
                })
                }
                <Link to="/roulette"><p className="escape">Escape</p></Link>

            </div>
        </div>
    );
}

export default WatchList;
