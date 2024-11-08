
import { Link } from 'react-router-dom';
import Button from '../Button';
import Logo from '../Logo';
import './Header.css';

export default function Header() {
    return (
        <header>
            <Logo className="default" />

            <div className="search">
                <input
                    type="text"
                    id='search'
                    placeholder='Estou procurando por...'
                />
            </div>

            <div className="cart">
                <Link to={'/cart'}>
                    <img src="https://marneicardoso.com/poucoprazo/View/img/cart-shopping.png" alt="" />
                </Link>
            </div>

            <Button className="saiba-mais">Login</Button>
        </header>
    );
}
