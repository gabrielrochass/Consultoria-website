// aqui vão ter as rotas das páginas
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home';

export default function App() {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        </Router>
    );
    }