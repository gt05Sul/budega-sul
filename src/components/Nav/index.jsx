// import { Link } from "react-router-dom";
import './nav.css';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="">Home</a>
                    <a href="#vantagens">Vantagens</a>
                    <a href="#servicos">Serviços</a>
                    <a href="#contato">Contato</a>
                    <a href="#avaliacoes">Avaliações</a>
                    <a href="#sobre">Sobre</a>
                    {/* <Link to="/#">Home</Link> */}
                    {/* <Link to="#vantagens">Vantagens</Link> */}
                    {/* <Link to="/servicos">Serviços</Link> */}
                    {/* <Link to="/contato">Contato</Link> */}
                    {/* <Link to="/sobre">Sobre</Link> */}
                </li>
            </ul>
        </nav>
    );
}
