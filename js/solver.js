function setExample(value){

    document
    .getElementById("problemInput")
    .value = value;
}

function clearProblem(){

    document
    .getElementById("problemInput")
    .value = "";

    document
    .getElementById("solutionBox")
    .classList.add("hidden");
}

async function solveProblem(){

    const input =
    document.getElementById(
        "problemInput"
    );

    const text = input.value.trim();

    if(!text){
        alert("Enter a problem");
        return;
    }

    const box =
    document.getElementById(
        "solutionBox"
    );

    const content =
    document.getElementById(
        "solutionContent"
    );

    box.classList.remove(
        "hidden"
    );

    content.innerHTML = `
        <p>🧠 Solving...</p>
    `;

    setTimeout(() => {

    content.innerHTML = `
        <div class="answer-highlight">
            Answer: x = 2, x = 3
        </div>

        <p><b>Step 1:</b> Factorize the equation.</p>

        <p>
        x² − 5x + 6 = (x − 2)(x − 3)
        </p>

        <p><b>Step 2:</b> Set each factor equal to zero.</p>

        <p>x − 2 = 0 ⇒ x = 2</p>

        <p>x − 3 = 0 ⇒ x = 3</p>

        <p><b>Final Answer:</b> x = 2, 3</p>
    `;

}, 1000);
}