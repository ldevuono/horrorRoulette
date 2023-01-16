function WatchList(props) {
    return (
        <div>
            {props.savedMovie.map((movie) => {
                return (
                    <div key={movie.key}>
                        <h2>{movie.title}</h2>
                        <h3>{movie.overview}</h3>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={`poster for ${movie.title}`}
                        />
                    </div>
                )
            })
            }
        </div>

    );
}

export default WatchList;
