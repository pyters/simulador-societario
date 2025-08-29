import { PageName } from '../types';

interface NavigationProps {
  currentPage: PageName;
  onPageChange: (page: PageName) => void;
}

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const pages = [
    { id: 'setup' as PageName, label: 'Configuração', icon: '⚙️' },
    { id: 'simulation' as PageName, label: 'Simulação', icon: '📊' },
    { id: 'charts' as PageName, label: 'Gráficos', icon: '📈' },
    { id: 'summary' as PageName, label: 'Resumo', icon: '📋' },
    { id: 'export' as PageName, label: 'Exportar', icon: '💾' },
  ];

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex space-x-8">
          {pages.map((page) => (
            <button
              key={page.id}
              onClick={() => onPageChange(page.id)}
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
  );
}