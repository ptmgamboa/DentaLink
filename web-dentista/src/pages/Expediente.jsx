 import { useState } from 'react';
import { Link } from 'react-router-dom';

// Componente visual para un diente individual (anatomía simplificada)
const DienteAnatomico = ({ diente, esAfectado, onMark, esSuperior, tipo }) => {
  // Dimensiones sugeridas por tipo para simular la dentadura humana
  const medidas = {
    molar: esSuperior ? 'w-10 h-14' : 'w-10 h-14',
    premolar: 'w-8 h-12',
    canino: 'w-7 h-14',
    incisivo: 'w-6 h-12',
  };

  const medida = medidas[tipo] || 'w-8 h-12';
  const radiusColor = esAfectado ? 'border-red-600' : 'border-blue-200';
  const bgColor = esAfectado ? 'bg-red-500' : 'bg-blue-50';
  const textColor = esAfectado ? 'text-white' : 'text-blue-900';
  
  // Forma de corona y raíz simplificada para odontograma visual
  const shapeClasses = esSuperior 
    ? 'rounded-t-2xl rounded-b-lg' // Raíz hacia arriba para superiores
    : 'rounded-b-2xl rounded-t-lg'; // Raíz hacia abajo para inferiores

  return (
    <div 
      onClick={() => onMark(diente)}
      className={`flex flex-col items-center justify-center border-2 rounded-xl cursor-pointer transition-all duration-200 shadow-sm hover:scale-105 ${medida} ${bgColor} ${radiusColor} ${textColor} ${shapeClasses}`}
      title={`Diente ${diente}`}
    >
      <span className="font-bold text-lg">{diente}</span>
      {/* Visualización simple de raíz */}
      <div className={`w-2/3 h-2 mt-1 rounded-full ${esAfectado ? 'bg-red-300' : 'bg-blue-100'}`}></div>
    </div>
  );
};

export default function Expediente() {
  // Nomenclatura FDI por cuadrantes anatómicos
  const Q1 = [18, 17, 16, 15, 14, 13, 12, 11]; // Sup. Derecho
  const Q2 = [21, 22, 23, 24, 25, 26, 27, 28]; // Sup. Izquierdo
  const Q4 = [48, 47, 46, 45, 44, 43, 42, 41]; // Inf. Derecho
  const Q3 = [31, 32, 33, 34, 35, 36, 37, 38]; // Inf. Izquierdo

  // Función para determinar el tipo anatómico del diente por su código FDI
  const getTipoDiente = (codigo) => {
    const ultimoDigito = codigo % 10;
    if (ultimoDigito >= 6) return 'molar';
    if (ultimoDigito >= 4) return 'premolar';
    if (ultimoDigito === 3) return 'canino';
    return 'incisivo';
  };

  const [dientesAfectados, setDientesAfectados] = useState([]);

  const marcarDiente = (diente) => {
    if (dientesAfectados.includes(diente)) {
      setDientesAfectados(dientesAfectados.filter(d => d !== diente));
    } else {
      setDientesAfectados([...dientesAfectados, diente]);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar idéntico a Agenda.jsx */}
      <aside className="w-64 bg-blue-800 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-blue-700">DentaLink</div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/agenda" className="block p-3 rounded-lg hover:bg-blue-700 transition w-full text-left">
            📅 Agenda Inteligente
          </Link>
          <Link to="/expediente" className="block p-3 bg-blue-700 rounded-lg w-full text-left hover:bg-blue-600 transition">
            🦷 Expediente Clínico
          </Link>
          <button className="w-full text-left p-3 rounded-lg hover:bg-blue-700 transition">📦 Inventario</button>
        </nav>
        <div className="p-4 border-t border-blue-700">
          <Link to="/login" className="block w-full text-center p-2 bg-red-500 rounded-lg hover:bg-red-600 transition">Cerrar Sesión</Link>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Expediente Clínico</h1>
          <p className="text-gray-500 mt-2">Paciente: Juan Pérez | Edad: 34 años | Odontograma Anatómico</p>
        </header>

        {/* Módulo del Odontograma Anatómico */}
        <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-12 text-center">Odontograma Digital Profesional</h2>
          
          <div className="flex flex-col items-center space-y-16 w-full max-w-6xl">
            {/* Arcos Superior */}
            <div className="w-full">
              <h3 className="text-center text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Arcada Superior</h3>
              <div className="flex justify-center items-end space-x-1.5 p-4 bg-gray-50 rounded-full border border-gray-100 shadow-inner">
                {/* Cuadrante 1 (Der -> Centro) */}
                {Q1.map(diente => (
                  <DienteAnatomico 
                    key={diente} 
                    diente={diente} 
                    esAfectado={dientesAfectados.includes(diente)} 
                    onMark={marcarDiente} esSuperior tipo={getTipoDiente(diente)} />
                ))}
                
                {/* Separación Central */}
                <div className="w-1 border-l-2 border-dashed border-gray-300 h-16 self-center"></div>

                {/* Cuadrante 2 (Centro -> Izq) */}
                {Q2.map(diente => (
                  <DienteAnatomico 
                    key={diente} 
                    diente={diente} 
                    esAfectado={dientesAfectados.includes(diente)} 
                    onMark={marcarDiente} esSuperior tipo={getTipoDiente(diente)} />
                ))}
              </div>
            </div>

            {/* Arcos Inferior */}
            <div className="w-full">
              <h3 className="text-center text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Arcada Inferior</h3>
              <div className="flex justify-center items-start space-x-1.5 p-4 bg-gray-50 rounded-full border border-gray-100 shadow-inner">
                {/* Cuadrante 4 (Der -> Centro) */}
                {Q4.map(diente => (
                  <DienteAnatomico 
                    key={diente} 
                    diente={diente} 
                    esAfectado={dientesAfectados.includes(diente)} 
                    onMark={marcarDiente} esSuperior={false} tipo={getTipoDiente(diente)} />
                ))}

                {/* Separación Central */}
                <div className="w-1 border-l-2 border-dashed border-gray-300 h-16 self-center"></div>

                {/* Cuadrante 3 (Centro -> Izq) */}
                {Q3.map(diente => (
                  <DienteAnatomico 
                    key={diente} 
                    diente={diente} 
                    esAfectado={dientesAfectados.includes(diente)} 
                    onMark={marcarDiente} esSuperior={false} tipo={getTipoDiente(diente)} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Leyenda */}
          <div className="mt-16 flex justify-center space-x-10 text-sm text-gray-600 border-t pt-8 w-full max-w-4xl">
            <div className="flex items-center"><DienteAnatomico diente="X" esAfectado={false} onMark={()=>{}} esSuperior tipo="premolar"/> <span className="ml-4 font-semibold text-gray-800">Pieza Sana</span></div>
            <div className="flex items-center"><DienteAnatomico diente="X" esAfectado={true} onMark={()=>{}} esSuperior tipo="premolar"/> <span className="ml-4 font-semibold text-red-700">Tratamiento Requerido (Caries/Extracción)</span></div>
          </div>
        </div>
      </main>
    </div>
  );
}