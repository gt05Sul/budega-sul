
import { Link } from 'react-router-dom';
import './Nav.css';
import Button from '../Button';

export default function Nav() {
    return (
        <nav>
            <div className="logo">
                Imobi Tech
                <Button titulo="Login" className="btn-link" />
            </div>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/sobre">Sobre</Link>
                    <Link to="/contato">Contato</Link>
                    <Link to="/avaliacao">Avaliações</Link>
                    <Link to="/imovel">Imóveis</Link>
                </li>
            </ul>
        </nav>
    );
}
