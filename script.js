let questions = [
    {
        "question": "Welches ist das größte Organ des menschlichen Körpers?",
        "answer_1": "Die Haut",
        "answer_2": "Die Lunge",
        "answer_3": "Das Herz",
        "answer_4": "Die Leber",
        "right_answer": 1
    },
    {
        "question": "Welche Programmiersprache wird hauptsächlich für Webseiten im Browser genutzt?",
        "answer_1": "Python",
        "answer_2": "Java",
        "answer_3": "JavaScript",
        "answer_4": "C#",
        "right_answer": 3
    },
    {
        "question": "Wie viele Kontinente gibt es auf der Erde?",
        "answer_1": "5",
        "answer_2": "6",
        "answer_3": "7",
        "answer_4": "8",
        "right_answer": 3
    },
    {
        "question": "Wer malte die Mona Lisa?",
        "answer_1": "Pablo Picasso",
        "answer_2": "Vincent van Gogh",
        "answer_3": "Claude Monet",
        "answer_4": "Leonardo da Vinci",
        "right_answer": 4
    },
    {
        "question": "Welcher Planet ist der Sonne am nächsten?",
        "answer_1": "Venus",
        "answer_2": "Merkur",
        "answer_3": "Mars",
        "answer_4": "Jupiter",
        "right_answer": 2
    },
    {
        "question": "In welcher Einheit wird elektrische Spannung gemessen?",
        "answer_1": "Watt",
        "answer_2": "Volt",
        "answer_3": "Ampere",
        "answer_4": "Ohm",
        "right_answer": 2
    },
    {
        "question": "Wie viele Nullen hat eine Milliarde?",
        "answer_1": "6",
        "answer_2": "9",
        "answer_3": "12",
        "answer_4": "15",
        "right_answer": 2
    },
    {
        "question": "Welches Tier ist das schnellste an Land?",
        "answer_1": "Leopard",
        "answer_2": "Antilope",
        "answer_3": "Gepard",
        "answer_4": "Löwe",
        "right_answer": 3
    }
];

let currentQuestion = 0;

let rightQuestions = 0;

function init() {
    document.getElementById('questions_length').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {

        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display:none;'

        document.getElementById('amount_questions').innerHTML = questions.length;
        document.getElementById('amount_right_questions').innerHTML = rightQuestions;

        document.getElementById('end_screen_image').src = 'img/dragonwithoutmark.png';
    } else {

        let question = questions[currentQuestion];

        document.getElementById('question_Number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('richtig');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
    } else {
        console.log('falsch');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButton();
    showQuestion();
}

function resetAnswerButton() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

