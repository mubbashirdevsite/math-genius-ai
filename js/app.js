const app = document.getElementById("app");

async function loadPage(page){

    const response =
    await fetch(
        `pages/${page}.html`
    );

    const html =
    await response.text();

    app.innerHTML = html;

    const oldScript =
    document.getElementById(
        "page-script"
    );

    if(oldScript){
        oldScript.remove();
    }

    const script =
    document.createElement(
        "script"
    );

    script.id =
    "page-script";

    script.src =
    `js/${page}.js`;

    document.body.appendChild(
        script
    );
}

window.loadPage = loadPage;