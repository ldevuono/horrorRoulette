import { Link } from 'react-router-dom';
// import background from "./../vhs.png"

function Header() {
    return (
        <header className="indexHeader">
            <h1 className="wrapper">Welcome to... <span>Horror Roulette</span></h1>
            <Link to="/roulette"> <p className="button">Enter if you dare</p></Link>
        </header >
    );
}

export default Header;