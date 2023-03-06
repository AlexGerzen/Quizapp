let questions = [
    {
        "question": "Which player was the model of the NBA logo?",
        "answer_1": "Micheal Jordan",
        "answer_2": "Charles Barkley",
        "answer_3": "Larry Bird",
        "answer_4": "Jerry West",
        "right_answer": 4,
    },
    {
        "question": "Which player has the most points in NBA history?",
        "answer_1": "Micheal Jordan",
        "answer_2": "Lebron James",
        "answer_3": "Kobe Bryant",
        "answer_4": "Kareem Abdul-Jabbar",
        "right_answer": 4, 
    },
    {
        "question": "Which city has a Grizzly as the team logo?",
        "answer_1": "Los Angeles",
        "answer_2": "Memphis",
        "answer_3": "Boston",
        "answer_4": "Denver",
        "right_answer": 3,
    },
    {
        "question": "Which of these NBA-Teams has won three championschips in a row?",
        "answer_1": "Cleveland Cavaliers",
        "answer_2": "Goldenstate Warriors",
        "answer_3": "Chicago Bulls",
        "answer_4": "Philadelphia 76ers",
        "right_answer": 3,
    },
];

let currentQuestion = 0;
let register = 1;
let amountRightAnswer = 0;


function showQuiz() {
    let question = questions[currentQuestion];
    let registerBorderAdd = `register_${register}`;
    let progress = currentQuestion*25;

    document.getElementById('question').innerHTML = `${question["question"]}`; // Frage wird angezeigt
    document.getElementById('start-text').style = `display: none`; // Starttext wird ausgeblendet
    document.getElementById('start-button').style = `display: none`; //Startbutton wird ausgeblendet 
    document.getElementById('switch-question').style = ''; // Die Buttons zum Frage wechseln werden angezeigt
    document.getElementById(registerBorderAdd).classList.add('left-border');
    document.getElementById('progressbar').style.width = `${progress}%`;
    showAnswer(question);
}

function showAnswer(question) {
    document.getElementById('answer_1').innerHTML = `<div class="answer-box" id="answer_box_1">A</div> <p class="answer-text">${question["answer_1"]} </p>`; // Antwortmöglichkeit 1 wird angezeigt
    document.getElementById('answer_2').innerHTML = `<div class="answer-box" id="answer_box_2">B</div> <p class="answer-text">${question["answer_2"]} </p>`; // Antwortmöglichkeit 2 wird angezeigt
    document.getElementById('answer_3').innerHTML = `<div class="answer-box" id="answer_box_3">C</div> <p class="answer-text">${question["answer_3"]} </p>`; // Antwortmöglichkeit 3 wird angezeigt
    document.getElementById('answer_4').innerHTML = `<div class="answer-box" id="answer_box_4">D</div> <p class="answer-text">${question["answer_4"]} </p>`; // Antwortmöglichkeit 4 wird angezeigt
    document.getElementById('answer_1').parentNode.style = ''; // Antwortmöglichkeit 1 wird angezeigt
    document.getElementById('answer_2').parentNode.style = ''; // Antwortmöglichkeit 2 wird angezeigt
    document.getElementById('answer_3').parentNode.style = ''; // Antwortmöglichkeit 3 wird angezeigt
    document.getElementById('answer_4').parentNode.style = ''; // Antwortmöglichkeit 4 wird angezeigt
}

function checkAnswer(choice) {
    let question = questions[currentQuestion];
    let answer = choice.toString().slice(-1); // Die ausgewählte Antwort wird der Variable zugeordnet dann in ein String umgewandelt und davon der letzte Character ausgewählt
    let idOfRightAnswer = `answer_${question["right_answer"]}`; // Die Id der richtigen Antwort wird der Variable zugeordnet
    let idOfRightAnswerBox = `answer_box_${question["right_answer"]}`;
    let idOfWrongAnswerBox = `answer_box_${answer}`;

    if (answer == question["right_answer"]) { // Abfrage ob die angegebene Antwort richtig ist
        document.getElementById(choice).classList.add('bg-limegreen'); // Richtige Antwort wird grün hinterlegt
        document.getElementById(idOfRightAnswerBox).classList.add('answer-right-box'); // Richtige Antwort wird grün hinterlegt
        if (amountRightAnswer < questions.length) { // Damit nichtt mehr Fragen richtig sind als überhaupt vorhanden sind
            amountRightAnswer ++; 
        }
    }
    else { // Ausgabe wenn die angegebene Antwort falsch ist
        document.getElementById(choice).classList.add('bg-lightred'); // Falsche Antwort wird rot hinterlegt
        document.getElementById(idOfWrongAnswerBox).classList.add('answer-wrong-box'); // Falsche Antwort wird rot hinterlegt
        document.getElementById(idOfRightAnswer).classList.add('bg-limegreen'); // Richtige Antwort wird grün hinterlegt
        document.getElementById(idOfRightAnswerBox).classList.add('answer-right-box'); // Richtige Antwort wird grün hinterlegt
    }
}

