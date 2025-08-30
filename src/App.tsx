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
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white shadow-lg border-r-2 border-red-500 flex flex-col">
        {/* Logo Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col items-center space-y-3">
            <img 
              src="/logo.png" 
              alt="Joicont Contabilidade" 
              className="h-12 w-auto"
            />
            <div className="text-center">
              <h1 className="text-lg font-bold text-gray-900">Simulador</h1>
              <h2 className="text-lg font-bold text-gray-900">Societário</h2>
              <p className="text-xs text-gray-500 mt-1">Joicont Contabilidade</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {pages.map((page) => (
              <li key={page.id}>
                <button
                  onClick={() => setCurrentPage(page.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                    currentPage === page.id
                      ? 'bg-red-50 text-red-700 border-l-4 border-red-500'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className="text-xl">{page.icon}</span>
                  <span className="font-medium">{page.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer do Sidebar */}
        <div className="p-4 border-t border-gray-200">
          <p className="text-xs text-gray-400 text-center">
            Desenvolvido para<br />
            <span className="text-red-500 font-medium">Joicont</span>
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {pages.find(p => p.id === currentPage)?.icon} {pages.find(p => p.id === currentPage)?.label}
              </h1>
              <p className="text-gray-600 text-sm">Ferramenta de planejamento financeiro empresarial</p>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow-md p-8 text-center h-full">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">🧩 Testando Menu Lateral!</h1>
            <p className="mb-4">Página atual: <strong className="text-red-600">{currentPage}</strong></p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-3">📋 <strong>Layout Sidebar:</strong></p>
              <ul className="text-sm text-gray-600 space-y-2 text-left max-w-md mx-auto">
                <li>• ✅ Logo centralizada no topo</li>
                <li>• ✅ Menu vertical com ícones grandes</li>
                <li>• ✅ Página ativa destacada em vermelho</li>
                <li>• ✅ Header dinâmico mostra página atual</li>
                <li>• ✅ Mais espaço para conteúdo principal</li>
                <li>• ✅ Layout profissional tipo dashboard</li>
              </ul>
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  💡 <strong>Teste a navegação:</strong> Clique nas opções do menu lateral
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
