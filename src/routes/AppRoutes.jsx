import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Produto from "../pages/Produto";
import NotFound from "../pages/NotFound";
import CadastroProduto from "../pages/CadastroProduto";

export default function AppRoutes() {
    return (
        <Routes>
            {/* Cada rota aponta para a sua página */}
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/produto" element={<Produto />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/cadastro-produto" element={<CadastroProduto />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
