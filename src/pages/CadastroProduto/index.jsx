import Main from "../../components/Main";
import Logo from "../../components/Logo";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ProductForm from "../../components/ProductForm";

export default function CadastroProduto() {
    return (
        <>
            <Logo>
                <Nav />
            </Logo>

            <Main>
                <h1>Cadastro de Produto</h1>

                <ProductForm />
            </Main>

            <Footer>
                Footer
            </Footer>
        </>
    )
}
