function setPrompt(text){

    document.getElementById(
        "chatInput"
    ).value = text;
}

async function sendMessage(){

    const input =
    document.getElementById(
        "chatInput"
    );

    const message =
    input.value.trim();

    if(!message) return;

    const container =
    document.getElementById(
        "chatMessages"
    );

    container.innerHTML += `
        <div class="user-message">
            ${message}
        </div>
    `;

    input.value = "";

    container.innerHTML += `
        <div class="ai-message" id="loading">
            🧠 Thinking...
        </div>
    `;

    container.scrollTop =
    container.scrollHeight;

    try{

        /*
        Replace with Claude/OpenAI API
        */

        setTimeout(()=>{

            document
            .getElementById("loading")
            .remove();

            container.innerHTML += `
                <div class="ai-message">
                    This is a sample AI response for:
                    <strong>${message}</strong>
                </div>
            `;

            container.scrollTop =
            container.scrollHeight;

        },1200);

    }catch{

        document
        .getElementById("loading")
        .innerHTML =
        "Connection Error";
    }
}