import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form.js';

function Roulette() {
    //create state to hold user input when they choose a year
    const [year, setYear] = useState(0);

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
        console.log(year)
        //TODO: API CALL
    }

    return (
        <header className="indexHeader">
            <h1 className="wrapper">It's time to decide</h1>
            <Form
                handleChange={handleChange}
                chooseYear={chooseYear}
                submitHandler={submitHandler}
            />
            <Link to="/"><p className="escape">Escape</p></Link>
        </header>
    );
}

export default Roulette;