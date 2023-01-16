function MovieBox(props) {
    return (
        <div className="chooseMovie">
            <h2>{props.randomMovie.title} </h2>
            <p>{props.randomMovie.overview}</p>
            {props.randomMovie.hasOwnProperty('poster_path') ? <img src={`https://image.tmdb.org/t/p/w500${props.randomMovie.poster_path}`}
                alt={`poster for ${props.title}`} /> : null}
        </div>
    );
}

export default MovieBox;
