# 🐷💰 Planej.ai — Seu Educador Financeiro Inteligente com IA

Desenvolvido durante o Bootcamp da [DIO](www.web.dio.me) **Santader 2026 - AI React Frontend** com React, Tailwind, TypeScript e Google Gemini
, este projeto é um educador financeiro onde o usuário preenche um formulário com sua renda, gastos e meta financeira, e recebe um diagnóstico personalizado com sugestões de como atingir esse objetivo.

Tudo roda localmente no navegador: sem backend, sem banco de dados remoto. Os dados são salvos no `localStorage` e as análises são feitas em tempo real pela API do google Gemini

 ## 🚀 O que o projeto faz
 - O usuário preenche um formulário com 6 etapas
 - A IA gera um diagnóstico com a viabilidade da meta e sugestões de renda extra
 - Chat com a IA sobre a simulação
 - Temas claro e escuro de acordo com a preferência do usuário
 - Histórico de simulações (seus resultados, inclusive suas conversas com a IA, são salvas!)
 - É possível apagar simulações salvas com o o botão de apagar simulação

 ## 💻 Stacks Utilizadas no projeto

| ⚙️ Tecnologia  |  📦  Versão   |
| ----------- | ----------- |
|   React     | ^19.2.7      |
|   Vite      | ^8.1.1      |
| TypeScript  | ~6.0.2      |
|  Tailwind   | ^4.3.2 |
| React Router| ^7.18.1 |
| Lucide React| ^1.24.0      |
| React Loading Skeleton      | ^3.5.0     |

## 🚀 Como Executar o Projeto Localmente

Como este projeto é 100% front-end e requer uma chave de API para funcionar, siga o passo a passo abaixo para configurá-lo e executá-lo na sua máquina.

### 📋 Pré-requisitos
* [Git instalado](https://git-scm.com/)
* [Node.js instalado](https://nodejs.org/) (versão LTS recomendada)
* Um gerenciador de pacotes (`npm`, `yarn` ou `pnpm`)
* Uma chave de API do Google Gemini (É gratuita!)

---

### 🛠️ Passo a Passo

#### 1. Clonar o repositório
Abra o terminal e execute os comandos:
```
git clone https://github.com/antoniorafaeldev/planejAI.git
cd planejAI
```

---

#### 2. Instalar as dependências

Execute o comando correspondente ao seu gerenciador de pacotes:

* **npm:** `npm install`
* **yarn:** `yarn install`
* **pnpm:** `pnpm install`

---

#### 3. Configurar a Chave de API
Acesse o [Google AI Studio](https://aistudio.google.com/) para gerar sua chave gratuita:
   * Clique em **Get API key** (ícone da chave) no menu lateral.
   * Clique em **Create API key** para gerar uma nova chave.

Na raiz da pasta do projeto, crie um arquivo chamado `.env.local` (deve ter exatamente esse nome).
Abra o arquivo `.env.local` em um editor de código (como o VS Code) e adicione a seguinte linha:

```
VITE_GEMINI_API_KEY=SUA_CHAVE_DE_API_AQUI
```

Substitua SUA_CHAVE_DE_API_AQUI pela chave que você gerou no Google AI Studio.

---

#### 4. Executar o projeto

No terminal (já dentro da pasta do projeto), rode o comando de desenvolvimento dependendo do seu gerenciador de pacotes:

- **npm:** `npm run dev`
- **yarn:** `yarn dev`
- **pnpm:** `pnpm dev`

Abra o link indicado no terminal (geralmente http://localhost:5173) no seu navegador!

---

## Aprendizados

Esse foi o projeto mais desafiador que eu fiz e nele eu aprendi muita coisa. As principais foram

- Uso de Tailwind para estilização com classes customizadas
- Hooks personalizados
- Context API para compartilhamento dos temas claro e escuro entre os componentes
- Hook useRef para evitar chamadas duplicadas pra API por conta do StrictMode
- Organizar e montar um prompt de IA, com estrutura de resposta e regras bem definidas

---


Desenvolvido durante o bootcamp Santader 2026 - AI React Frontend

