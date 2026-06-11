const formulas = [

{
name:"Quadratic Formula",
formula:"x=(-b±√(b²-4ac))/2a",
desc:"Used to solve quadratic equations."
},

{
name:"Pythagorean Theorem",
formula:"a²+b²=c²",
desc:"Right triangle theorem."
},

{
name:"Circle Area",
formula:"A=πr²",
desc:"Area of a circle."
},

{
name:"Euler Identity",
formula:"e^(iπ)+1=0",
desc:"One of the most famous equations."
},

{
name:"Power Rule",
formula:"d/dx[xⁿ]=nxⁿ⁻¹",
desc:"Derivative rule."
}

];

function renderFormulas(list=formulas){

    const container =
    document.getElementById(
        "formulaContainer"
    );

    container.innerHTML = "";

    list.forEach(item=>{

        const saved =
        isSaved(item.name);

        container.innerHTML += `

        <div class="formula-card">

            <div class="formula-title">
                ${item.name}
            </div>

            <div class="formula-expression">
                ${item.formula}
            </div>

            <p>${item.desc}</p>

            <div class="formula-actions">

                <button
                    class="copy-btn"
                    onclick="copyFormula('${item.formula}')">

                    Copy

                </button>

                <button
                    class="save-btn"
                    onclick="toggleSave('${item.name}')">

                    ${saved ? "★ Saved" : "☆ Save"}

                </button>

            </div>

        </div>
        `;
    });
}

function searchFormula(){

    const value =
    document
    .getElementById(
        "formulaSearch"
    )
    .value
    .toLowerCase();

    const filtered =
    formulas.filter(item=>

        item.name
        .toLowerCase()
        .includes(value)

        ||

        item.formula
        .toLowerCase()
        .includes(value)
    );

    renderFormulas(filtered);
}

function copyFormula(text){

    navigator.clipboard
    .writeText(text);

    alert("Copied");
}

function isSaved(name){

    const saved =
    JSON.parse(
        localStorage.getItem(
            "savedFormulas"
        ) || "[]"
    );

    return saved.includes(name);
}

function toggleSave(name){

    let saved =
    JSON.parse(
        localStorage.getItem(
            "savedFormulas"
        ) || "[]"
    );

    if(saved.includes(name)){

        saved =
        saved.filter(
            item => item !== name
        );

    }else{

        saved.push(name);
    }

    localStorage.setItem(
        "savedFormulas",
        JSON.stringify(saved)
    );

    renderFormulas();
}

renderFormulas();