const quizData = [
    {
        question: 'Who painted the Mona Lisa?',
        a: 'Vincent van Gogh',
        b: 'Pablo Picasso',
        c: 'Leonardo da Vinci',
        d: 'Michelangelo',
        correct: 'c'
    },
    {
        question: 'What is the largest ocean in the world?',
        a: 'Atlantic Ocean',
        b: 'Indian Ocean',
        c: 'Arctic Ocean',
        d: 'Pacific Ocean',
        correct: 'd'
    },
    {
        question: 'Which planet is known as the "Red Planet"?',
        a: 'Venus',
        b: 'Mars',
        c: 'Jupiter',
        d: 'Saturn',
        correct: 'b'
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        a: 'William Shakespeare',
        b: 'Jane Austen',
        c: 'Charles Dickens',
        d: 'F. Scott Fitzgerald',
        correct: 'a'
    },
    {
        question: 'Which country is home to the famous ancient monument Stonehenge?',
        a: 'France',
        b: 'United Kingdom',
        c: 'Italy',
        d: 'Egypt',
        correct: 'b'
    },
]

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselect();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselect() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer){
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
            currentQuiz++;
            if (currentQuiz < quizData.length){
                loadQuiz();
            } else {
                quiz.innerHTML = `<h2>you answered correctly at ${score}/${quizData.length} questions.</h2>
                <button onclick='location.reload()'>Reload</button>
                `
            }
    }


});