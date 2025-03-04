# Formatter

Este projeto oferece uma ferramenta simples para formatar qualquer código escrito em HTML, CSS, JavaScript ou qualquer outro código-fonte inserido pelo usuário. O formatador organiza o código automaticamente, aplicando regras básicas de formatação, como indentação, espaçamento e quebras de linha.

## Funcionalidades

- **Entrada de Código**: O usuário pode digitar ou colar qualquer código na área de texto.
- **Formatação Automática**: Após clicar no botão "Formatar", o código é processado e formatado de acordo com regras predefinidas, como:
  - Indentação de 2 espaços para cada nível.
  - Remoção de múltiplos espaços em branco.
  - Quebras de linha antes e depois de chaves `{}`.
  - Limpeza de quebras de linha excessivas.
- **Saída de Código**: O código formatado aparece em um segundo campo de texto.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página e áreas de entrada.
- **CSS**: Estilo e formatação da página.
- **JavaScript**: Lógica para formatação de código e manipulação da interface.

## Como Usar

1. Abra o arquivo `index.html` em seu navegador.
2. Digite ou cole seu código no campo "Digite seu código aqui...".
3. Clique no botão **Formatar**.
4. O código formatado será exibido no campo abaixo de "Código Formatado".

### Exemplo:

1. **Código de entrada**:
```html
<html><head><title>Teste</title></head><body><h1>Olá, Mundo!</h1></body></html>
```

2. **Código formatado**:
```html
<html>
  <head>
    <title>Teste</title>
  </head>
  <body>
    <h1>Olá, Mundo!</h1>
  </body>
</html>
```

## Explicação do Código

- **HTML**: Define a estrutura básica do formato de entrada e saída, incluindo áreas de texto e um botão para acionar a formatação.
- **CSS**: O arquivo `style.css` é responsável pelo design simples e responsivo da página, criando uma interface amigável para o usuário.
- **JavaScript**: A função `formatCode` é responsável por processar o código digitado, aplicando regras de formatação. A função `getIndentLevel` calcula o nível de indentação com base nas chaves de abertura e fechamento.

## Como Funciona a Formatação

A formatação do código é feita em três etapas principais:
1. **Remoção de espaços em excesso**: A função substitui espaços múltiplos por um único espaço.
2. **Reorganização das chaves `{}`**: Coloca quebras de linha antes e depois de chaves de abertura e fechamento.
3. **Cálculo da indentação**: A função determina o nível de indentação baseado no número de chaves abertas e fechadas ao longo do código.

## Personalização

Se você desejar adaptar ou expandir o formato do código, como alterar a quantidade de espaços na indentação ou adicionar mais regras de formatação, você pode modificar a função `formatCode` no arquivo `script.js`.

## Contribuições

Sinta-se à vontade para fazer melhorias ou adicionar novas funcionalidades. Se você encontrar algum bug ou tiver sugestões, abra uma _issue_ ou envie um _pull request_.

## Licença

Este projeto está sob a licença MIT.
