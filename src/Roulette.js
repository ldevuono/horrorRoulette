import { Link } from 'react-router-dom';
import Form from './Form.js';

function Roulette() {
    return (
        <header className="indexHeader">
            <h1 className="wrapper">It's time to decide</h1>
            <Form />
            <Link to="/"><p className="escape">Escape</p></Link>
        </header>
    );
}

export default Roulette;