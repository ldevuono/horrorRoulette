function MovieBox(props) {
    return (
        <div className="chooseMovie">
            <h2>{props.title} </h2>
            <p>{props.desc}</p>
            <img src={`https://image.tmdb.org/t/p/w500${props.path}`}
                alt={props.title} />
        </div>
    );
}

export default MovieBox;
