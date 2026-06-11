const achievements = [

{
id:1,
title:"First Quiz",
icon:"🎯",
requirement:1
},

{
id:2,
title:"Quiz Master",
icon:"🏆",
requirement:5
},

{
id:3,
title:"Math Expert",
icon:"🧠",
requirement:10
},

{
id:4,
title:"Legend",
icon:"👑",
requirement:20
}

];

function loadProfile(){

    const scores =
    JSON.parse(
        localStorage.getItem(
            "quizScores"
        ) || "[]"
    );

    const totalQuizzes =
    scores.length;

    let totalScore = 0;

    scores.forEach(item=>{

        totalScore += item.score;
    });

    const average =
    totalQuizzes
    ?
    Math.round(
        (totalScore /
        (totalQuizzes * 5))*100
    )
    :
    0;

    document
    .getElementById(
        "totalQuizzes"
    )
    .innerText =
    totalQuizzes;

    document
    .getElementById(
        "averageScore"
    )
    .innerText =
    average + "%";

    renderAchievements(
        totalQuizzes
    );

    renderRecentScores(
        scores
    );

    updateLevel(
        totalQuizzes
    );
}

function renderAchievements(
    totalQuizzes
){

    const container =
    document.getElementById(
        "achievementGrid"
    );

    container.innerHTML = "";

    let unlocked = 0;

    achievements.forEach(item=>{

        const isUnlocked =
        totalQuizzes >=
        item.requirement;

        if(isUnlocked)
            unlocked++;

        container.innerHTML += `

        <div class="
            achievement-card
            ${isUnlocked
            ? 'unlocked'
            : ''}
        ">

            <div class="
                achievement-icon">

                ${item.icon}

            </div>

            <h4>
                ${item.title}
            </h4>

            <small>

                Complete
                ${item.requirement}
                quizzes

            </small>

        </div>

        `;
    });

    document
    .getElementById(
        "achievementCount"
    )
    .innerText =
    unlocked;
}

function renderRecentScores(
    scores
){

    const box =
    document.getElementById(
        "recentScores"
    );

    box.innerHTML = "";

    if(scores.length===0){

        box.innerHTML =
        "<p>No quiz history yet.</p>";

        return;
    }

    scores
    .slice()
    .reverse()
    .slice(0,10)
    .forEach(item=>{

        box.innerHTML += `

        <div class="score-item">

            Score:
            ${item.score}/5

            <br>

            <small>
            ${item.date}
            </small>

        </div>

        `;
    });
}

function updateLevel(
    totalQuizzes
){

    let level =
    "Beginner Learner";

    let progress = 10;

    if(totalQuizzes >= 5){

        level =
        "Intermediate";

        progress = 40;
    }

    if(totalQuizzes >= 10){

        level =
        "Advanced";

        progress = 75;
    }

    if(totalQuizzes >= 20){

        level =
        "Math Master";

        progress = 100;
    }

    document
    .getElementById(
        "userLevel"
    )
    .innerText = level;

    document
    .getElementById(
        "progressFill"
    )
    .style.width =
    progress + "%";

    document
    .getElementById(
        "progressText"
    )
    .innerText =
    progress +
    "% Completed";
}

loadProfile();