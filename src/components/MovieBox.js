function MovieBox(props) {
    return (
        <div className="chooseMovie movieBox">
            <h2>{props.randomMovie.title} </h2>
            {props.randomMovie.hasOwnProperty('poster_path') ? <img src={`https://image.tmdb.org/t/p/w500${props.randomMovie.poster_path}`}
                alt={`poster for ${props.title}`} /> : null}
            <p>{props.randomMovie.overview}</p>
            {props.randomMovie.hasOwnProperty('title') ? <form onSubmit={props.saveMovie}><button className="watchList">Save to watch list</button> </form> : null}
        </div>
    );
}

export default MovieBox;
