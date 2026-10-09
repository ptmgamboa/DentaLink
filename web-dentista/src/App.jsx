import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Agenda from './pages/Agenda';
import Expediente from './pages/Expediente';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/expediente" element={<Expediente />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;