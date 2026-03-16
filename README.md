# 💕 Álbum Virtual

Site de álbum de fotos virtual para casais, com estética de polaroids e anotações em papel rasgado.

🔗 **Repositório:** [github.com/vieiratechbr/album-virtual](https://github.com/vieiratechbr/album-virtual)

## Estrutura do projeto

```
album-virtual/
├── index.html   # Página principal (HTML + CSS + JS em um único arquivo)
└── README.md    # Este arquivo
```

> CSS e JavaScript estão embutidos no `index.html`. A separação em arquivos individuais (`style.css` e `script.js`) está prevista como próximo passo.

## Funcionalidades

- Adicionar memórias com foto, legenda, texto e data
- Fotos exibidas no estilo polaroid com inclinação aleatória
- Textos em formato de papel rasgado com pautas e fita washi decorativa
- Animação suave ao adicionar novos cards
- Remover memórias individualmente

## Como usar

1. Clone o repositório ou baixe o `index.html`
   ```bash
   git clone https://github.com/vieiratechbr/album-virtual.git
   ```
2. Abra o `index.html` em qualquer navegador moderno
3. Clique em **Adicionar Memória**
4. Escolha uma foto (opcional), escreva uma legenda, um texto e uma data
5. Clique em **Salvar** — a memória aparece no álbum
6. Para remover, passe o mouse sobre o card e clique no ✕

> Nenhuma instalação necessária. Funciona direto no navegador.

## Tecnologias

- HTML5, CSS3 e JavaScript puro (sem frameworks)
- Fontes: [Permanent Marker](https://fonts.google.com/specimen/Permanent+Marker), [Caveat](https://fonts.google.com/specimen/Caveat) e [Reenie Beanie](https://fonts.google.com/specimen/Reenie+Beanie) via Google Fonts

## Próximos passos

- [ ] Separar CSS e JS em arquivos próprios (`style.css` e `script.js`)
- [ ] Persistência de dados (localStorage ou backend)
- [ ] Capa personalizada com nomes do casal
- [ ] Linha do tempo / ordem cronológica
- [ ] Modo de visualização em tela cheia por foto
- [ ] Exportar álbum como PDF
