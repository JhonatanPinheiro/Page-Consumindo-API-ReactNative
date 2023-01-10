import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import Filme from './Pages/Filme';
import Header from './Components/Header';
import Favorites from "./Pages/Favoritos";

import Erro from './Pages/Erro';



function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Filme />} />
                <Route path="/favorites" element={<Favorites />} />



                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;