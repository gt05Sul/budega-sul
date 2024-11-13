import Carousel from "../../components/Carousel";
import Section from "../../components/Section";
import Article from "../../components/Article";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import Main from "../../components/Main";
import Nav from "../../components/Nav";

// Importa as imagens
import cardCart from '../../assets/cart-shopping.svg';
import cardHeart from '../../assets/heart.svg';

export default function Home() {
    const carouselItems = [
        {
            url: 'https://cdn.pixabay.com/photo/2019/08/02/12/51/tram-4379656_1280.jpg',
            caption: 'Legenda 1'
        },
        {
            url: 'https://cdn.pixabay.com/photo/2024/10/23/18/54/squirrel-monkeys-9143848_1280.jpg',
            caption: 'Legenda 2'
        },
        {
            url: 'https://cdn.pixabay.com/photo/2023/02/07/19/53/mountains-7774999_1280.jpg',
            caption: 'Legenda 3'
        }
    ];

    return (
        <>
            <Logo>
                <Nav />
            </Logo>

            <Header>
                <Carousel carouselItems={carouselItems} />
            </Header>

            <Main>
                <Section>
                    <Article className='card-produto'>
                        <div className="acao">
                            {/* Favoritar (coração) */}
                            <img src={cardHeart} alt="" />

                            {/* Carrinho de compras */}
                            <img src={cardCart} alt="" />
                        </div>

                        <div className="imagem-container">
                            <img src='https://imgs.search.brave.com/fe_OD16GxL_0ub9oZ22QME5P5mUJNvq1vGLIPf9KzgU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMubXVuZG9lZHVj/YWNhby51b2wuY29t/LmJyL211bmRvZWR1/Y2FjYW8vMjAyMS8w/NC9jYWZlLmpwZw' alt="" />
                        </div>

                        <div>
                            <h3>Cafecito</h3>
                            
                            <p>Vitae voluptatibus voluptate inventore debitis, at reiciendis dolore vero nihil ducimus pariatur officiis commodi quam, unde alias sunt, animi sapiente.</p>
                        </div>

                        <Button className="saiba-mais">Saiba mais</Button>
                    </Article>
                </Section>
            </Main>

            <Footer>
                <div>Footer</div>
            </Footer>
        </>
    );
}
