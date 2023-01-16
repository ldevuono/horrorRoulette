import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Form from './Form.js';
import WatchList from './WatchList.js';
import MovieBox from './MovieBox.js';
import firebase from './firebase';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';


function Roulette() {
    //create state to hold user input when they choose a year
    const [year, setYear] = useState(0);
    const [randomMovie, setRandomMovie] = useState({});
    const [savedMovie, setSavedMovie] = useState([]);

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
    };

    useEffect(() => {
        //create a variable that holds our database details
        const database = getDatabase(firebase);
        //create a variable that makes reference to our database
        const dbRef = ref(database);

        //add an event listener to that variable that will fire from the database, and call that data 'respionse'
        onValue(dbRef, (response) => {
            // creating a variable to store the new state:
            const newState = [];
            // storing the response from our query to Firebase inside a variable, using firebase's .val() method to parse our database the way we want it:
            const data = response.val();
            // data is an object, so we iterate through it using a for in loop to access each book name 

            for (let key in data) {
                // inside the loop, we push each book name to an array we already created inside the onValue() function called newState
                newState.push(data[key]);
            }
            //then call setSavedMovie in order to update state with local array newState
            setSavedMovie(newState);
        })
    }, []);

    //function to push a movie to watch list
    const saveMovie = (e) => {
        e.preventDefault();
        const database = getDatabase(firebase);
        const dbRef = ref(database);

        push(dbRef, randomMovie);
        alert("Movie added to watch list");
    }

    return (
        <header className="indexHeader">
            <h1 className="wrapper rouletteHeader">It's time to decide</h1>
            {/* <Link to="/roulette/watchlist"> <p>Watch List</p>
                savedMovie={savedMovie}
            </Link> */}
            <WatchList
                savedMovie={savedMovie}
            />
            <Form
                handleChange={handleChange}
                chooseYear={chooseYear}
                submitHandler={submitHandler}
            />
            <MovieBox
                randomMovie={randomMovie}
                saveMovie={saveMovie}
            />
            <Link to="/"><p className="escape">Escape</p></Link>
        </header>
    );
}

export default Roulette;