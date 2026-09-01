

# My Essence — Landing Page

[🔗 Acesse o site rodando ao vivo](https://my-essence-perfumaria.vercel.app/)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

Landing page para a perfumaria **My Essence**, com catálogo de perfumes e body splashes, filtros por categoria, quick view de produto e botão de compra via WhatsApp. 100% HTML, CSS e JS puro (sem frameworks, sem build step).

## Estrutura do projeto

```
my-essence/
├── index.html
├── css/
│   ├── base.css          → variáveis de design (:root), reset e tipografia global
│   ├── buttons.css       → estilos de botão (.btn, .btn-dark, .btn-outline, .btn-nude)
│   ├── header.css        → barra de navegação, logo, burger e menu mobile
│   ├── hero.css          → seção de abertura (título com barra, imagem destaque)
│   ├── marquee.css       → faixa escura animada
│   ├── sections.css      → espaçamento e cabeçalho genérico de seção
│   ├── about.css         → seção "Sobre a My Essence"
│   ├── catalog.css       → filtros e grade de produtos (cards)
│   ├── why.css           → seção "Por que a My Essence" (diferenciais)
│   ├── cta.css           → seção final de chamada para ação
│   ├── footer.css        → rodapé
│   ├── modal.css         → quick view do produto (modal ao clicar na foto)
│   ├── utilities.css     → animações de entrada, botão voltar ao topo e WhatsApp flutuante
│   └── responsive.css    → media queries (SEMPRE o último a ser carregado)
├── js/
│   └── script.js         → dados dos produtos, filtros, modal, animações
├── images/               → fotos dos produtos e logo (já otimizadas)
└── README.md
```

> **Por que separado assim?** Cada arquivo CSS corresponde a uma seção visual da página (a mesma divisão que você vê rolando o site). Isso facilita encontrar rapidamente o que mexer — quer alterar o rodapé? Vai direto em `footer.css`, sem precisar procurar em um arquivo único gigante.
>
> **Importante:** a ordem dos `<link>` no `index.html` importa. `responsive.css` precisa ser sempre o último, porque suas regras devem sobrescrever as dos outros arquivos nos breakpoints menores.

## Como rodar localmente

Não precisa de instalação nem servidor. Duas opções:

1. **Mais simples**: dê duplo clique no `index.html` — abre direto no navegador.
2. **Recomendado (evita bloqueios de cache/CORS ao editar)**: use a extensão **Live Server** do VS Code, clique com o botão direito em `index.html` → "Open with Live Server".

## Categorias usadas nos filtros

- `perfume` → perfumes/colônias
- `splash` → body splash
- `importado` → produtos importados (ex: O.U.I Paris)

Um produto pode ter mais de uma categoria (ex: `["perfume", "importado"]`).
