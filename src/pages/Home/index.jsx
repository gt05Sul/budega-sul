import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import Main from "../../components/Main";
import Nav from "../../components/Nav";

export default function Home() {

    return (
        <>
            <Logo>
                <Nav />
            </Logo>

            <Header />

            <Main>

            </Main>

            <Footer>
                <div>Footer</div>
            </Footer>
        </>
    );
}
