import { Link } from 'react-router-dom';

export default function Agenda() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Barra lateral (Sidebar) */}
      <aside className="w-64 bg-blue-800 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-blue-700">
          DentaLink
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/agenda" className="block p-3 bg-blue-700 rounded-lg hover:bg-blue-600 transition">
            📅 Agenda Inteligente
          </Link>
          <Link to="/expediente" className="block p-3 rounded-lg hover:bg-blue-700 transition text-left w-full">
            🦷 Expediente Clínico
          </Link>
          <button className="w-full text-left p-3 rounded-lg hover:bg-blue-700 transition">
            📦 Inventario
          </button>
        </nav>
        <div className="p-4 border-t border-blue-700">
          <Link to="/login" className="block w-full text-center p-2 bg-red-500 rounded-lg hover:bg-red-600 transition">
            Cerrar Sesión
          </Link>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Agenda Inteligente</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 shadow-sm">
            + Nueva Cita
          </button>
        </header>

        {/* Contenedor del Calendario (Estructura visual) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-h-[600px]">
          <div className="grid grid-cols-7 gap-4 text-center border-b pb-4 font-semibold text-gray-600">
            <div>Dom</div>
            <div>Lun</div>
            <div>Mar</div>
            <div>Mié</div>
            <div>Jue</div>
            <div>Vie</div>
            <div>Sáb</div>
          </div>
          
          {/* Cuadrícula de días simulada */}
          <div className="grid grid-cols-7 gap-4 mt-4 h-full">
            {/* Generamos 35 cuadros vacíos para simular el mes */}
            {[...Array(35)].map((_, i) => (
              <div key={i} className="h-24 border border-gray-100 rounded-lg p-2 hover:bg-blue-50 transition cursor-pointer">
                <span className="text-sm text-gray-400">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}