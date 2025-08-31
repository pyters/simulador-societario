import { useState } from 'react';
import SetupPage from './pages/SetupPage';

type PageName = 'setup' | 'simulation' | 'charts' | 'summary' | 'export';

interface Partner {
  id: string;
  name: string;
  percentage: number;
}

interface SimulationData {
  partners: Partner[];
  simulationYears: number;
  createdAt: Date;
  updatedAt: Date;
}

function App() {
  const [currentPage, setCurrentPage] = useState<PageName>('setup');
  const [simulationData, setSimulationData] = useState<SimulationData | null>(null);

  const handleSetupComplete = (data: Partial<SimulationData>) => {
    setSimulationData(data as SimulationData);
    setCurrentPage('simulation');
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'setup':
        return <SetupPage onSetupComplete={handleSetupComplete} />;
      case 'simulation':
        return (
          <div className="text-center py-12">
            <h2 className="text-xl text-gray-600">Página de Simulação em desenvolvimento...</h2>
          </div>
        );
      case 'charts':
        return (
          <div className="text-center py-12">
            <h2 className="text-xl text-gray-600">Página de Gráficos em desenvolvimento...</h2>
          </div>
        );
      case 'summary':
        return (
          <div className="text-center py-12">
            <h2 className="text-xl text-gray-600">Página de Resumo em desenvolvimento...</h2>
          </div>
        );
      case 'export':
        return (
          <div className="text-center py-12">
            <h2 className="text-xl text-gray-600">Página de Exportação em desenvolvimento...</h2>
          </div>
        );
      default:
        return <SetupPage onSetupComplete={handleSetupComplete} />;
    }
  };

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
          {renderPageContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