function revealAnswer() {

}

function nextQuestion() {
    if (currentQuestion+1 >= questions.length) { // Abfrage ob das Quiz noch fragen hat
     showEndScreen(); // EndScreen wird angezeigt 
    }
    else { // Pfad wenn das Quiz noch nicht beendet ist
    removeAnswerClasses(); // Hintergrundfarben werden entfernt
    removeRegisterBorder();
    currentQuestion ++; // Variable wird um 1 erhöht
    register ++;
    showQuiz(); // Das Quiz wird neu angezeigt
    }
}

function previousQuestion() {
    if (currentQuestion <= 0) { // verhindert das die Variable negativ wird
        currentQuestion = 0;
    }
    else {
        removeAnswerClasses(); // Hintergrundfarben werden entfernt
        removeRegisterBorder();
        register--;
        currentQuestion --; // Variable wird um 1 verringert
        showQuiz(); // Das Quiz wird neu angezeigt
    } 
}

function showEndScreen() {
    document.getElementById('answer-container').style = `display: none`;  // Antworten werden ausgeblendet
    document.getElementById('question').style = `display: none`; //Frage wird ausgeblendet
    document.getElementById('end-container').style = ``; // Endcontainer wird angezeigt
    document.getElementById('register_4').classList.remove('left-border'); // Registerborder wird entfernt
    document.getElementById('switch-question').style = `display: none`; // Pfeile zum Fragen wechseln werden entfernt
    document.getElementById('score').innerHTML = `${amountRightAnswer}/${questions.length}`; // Anzahl der richtig beantworteten Fragen werden angezeigt
    document.getElementById('progressbar').style.width = `100%`; // Progressbar wird komplett aufgefüllt
}

function restart() {
    resetCounter();
    document.getElementById('answer-container').style = ``; // Antwortencontainer anzeigen
    document.getElementById('question').style = ``; // Fragencontainer anzeigen
    document.getElementById('end-container').style = `display: none`; // Endcontainer ausblenden
    document.getElementById('progressbar').style.width = `0%`; // Reset Progressbar
    removeAnswerClasses();
    showQuiz();
}

function removeAnswerClasses() {   // Richtig oder Falsch Anzeige wird entfernt
    document.getElementById('answer_1').classList.remove('bg-lightred');
    document.getElementById('answer_1').classList.remove('bg-limegreen');
    document.getElementById('answer_2').classList.remove('bg-lightred');
    document.getElementById('answer_2').classList.remove('bg-limegreen');
    document.getElementById('answer_3').classList.remove('bg-lightred');
    document.getElementById('answer_3').classList.remove('bg-limegreen');
    document.getElementById('answer_4').classList.remove('bg-lightred');
    document.getElementById('answer_4').classList.remove('bg-limegreen');

    document.getElementById('answer_box_1').classList.remove('answer-right-box');
    document.getElementById('answer_box_1').classList.remove('answer-wrong-box');
    document.getElementById('answer_box_2').classList.remove('answer-right-box');
    document.getElementById('answer_box_2').classList.remove('answer-wrong-box');
    document.getElementById('answer_box_3').classList.remove('answer-right-box');
    document.getElementById('answer_box_3').classList.remove('answer-wrong-box');
    document.getElementById('answer_box_4').classList.remove('answer-right-box');
    document.getElementById('answer_box_4').classList.remove('answer-wrong-box');
}

function resetCounter() {
    currentQuestion = 0; // Variablen werden zurückgesetzt um das Quiz von vorne zu starten
    register = 1;
    amountRightAnswer = 0;
}

function removeRegisterBorder() {
    let registerBorderRemove = `register_${register}`; // Id von der Register

    document.getElementById(registerBorderRemove).classList.remove('left-border'); //Border am Register wird entfernt
}