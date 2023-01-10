import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h2>Testando Cabeçalho</h2>
            <br/>
            <Link className="logo" to="/"> Prime Flix </Link>
            <br/>
            <Link className="favoritos" to="/favorites">Filmes favoritos</Link>
        </header>
    )
}

export default Header;