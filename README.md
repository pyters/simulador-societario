# 📊 Simulador Societário

Um simulador financeiro web para planejamento societário e análise de cenários empresariais, desenvolvido para contabilidades oferecerem aos seus clientes.

## 🚀 Funcionalidades

### ✅ Implementadas
- **Configuração de Sócios**: Interface para inserir nomes e percentuais societários
- **Período de Simulação**: Definição de anos de simulação (padrão: 5 anos)
- **Validações**: Verificação automática se percentuais somam 100%
- **Interface Responsiva**: Layout profissional com Tailwind CSS
- **Navegação**: Sistema de abas para diferentes funcionalidades

### 🚧 Em Desenvolvimento
- **Tabela de Simulação**: Edição em massa mês a mês dos dados financeiros
- **Gráficos**: Visualizações dos resultados da simulação
- **Resumo**: Valores consolidados e métricas importantes
- **Exportação**: Download em PDF e dados estruturados

## 🛠 Tech Stack

### Frontend
- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para maior segurança
- **Vite** - Build tool moderno e rápido
- **Tailwind CSS** - Framework CSS utilitário

### Gerenciamento de Estado
- **React Hooks** - useState, useEffect para estado local
- **React Hook Form** - Gerenciamento eficiente de formulários
- **Zod** - Validação de schemas TypeScript

### Visualização e Export
- **Recharts** - Biblioteca de gráficos para React
- **jsPDF** - Geração de PDFs no cliente
- **html2canvas** - Captura de elementos HTML

### Desenvolvimento
- **ESLint** - Linting de código
- **PostCSS** - Processamento de CSS
- **Autoprefixer** - Prefixos CSS automáticos

## 📋 Roadmap de Implementação

### Fase 1: Setup e Estrutura Base ✅
- [x] Configuração do projeto React + TypeScript
- [x] Setup do Tailwind CSS
- [x] Estrutura de componentes base (Layout, Header, Navigation)
- [x] Definição dos tipos TypeScript
- [x] Página de configuração de sócios

### Fase 2: Simulação Financeira 🚧
- [ ] Tabela editável para dados mensais
- [ ] Campos: Caixa Total, Lucro/Prejuízo, Aportes por Sócio
- [ ] Tipos de aporte: Investimento, Caixa, Parcial
- [ ] Cálculo automático de percentuais e valores da empresa
- [ ] Persistência local dos dados

### Fase 3: Visualização 📊
- [ ] Gráficos de evolução do caixa
- [ ] Gráficos de lucro/prejuízo ao longo do tempo
- [ ] Gráficos de aportes por sócio
- [ ] Evolução do valor da empresa
- [ ] ROI por sócio

### Fase 4: Resumo e Análises 📈
- [ ] Métricas consolidadas
- [ ] Total de lucro/prejuízo acumulado
- [ ] Total de investimentos e aportes
- [ ] ROI individual de cada sócio
- [ ] Valor final da empresa

### Fase 5: Exportação 💾
- [ ] Export para PDF com layout profissional
- [ ] Export de dados em JSON/CSV
- [ ] Salvamento local no browser
- [ ] Funcionalidade de importar simulações salvas

## 🏗 Estrutura do Projeto

```
simulador-societario/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Layout.tsx       # Layout principal da aplicação
│   │   ├── Header.tsx       # Cabeçalho com branding
│   │   └── Navigation.tsx   # Menu de navegação
│   ├── pages/              # Páginas da aplicação
│   │   ├── SetupPage.tsx   # Configuração inicial
│   │   ├── SimulationPage.tsx    # Tabela de simulação
│   │   ├── ChartsPage.tsx  # Gráficos e visualizações
│   │   ├── SummaryPage.tsx # Resumo e métricas
│   │   └── ExportPage.tsx  # Exportação de dados
│   ├── types/              # Definições TypeScript
│   │   └── index.ts        # Interfaces e tipos
│   ├── utils/              # Utilitários
│   │   ├── calculations.ts # Cálculos financeiros
│   │   ├── storage.ts      # LocalStorage helpers
│   │   └── export.ts       # Funções de exportação
│   ├── hooks/              # Custom hooks
│   │   └── useSimulation.ts # Gerenciamento do estado da simulação
│   └── App.tsx             # Componente raiz
├── public/                 # Arquivos estáticos
├── tailwind.config.js      # Configuração do Tailwind
├── postcss.config.js       # Configuração do PostCSS
└── package.json           # Dependências e scripts
```

## 🎯 Tipos de Dados

### Partner (Sócio)
```typescript
interface Partner {
  id: string;
  name: string;
  percentage: number;
}
```

### MonthlyData (Dados Mensais)
```typescript
interface MonthlyData {
  month: number;
  year: number;
  totalCash: number;
  profit: number;
  partnerContributions: PartnerContribution[];
  companyValue: number;
}
```

### PartnerContribution (Aporte de Sócio)
```typescript
interface PartnerContribution {
  partnerId: string;
  investmentAmount: number;  // Não entra no caixa
  cashAmount: number;        // Entra no caixa
  contributionType: 'investment' | 'cash' | 'partial';
}
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
cd simulador-societario
npm install
npm run dev
```

### Acesso
- Desenvolvimento: `http://localhost:5173`
- Build de produção: `npm run build`

## 🎨 Design System

### Cores
- **Primária**: Blue-600 (#2563EB) - Header e elementos principais
- **Secundária**: Gray-50 (#F9FAFB) - Background
- **Sucesso**: Green-600 - Validações positivas
- **Erro**: Red-600 - Validações negativas

### Componentes
- **Inputs**: Bordas arredondadas, focus states com azul
- **Botões**: Primary (azul), Secondary (branco com borda)
- **Cards**: Fundo branco com sombra sutil
- **Tabelas**: Zebra striping, headers fixos

## 🔧 Próximas Melhorias

### Performance
- [ ] Lazy loading das páginas
- [ ] Memoização de cálculos complexos
- [ ] Virtual scrolling para tabelas grandes

### UX/UI
- [ ] Loading states
- [ ] Skeleton screens
- [ ] Toasts para feedback
- [ ] Modo escuro

### Funcionalidades Avançadas
- [ ] Múltiplas simulações simultâneas
- [ ] Comparação entre cenários
- [ ] Templates de simulação
- [ ] Integração com APIs de cotações

## 👥 Público-Alvo

### Contabilidades
- **Diferencial competitivo**: Ferramenta exclusiva para clientes
- **Credibilidade**: Simulações profissionais e detalhadas
- **Eficiência**: Automatização de cálculos manuais

### Empresários
- **Planejamento**: Análise de cenários antes de decisões
- **Transparência**: Visualização clara dos impactos financeiros
- **Colaboração**: Ferramenta para discussões societárias

## 📞 Suporte

Para dúvidas técnicas ou sugestões de melhorias, entre em contato através do repositório do projeto.

---

**Desenvolvido para contabilidades modernas que buscam oferecer valor agregado aos seus clientes através de tecnologia.**
