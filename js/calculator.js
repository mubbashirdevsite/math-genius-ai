let calcExpression = "";
let calcHistory = [];

function pressCalc(value){

    calcExpression += value;

    document.getElementById(
        "calcExpression"
    ).innerText = calcExpression;
}

function backspace(){

    calcExpression =
    calcExpression.slice(0,-1);

    document.getElementById(
        "calcExpression"
    ).innerText = calcExpression;
}

function clearCalc(){

    calcExpression = "";

    document.getElementById(
        "calcExpression"
    ).innerText = "";

    document.getElementById(
        "calcResult"
    ).innerText = "0";
}

function calculateResult(){

    try{

        let exp = calcExpression
            .replace(/\^/g,"**")
            .replace(/sqrt\(/g,"Math.sqrt(")
            .replace(/sin\(/g,"Math.sin(")
            .replace(/cos\(/g,"Math.cos(")
            .replace(/tan\(/g,"Math.tan(")
            .replace(/log\(/g,"Math.log10(")
            .replace(/ln\(/g,"Math.log(");

        const result =
        eval(exp);

        document.getElementById(
            "calcResult"
        ).innerText = result;

        calcHistory.unshift(
            `${calcExpression} = ${result}`
        );

        renderHistory();

    }catch{

        document.getElementById(
            "calcResult"
        ).innerText = "Error";
    }
}

function renderHistory(){

    const box =
    document.getElementById(
        "historyList"
    );

    box.innerHTML = "";

    calcHistory
    .slice(0,10)
    .forEach(item=>{

        box.innerHTML += `
            <div class="history-item">
                ${item}
            </div>
        `;
    });
}