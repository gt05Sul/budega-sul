import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import Main from "../../components/Main";
import Nav from "../../components/Nav";

export default function Servicos() {
    return (
        <>
            <Header>
                <Logo />
                <Nav />
            </Header>

            <Main>
                <h1>Servicos</h1>

                <p>Confira os nossos serviços:</p>

                <ul>
                    <li>Serviço 1</li>
                    <li>Serviço 2</li>
                    <li>Serviço 3</li>
                    <li>Serviço 4</li>
                    <li>Serviço 5</li>
                </ul>
            </Main>

            <Footer>
                <div>Footer</div>
            </Footer>
        </>
    );
}
