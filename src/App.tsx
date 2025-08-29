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
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Simulador Societário</h1>
          <p className="text-blue-100 mt-2">
            Ferramenta de planejamento financeiro empresarial
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md border-b">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => setCurrentPage(page.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  currentPage === page.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
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
        <div className="text-center">
          <h1 className="text-2xl font-bold text-blue-600 mb-4">✅ Tailwind CSS funcionando!</h1>
          <p className="mb-2">Página atual: <strong>{currentPage}</strong></p>
          <p className="text-gray-600">Clique nas abas acima para testar a navegação</p>
        </div>
      </main>
    </div>
  );
}

export default App;
