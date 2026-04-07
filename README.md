<p align="center">
  <a href="https://github.com/alvarobraz/event-manager-nextjs" target="blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" width="120" alt="Next.js Logo" />
  </a>
</p>

<h1 align="center">Event Manager - Interface 🌐</h1>

<p align="center">
  Interface de gerenciamento de eventos, desenvolvida com Next.js 15+, React 19 e Tailwind CSS.
</p>

<p align="center">
  <img alt="Repo size" src="https://img.shields.io/github/repo-size/alvarobraz/event-manager-nextjs"/>

  <a href="https://nextjs.org/">
    <img alt="Next.js Version" src="https://img.shields.io/badge/next.js-15.0+-black">
  </a>

  <a href="https://www.linkedin.com/in/alvarobraz/">
    <img alt="Made by alvarobraz" src="https://img.shields.io/badge/made%20by-alvarobraz-%237519C1">
  </a>

  <a href="https://github.com/alvarobraz/event-manager-nextjs">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/alvarobraz/event-manager-nextjs">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/alvarobraz/event-manager-nextjs">
</p>

---

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#structure-estrutura">Estrutura</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a>
</p>

<br>

## :dart: Sobre

Esta é a camada de **Frontend** do ecossistema Event Manager. Uma aplicação desenvolvida para oferecer uma experiência fluida no gerenciamento de eventos, permitindo a visualização detalhada, inscrição de participantes e criação de novos eventos com upload de imagens.

## :rocket: Tecnologias

O projeto utiliza tecnologias de ponta para garantir uma interface rápida e responsiva:

### Core & UI

- **Next.js 15 (App Router)** - Framework para renderização híbrida.
- **React 19** - Biblioteca base para construção da interface.
- **Tailwind CSS v4** - Estilização moderna com foco em performance.
- **Lucide React** - Ícones leves e consistentes.

### Data Fetching & Forms

- **Axios** - Cliente HTTP para comunicação com a API Backend.
- **React Hook Form** - Gerenciamento de estado de formulários.
- **Zod** - Validação de esquemas de dados e contratos da API.
- **Sonner** - Sistema de notificações (toasts) para feedback do usuário.

## Estrutura do Projeto

A arquitetura foi pensada para manter a separação de responsabilidades, facilitando a manutenção e escala:

- **`/src/api` & `/src/services`**: Camada de persistência e comunicação externa utilizando Axios.
- **`/src/hooks`**: Lógica de negócio e estado encapsulados em Hooks customizados (Ex: `useRegistration`, `useCreateEvent`).
- **`/src/components`**: Componentes de UI divididos por domínio (`events`, `layout`, `ui`).
- **`/src/schemas`**: Definição de contratos e validações utilizando Zod.
- **`/src/app`**: Roteamento baseado em arquivos (Next.js App Router).

## :white_check_mark: Requerimentos

- **Node.js 20.x** ou superior
- **NPM** (ou gerenciador de sua preferência)
- **API Backend** devidamente configurada

## :checkered_flag: Começando

```bash
## Clone o projeto
$ git clone https://github.com/alvarobraz/event-manager-nextjs

## Acesse a pasta
$ cd event-manager-nextjs

## Instale as dependências
$ npm install

## Configure seu .env (NEXT_PUBLIC_API_URL)
$ cp .env.example .env

## Inicie o servidor de desenvolvimento
$ npm run dev

## A aplicação estará disponível em http://localhost:3000.
```
