# Claude Context & Rules

## General Rules
- Only commit to GitHub when user explicitly authorizes
- When commit, always update README.md with accepted changes

## Project Context
- **Business**: Simulador financeiro para contabilidade Joicont
- **Target**: Ferramenta para contabilidades oferecerem aos clientes
- **Tech Stack**: React 18 + TypeScript + Vite + Tailwind CSS
- **Design**: Sidebar layout, cores Joicont (#DC2626 vermelho)

## Current Status
- ✅ **Fase 1**: Base design system e layout sidebar
- ✅ **Fase 2**: Setup page com React Hook Form + Zod, gestão sócios
- 🚧 **Próxima**: Fase 3 - Tabela simulação financeira mensal

## Key Features Implemented
- Sidebar navigation com logo centralizada
- Setup page: controles duplos (slider + input numérico)
- Validação robusta: mínimo 2 sócios, total 100%
- Defaults: João da Silva e Pedro Souza (50% cada)
- Customização sliders com cores brand

## Development Patterns
- Usar React Hook Form + Zod para formulários
- Manter design system Joicont (branco/cinza/vermelho)
- Grid layouts para nome/participação
- Feedback visual verde/vermelho para validações
