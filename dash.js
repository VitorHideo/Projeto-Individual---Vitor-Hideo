// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
  {
    question: 'Quando o Corinhians foi fundado?',
    answers: [
      {
        answer: '1910',
        correct: true,
      },
      {
        answer: '1911',
        correct: false,
      },
      {
        answer: '1908',
        correct: false,
      },
      {
        answer: '1915',
        correct: false,
      },
    ],
  },
  {
    question: 'Em qual ano o Corinhians consquistou o seu primeiro campeonado Paulista?',
    answers: [
      {
        answer: '1912',
        correct: false,
      },
      {
        answer: '1914',
        correct: true,
      },
      {
        answer: '1918',
        correct: false,
      },
      {
        answer: '1915',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual desses jogadores tem mais gols pelo Corinthians?',
    answers: [
      {
        answer: 'Sócrates',
        correct: false,
      },
      {
        answer: 'Luizinho',
        correct: true,
      },
      {
        answer: 'Rivellino',
        correct: false,
      },
      {
        answer: 'Casagrande',
        correct: false,
      },
    ],
  },
  {
    question: 'Em que dia foi fundado o Corinthians?',
    answers: [
      {
        answer: 'Dia 2º outubro',
        correct: false,
      },
      {
        answer: 'Dia 30º de outubro',
        correct: false,
      },
      {
        answer: 'Dia 1º de setembro',
        correct: true,
      },
      {
        answer: 'Dia 30º de setembro',
        correct: false,
      },
    ],
  },
  {
    question: 'Quem fez o gol decisivo na final do campeonato paulista em 2019 contra o São Paulo?',
    answers: [
      {
        answer: 'Clayson',
        correct: false,
      },
      {
        answer: 'Danilo Avelar',
        correct: false,
      },
      {
        answer: 'Fagner',
        correct: false,
      },
      {
        answer: 'Vagner Love',
        correct: true,
      },
    ],
  },
  {
    question: 'Qual é a capacidade de publico da Neo Quimica Arena?',
    answers: [
      {
        answer: '46.300',
        correct: false,
      },
      {
        answer: '49.205',
        correct: true,
      },
      {
        answer: '44.810',
        correct: false,
      },
      {
        answer: '48.400',
        correct: false,
      },
    ],
  },
  {
    question: 'Como o atacante Paolo Guerreiro fez o gol na final do Mundial em 2012?',
    answers: [
      {
        answer: 'Cabeça',
        correct: true,
      },
      {
        answer: 'Chute normal',
        correct: false,
      },
      {
        answer: 'Pênalti',
        correct: false,
      },
      {
        answer: 'Cobertura',
        correct: false,
      },
    ],
  },
  {
    question: 'No primeiro jogo da final da Libertadores de 2012 que ocorreu na La Bombonera, que jogador do Corinthians tentou defender a bola com a mão?',
    answers: [
      {
        answer: 'Fábio Santos',
        correct: false,
      },
      {
        answer: 'Ralf',
        correct: false,
      },
      {
        answer: 'Alessandro',
        correct: false,
      },
      {
        answer: 'Chicão',
        correct: true,
      },
    ],
  },
  {
    question: 'Quantos pênaltis o goleiro Cassio defendeu pelo Corinthians?',
    answers: [
      {
        answer: '30',
        correct: false,
      },
      {
        answer: '27',
        correct: false,
      },
      {
        answer: '32',
        correct: true,
      },
      {
        answer: '22',
        correct: false,
      },
    ],
  },
  {
    question: 'Contra qual time o Corinthians ganhou o campeonato Paulista de 1977?',
    answers: [
      {
        answer: 'Palmeiras',
        correct: false,
      },
      {
        answer: 'Portuguesa',
        correct: false,
      },
      {
        answer: 'Ponte Preta',
        correct: true,
      },
      {
        answer: 'São Paulo',
        correct: false,
      },
    ],
  },
];

// substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    if (!btn.classList.contains('answer-template')) {
      btn.remove();
    } else {
      // Limpar classes de respostas corretas e incorretas
      btn.classList.remove('correct-answer', 'wrong-answer');
    }
  });

  // alterar texto da pergunta
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // inserir alternativas
  questions[i].answers.forEach((answer, i) => {
    // cria template botão quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    // remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    // inserir alternativa na tela
    answerBox.appendChild(answerTemplate);

    // inserir evento click no botão
    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });

  // incrementar o número da questão
  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(btn) {
  // seleciona todos os botões
  const buttons = answerBox.querySelectorAll('button');

  // verifica se resposta correta e add classe
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');

      // checa se usuário acertou a pergunta
      if (btn === button) {
        // incremento dos pontos
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  // exibir próxima pergunta
  nextQuestion();
}

// exibe a pŕoxima pergunta no quizz
function nextQuestion() {
  // timer para usuário ver as respostas
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
      showSuccessMessage();
      return;
    }
    createQuestion(actualQuestion);
  }, 1000);
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  // trocar dados tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esconde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  //zerar jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// inicialização do quizz
init();
