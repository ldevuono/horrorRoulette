import { Link } from 'react-router-dom';
import Form from './Form.js';
import MovieBox from './MovieBox.js';

function Roulette(props) {

    return (
        <header className="rouletteHeader">
            <h1 className="wrapper">It's time to decide</h1>

            <Link to="/roulette/watchlist"> <p className="goToWatchList">Watch List</p>
            </Link>

            <Form
                handleChange={props.handleChange}
                chooseYear={props.chooseYear}
                submitHandler={props.submitHandler}
            />
            <MovieBox
                randomMovie={props.randomMovie}
                saveMovie={props.saveMovie}
            />
            <Link to="/"><p className="escape">Escape</p></Link>
        </header>
    );
}

export default Roulette;