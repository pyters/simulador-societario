import { useState } from 'react';

type PageName = 'setup' | 'simulation' | 'charts' | 'summary' | 'export';

function App() {
  const [currentPage, setCurrentPage] = useState<PageName>('setup');

  const pages = [
    { id: 'setup' as PageName, label: 'Configuração', icon: '⚙️' },
    { id: 'simulation' as PageName, label: 'Simulação', icon: '📊' },
    { id: 'charts' as PageName, label: 'Gráficos', icon: '📈' },
    { id: 'summary' as PageName, label: 'Resumo', icon: '📋' },
    { id: 'export' as PageName, label: 'Exportar', icon: '💾' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-2 border-red-500">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <img 
              src="/logo.png" 
              alt="Joicont Contabilidade" 
              className="h-14 w-auto"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Simulador Societário</h1>
              <p className="text-gray-600 mt-1">
                Ferramenta de planejamento financeiro empresarial
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-50 shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => setCurrentPage(page.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  currentPage === page.id
                    ? 'border-red-500 text-red-600 bg-white'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300 hover:bg-white'
                }`}
              >
                <span className="mr-2">{page.icon}</span>
                {page.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">✅ Design otimizado para logo Joicont!</h1>
          <p className="mb-4">Página atual: <strong className="text-red-600">{currentPage}</strong></p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 mb-2">🎨 <strong>Nova paleta:</strong></p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Header branco para destacar a logo</li>
              <li>• Bordas vermelhas como accent color</li>
              <li>• Navegação cinza claro com hover</li>
              <li>• Cards brancos sobre fundo cinza</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
