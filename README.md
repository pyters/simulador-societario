# 📊 Simulador Societário

Um simulador financeiro web para planejamento societário e análise de cenários empresariais, desenvolvido para contabilidades oferecerem aos seus clientes.

## 🚀 Funcionalidades

### ✅ Implementadas

#### **Fase 1: Base e Design ✅**
- **🎨 Design System Joicont**: Paleta de cores alinhada com identidade visual
- **📱 Menu Lateral Sidebar**: Layout profissional tipo dashboard
- **🖼️ Logo e Branding**: Integração completa da marca Joicont
- **🧭 Navegação Vertical**: Menu lateral com ícones e hover effects
- **📊 Header Dinâmico**: Mostra página atual no topo
- **⚡ Tailwind CSS**: Framework configurado com versões estáveis
- **🔧 Git Repository**: Controle de versão completo com checkpoints

#### **Fase 2: Configuração de Sócios ✅**
- **⚙️ Página de Setup**: Configuração inicial completa e funcional
- **👥 Gestão de Sócios**: Adicionar/remover sócios dinamicamente
- **🎛️ Controles Duplos**: Slider + input numérico sincronizados
- **📏 Grid 50/50**: Layout nome/participação otimizado
- **🔍 Validação Robusta**: React Hook Form + Zod Schema
- **📊 Feedback Visual**: Verde/vermelho para total de percentuais
- **📅 Slider de Anos**: Seleção intuitiva de 1-10 anos
- **✅ Defaults Inteligentes**: João da Silva (50%) + Pedro Souza (50%)

### 🚧 Em Desenvolvimento
- **Tabela de Simulação**: Edição mês a mês com aportes dinâmicos
- **Gráficos**: Visualizações da evolução societária
- **Resumo**: ROI e métricas consolidadas
- **Exportação**: PDF profissional e dados estruturados

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
- [x] Setup do Tailwind CSS (versões estáveis 3.3.x)
- [x] Estrutura de componentes base (Layout, Header, Navigation)
- [x] Definição dos tipos TypeScript
- [x] **Design System Joicont** - Paleta alinhada com identidade visual
- [x] **Menu Lateral Sidebar** - Layout profissional tipo dashboard
- [x] **Logo e Branding** - Integração completa da marca Joicont
- [x] **Layout Responsivo** - Header dinâmico + sidebar fixa

### Fase 2: Configuração de Sócios ✅
- [x] **Página de Setup completa** - Interface de configuração inicial
- [x] **React Hook Form + Zod** - Validação robusta e formulários reativos
- [x] **Gestão dinâmica de sócios** - Adicionar/remover com mínimo de 2
- [x] **Slider de anos** - Seleção intuitiva de 1-10 anos de simulação
- [x] **Controles duplos** - Slider + input numérico sincronizados
- [x] **Grid 50/50** - Layout otimizado nome/participação
- [x] **Validação em tempo real** - Feedback visual para percentuais
- [x] **Defaults inteligentes** - Sócios padrão prontos para usar

### Fase 3: Simulação Financeira 🚧
- [ ] Tabela editável para dados mensais
- [ ] Campos: Caixa Total, Lucro/Prejuízo, Aportes por Sócio
- [ ] Tipos de aporte: Investimento, Caixa, Parcial
- [ ] Cálculo automático de percentuais e valores da empresa
- [ ] Persistência local dos dados

### Fase 4: Visualização 📊
- [ ] Gráficos de evolução do caixa
- [ ] Gráficos de lucro/prejuízo ao longo do tempo
- [ ] Gráficos de aportes por sócio
- [ ] Evolução do valor da empresa
- [ ] ROI por sócio

### Fase 5: Resumo e Análises 📈
- [ ] Métricas consolidadas
- [ ] Total de lucro/prejuízo acumulado
- [ ] Total de investimentos e aportes
- [ ] ROI individual de cada sócio
- [ ] Valor final da empresa

### Fase 6: Exportação 💾
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

## 🎨 Design System Joicont

### Paleta de Cores (Baseada na Logo)
- **Branco**: #FFFFFF - Sidebar, cards e header principal
- **Cinza Escuro**: #1F2937, #374151 - Textos principais  
- **Cinza Claro**: #F9FAFB, #F3F4F6 - Background e elementos neutros
- **Vermelho Joicont**: #EF4444, #DC2626 - Destaques, páginas ativas, acentos
- **Vermelho Claro**: #FEF2F2 - Background de elementos ativos

### Layout
- **Sidebar**: 256px fixa à esquerda com logo e menu vertical
- **Header Dinâmico**: Mostra página atual no topo da área principal
- **Cards**: Brancos com sombra sutil sobre fundo cinza
- **Navegação**: Vertical com ícones grandes e hover effects

### Componentes
- **Menu Lateral**: Botões com borda esquerda vermelha quando ativo
- **Inputs**: Bordas arredondadas, focus states vermelhos
- **Botões**: Primary (vermelho), Secondary (branco com borda)
- **Logo**: Integrada no topo da sidebar
- **Branding**: "Joicont" destacado em vermelho

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
