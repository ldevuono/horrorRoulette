import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Form from './Form.js';
import MovieBox from './MovieBox.js';

function Roulette() {
    //create state to hold user input when they choose a year
    const [year, setYear] = useState(0);
    const [randomMovie, setRandomMovie] = useState({});

    //listen for date choice
    const handleChange = (e) => {
        setYear(e.target.value);
    }

    //function that will grab user choice of year from dropdown and also prevent default browser refresh
    const chooseYear = (e) => {
        e.preventDefault();
    }

    const submitHandler = (e) => {
        chooseYear(e, year)

        //API CALL
        //api key
        const key = "45f22f9138c47be66457a712c0db3872"

        axios({
            url: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27&without_genres=10402,10751,35,16&include_adult=true&primary_release_year=${year}`,
            method: "GET",
            dataResponse: "json",
            params: {
                format: "json",
                api_key: key,
            },
        })
            .then((res) => {
                setRandomMovie(res.data.results[Math.floor(Math.random() * res.data.results.length)]);
            })
    }

    // console.log(year)

    return (
        <header className="indexHeader">
            <h1 className="wrapper rouletteHeader">It's time to decide</h1>
            <Form
                handleChange={handleChange}
                chooseYear={chooseYear}
                submitHandler={submitHandler}
            />
            <MovieBox
                randomMovie={randomMovie}
            />
            <Link to="/"><p className="escape">Escape</p></Link>
        </header>
    );
}

export default Roulette;