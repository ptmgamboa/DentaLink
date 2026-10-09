export default function Login() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">DentaLink</h1>
        <h2 className="text-gray-600 text-center mb-8">Acceso administrativo</h2>
        
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input 
              type="email" 
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none" 
              placeholder="doctor@clinica.com" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input 
              type="password" 
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none" 
              placeholder="••••••••" 
            />
          </div>
          
          <button 
            type="button" 
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200 font-semibold"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}