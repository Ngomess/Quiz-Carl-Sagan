// PARTE 1: Lista de perguntas e respostas
perguntas = [
  {
    pergunta: "O que Carl Sagan quis dizer com a frase “somos feitos de poeira das estrelas”?",
    respostas: [
      { opcao: "A) Os elementos químicos que formam nossos corpos foram forjados no interior de estrelas que explodiram.", correto: true },
      { opcao: "B) É uma maneira de dizer que nossa existência é insignificante diante do universo.", correto: false },
      { opcao: "C) É apenas uma metáfora poética sem base científica.", correto: false }
    ]
  },
  {
    pergunta: "Por que o silêncio do universo é tão misterioso (o chamado Paradoxo de Fermi)?",
    respostas: [
      { opcao: "A) Porque não temos tecnologia para ouvir as estrelas.", correto: false },
      { opcao: "B) Porque, embora o universo seja vasto, não há sinais claros de outras civilizações.", correto: true },
      { opcao: "C) Porque todos os sinais se apagam ao chegarem até nós.", correto: false }
    ]
  },
  {
    pergunta: "Qual foi a principal mensagem de Sagan ao mostrar a foto do “Pálido Ponto Azul”?",
    respostas: [
      { opcao: "A) Que a Terra é o único lugar que importa no universo.", correto: false },
      { opcao: "B) Que precisamos conquistar outros planetas.", correto: false },
      { opcao: "C) Que somos pequenos, frágeis, e devemos cuidar melhor do nosso planeta e uns dos outros.", correto: true }
    ]
  },
  {
    pergunta: "O que é o efeito Doppler, segundo Sagan?",
    respostas: [
      { opcao: "A) Uma teoria sobre buracos negros.", correto: false },
      { opcao: "B) A mudança na frequência de uma onda em movimento, usada para medir a expansão do universo.", correto: true },
      { opcao: "C) Um fenômeno quântico que afeta partículas subatômicas.", correto: false }
    ]
  }
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos++; // Incrementa o contador de acertos apenas uma vez
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();