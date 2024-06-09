var questionElement = document.getElementById('question');
var answerBox = document.getElementById('answers-box');
var quizContainer = document.getElementById('quiz-container');
var scoreContainer = document.getElementById('score-container');
var points = 0;
var actualQuestion = 0;


var questions = [
    {
        "question": "1- Quando o Corinthians foi fundado?",
        "answers": [
            { "answer": "1910", "correct": true },
            { "answer": "1911", "correct": false },
            { "answer": "1908", "correct": false },
            { "answer": "1915", "correct": false }
        ]
    },
    {
        "question": "2- Em qual ano o Corinthians conquistou o seu primeiro campeonato Paulista?",
        "answers": [
            { "answer": "1912", "correct": false },
            { "answer": "1914", "correct": true },
            { "answer": "1918", "correct": false },
            { "answer": "1915", "correct": false }
        ]
    },
    {
        "question": "3- Qual desses jogadores tem mais gols pelo Corinthians?",
        "answers": [
            { "answer": "Sócrates", "correct": false },
            { "answer": "Luizinho", "correct": true },
            { "answer": "Rivellino", "correct": false },
            { "answer": "Casagrande", "correct": false }
        ]
    },
    {
        "question": "4- Em que dia foi fundado o Corinthians?",
        "answers": [
            { "answer": "Dia 1º outubro", "correct": false },
            { "answer": "Dia 30º de outubro", "correct": false },
            { "answer": "Dia 1º de setembro", "correct": true },
            { "answer": "Dia 30º de setembro", "correct": false }
        ]
    },
    {
        "question": "5- Quem fez o gol decisivo na final do campeonato paulista em 2019 contra o São Paulo?",
        "answers": [
            { "answer": "Clayson", "correct": false },
            { "answer": "Danilo Avelar", "correct": false },
            { "answer": "Fagner", "correct": false },
            { "answer": "Vagner Love", "correct": true }
        ]
    },
    {
        "question": "6- Qual é a capacidade de público da Neo Quimica Arena?",
        "answers": [
            { "answer": "46.300", "correct": false },
            { "answer": "49.205", "correct": true },
            { "answer": "44.810", "correct": false },
            { "answer": "48.400", "correct": false }
        ]
    },
    {
        "question": "7- Como o atacante Paolo Guerreiro fez o gol na final do Mundial em 2012?",
        "answers": [
            { "answer": "Cabeça", "correct": true },
            { "answer": "Chute normal", "correct": false },
            { "answer": "Pênalti", "correct": false },
            { "answer": "Cobertura", "correct": false }
        ]
    },
    {
        "question": "8- No primeiro jogo da final da Libertadores de 2012 que ocorreu na La Bombonera, que jogador do Corinthians tentou defender a bola com a mão?",
        "answers": [
            { "answer": "Fábio Santos", "correct": false },
            { "answer": "Ralf", "correct": false },
            { "answer": "Alessandro", "correct": false },
            { "answer": "Chicão", "correct": true }
        ]
    },
    {
        "question": "9- Quantos pênaltis o goleiro Cassio defendeu pelo Corinthians?",
        "answers": [
            { "answer": "30", "correct": false },
            { "answer": "27", "correct": false },
            { "answer": "32", "correct": true },
            { "answer": "22", "correct": false }
        ]
    },
    {
        "question": "10- Contra qual time o Corinthians ganhou o campeonato Paulista de 1977?",
        "answers": [
            { "answer": "Palmeiras", "correct": false },
            { "answer": "Portuguesa", "correct": false },
            { "answer": "Ponte Preta", "correct": true },
            { "answer": "São Paulo", "correct": false }
        ]
    }
]

// Função para inicializar o quiz
function init() {
    points = 0;
    actualQuestion = 0;
    scoreContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    createQuestion();
}

// Função para criar uma questão
function createQuestion() {
    var currentQuestion = questions[actualQuestion];
    questionElement.textContent = currentQuestion.question;
    answerBox.innerHTML = '';

    currentQuestion.answers.forEach(answer => {
        var answerButton = document.createElement('button');
        answerButton.textContent = answer.answer;
        answerButton.className = 'answer';
        answerButton.onclick = function () {
            checkAnswer(this);
        };
        answerButton.setAttribute('data-correct', answer.correct);
        answerBox.appendChild(answerButton);
    });
}

// Função para verificar a resposta do usuário
function checkAnswer(button) {
    var correct = button.getAttribute('data-correct') === 'true';
    var buttons = answerBox.getElementsByTagName('button');

    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].getAttribute('data-correct') === 'true') {
            buttons[i].classList.add('correct');
            
        } else {
            buttons[i].classList.add('wrong');
        }
    }

    if (correct) {
        points++;
    }

    actualQuestion++;
    setTimeout(function () {
        if (actualQuestion >= questions.length) {
            showScore();
        } else {
            createQuestion();
        }
    }, 500);
}

// Função para exibir a pontuação final
// Função para exibir a pontuação final
function showScore() {
    quizContainer.style.display = 'none';
    scoreContainer.style.display = 'block';

    // Armazenar resultados no sessionStorage
    sessionStorage.setItem('quiz_acertos_sccp', points);
    sessionStorage.setItem('quiz_erros_sccp', questions.length - points);
}

// Inicialização do quiz
init();

