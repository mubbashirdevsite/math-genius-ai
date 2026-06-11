const quizData = [

{
question:"What is x if 2x = 10 ?",
answers:["2","5","10","20"],
correct:1
},

{
question:"Area of a circle formula?",
answers:[
"A=πr²",
"A=2πr",
"A=r²",
"A=πd"
],
correct:0
},

{
question:"Derivative of x² ?",
answers:[
"x",
"2x",
"x²",
"2"
],
correct:1
},

{
question:"√81 = ?",
answers:[
"8",
"9",
"7",
"6"
],
correct:1
},

{
question:"3² + 4² = ?",
answers:[
"12",
"25",
"49",
"16"
],
correct:1
}

];

let currentQuestion = 0;
let score = 0;

function startQuiz(){

    currentQuestion = 0;
    score = 0;

    document
    .getElementById("quizContainer")
    .classList.remove("hidden");

    document
    .getElementById("resultCard")
    .classList.add("hidden");

    showQuestion();
}

function showQuestion(){

    const q =
    quizData[currentQuestion];

    document
    .getElementById("questionText")
    .innerText = q.question;

    document
    .getElementById("questionCounter")
    .innerText =
    `Question ${currentQuestion+1}/${quizData.length}`;

    document
    .getElementById("scoreCounter")
    .innerText =
    `Score: ${score}`;

    const answers =
    document.getElementById(
        "answersContainer"
    );

    answers.innerHTML = "";

    q.answers.forEach(
        (answer,index)=>{

        const btn =
        document.createElement(
            "button"
        );

        btn.className =
        "answer-btn";

        btn.innerText =
        answer;

        btn.onclick =
        ()=>selectAnswer(
            index,
            btn
        );

        answers.appendChild(btn);

    });
}

function selectAnswer(
    selected,
    button
){

    const q =
    quizData[currentQuestion];

    const buttons =
    document.querySelectorAll(
        ".answer-btn"
    );

    buttons.forEach(
        btn => btn.disabled = true
    );

    if(
        selected === q.correct
    ){

        button.classList.add(
            "correct"
        );

        score++;

    }else{

        button.classList.add(
            "wrong"
        );

        buttons[
            q.correct
        ].classList.add(
            "correct"
        );
    }

    setTimeout(()=>{

        currentQuestion++;

        if(
            currentQuestion <
            quizData.length
        ){

            showQuestion();

        }else{

            finishQuiz();
        }

    },1200);
}

function finishQuiz(){

    document
    .getElementById(
        "quizContainer"
    )
    .classList.add("hidden");

    document
    .getElementById(
        "resultCard"
    )
    .classList.remove("hidden");

    document
    .getElementById(
        "finalScore"
    )
    .innerText =
    `${score} / ${quizData.length}`;

    saveQuizScore(score);
}

function restartQuiz(){

    startQuiz();
}

function saveQuizScore(score){

    const scores =
    JSON.parse(
        localStorage.getItem(
            "quizScores"
        ) || "[]"
    );

    scores.push({

        score:score,

        date:new Date()
        .toLocaleString()

    });

    localStorage.setItem(
        "quizScores",
        JSON.stringify(scores)
    );
}