let questions = [
    {
        "question": "Which player was the model of the NBA logo?",
        "answer_1": "Micheal Jordan",
        "answer_2": "charles Barkley",
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

function startQuiz() {
    let question = questions[currentQuestion];

    document.getElementById('question').innerHTML = `${question["question"]}`; // Frage wird angezeigt
    document.getElementById('answer_1').innerHTML = `${question["answer_1"]}`; // Antwortmöglichkeit 1 wird angezeigt
    document.getElementById('answer_2').innerHTML = `${question["answer_2"]}`; // Antwortmöglichkeit 2 wird angezeigt
    document.getElementById('answer_3').innerHTML = `${question["answer_3"]}`; // Antwortmöglichkeit 3 wird angezeigt
    document.getElementById('answer_4').innerHTML = `${question["answer_4"]}`; // Antwortmöglichkeit 4 wird angezeigt
    document.getElementById('start-text').style = `display: none`; // Starttext wird ausgeblendet
}