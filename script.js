const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-txt'));
const progressText = document.querySelector('#qnumber');
const questionss = document.querySelector('#hud');
const scoreText = document.querySelector('#main-text');



let currentQuestion = {};
let acceptingAnswers = true;
let questionCounter = 0;
let availableQuestions = [];
let score = 0;

let questions = [
    {
        question: "What is the best selling videogame of all time?",
        choice1: 'Super Mario Bros',
        choice2: 'Minecraft',
        choice3: 'Grand Theft Auto 5',
        choice4: 'Tetris',
        answer: 2,
    },
    {
        question: "What year was the Super Nintendo Entertainment System (SNES) released?",
        choice1: '1990',
        choice2: '1992',
        choice3: '1991',
        choice4: '1987',
        answer: 3,
    },
    {
        question: "What is the highest-selling gaming console to date?",
        choice1: 'Xbox 360',
        choice2: 'Playstation 4',
        choice3: 'Nintendo GameCube',
        choice4: 'Playstation 2',
        answer: 4,
    },
    {
        question: "What is the most expensive video game made to date?",
        choice1: 'Grand Theft Auto 5',
        choice2: 'The Last of Us',
        choice3: 'Cyberpunk',
        choice4: 'Read Dead Redemption 2',
        answer: 1,
    },
    {
        question: "What year was the first virtual reality headset created?",
        choice1: '2012',
        choice2: '1995',
        choice3: '2019',
        choice4: '2016',
        answer: 2,
    },
    {
        question: "Mario originated as a character in which video game?",
        choice1: 'Super Mario Bros',
        choice2: 'Mario Bros (NES)',
        choice3: 'Donkey Kong',
        choice4: 'Mario Party',
        answer: 3,
    },
    {
        question: "When was the first 'Call Of Duty' video game released?",
        choice1: '2003',
        choice2: '2000',
        choice3: '1999',
        choice4: '2006',
        answer: 1,
    },
    {
        question: "What is the date setting of the original Call of Duty?",
        choice1: 'World War I',
        choice2: 'World War II',
        choice3: 'World War III',
        choice4: 'The Vietnam War',
        answer: 2,
    },
    {
        question: "Which country had banned the sale of the original Grand Theft Auto?",
        choice1: 'France',
        choice2: 'Germany',
        choice3: 'Britain',
        choice4: 'Brazil',
        answer: 4,
    },
    {
        question: "Saints Row, the video game, was developed by Volition and released in 2006. What console is it only available on?",
        choice1: 'Nintendo DS',
        choice2: 'Nintendo GameCube',
        choice3: 'Xbox',
        choice4: 'Playstation 2',
        answer: 3,
    },
]
const MAX_QUESTIONS = 10;
const SCORE_POINTS = 10;

startGame = () => {
    
    questionCounter = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('namepage.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`; // display question which increments by 1

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionsIndex, 1);   //remove question

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers)  return 

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();


        }, 500)
    })
})

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
}

    startGame();



    


   


