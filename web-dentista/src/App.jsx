import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Agenda from './pages/Agenda';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirige automáticamente la raíz al login */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Rutas de las pantallas */}
        <Route path="/login" element={<Login />} />
        <Route path="/agenda" element={<Agenda />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;