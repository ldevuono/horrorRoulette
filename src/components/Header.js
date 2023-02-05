import { Link } from 'react-router-dom';
import die from "./../assets/dice.png"

function Header() {
    return (
        <header className="indexHeader">
            <h1 className="wrapper">Welcome to... <span>Horror Roulette</span></h1>
            <Link to="/roulette"> <p className="button">Enter if you dare</p></Link>
            <img className="dice" src={die} alt="die" />
        </header >
    );
}

export default Header;