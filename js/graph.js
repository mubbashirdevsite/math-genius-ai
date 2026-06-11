function loadFunction(fn){

    document.getElementById(
        "functionInput"
    ).value = fn;

    drawGraph();
}

function drawGraph(){

    const canvas =
    document.getElementById(
        "graphCanvas"
    );

    const ctx =
    canvas.getContext("2d");

    const W = canvas.width;
    const H = canvas.height;

    const centerX = W/2;
    const centerY = H/2;

    const scale = 35;

    ctx.clearRect(0,0,W,H);

    ctx.fillStyle = "#12121A";
    ctx.fillRect(0,0,W,H);

    ctx.strokeStyle="#333";

    for(let i=-20;i<=20;i++){

        ctx.beginPath();
        ctx.moveTo(centerX+i*scale,0);
        ctx.lineTo(centerX+i*scale,H);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0,centerY+i*scale);
        ctx.lineTo(W,centerY+i*scale);
        ctx.stroke();
    }

    ctx.strokeStyle="#666";

    ctx.beginPath();
    ctx.moveTo(0,centerY);
    ctx.lineTo(W,centerY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(centerX,0);
    ctx.lineTo(centerX,H);
    ctx.stroke();

    const fn =
    document.getElementById(
        "functionInput"
    ).value;

    ctx.strokeStyle="#6C63FF";
    ctx.lineWidth=3;

    ctx.beginPath();

    let started=false;

    for(let px=0; px<W; px++){

        const x =
        (px-centerX)/scale;

        let y;

        try{
            y = Function(
                "x",
                `return ${fn}`
            )(x);
        }
        catch{
            continue;
        }

        const py =
        centerY - y*scale;

        if(!started){

            ctx.moveTo(px,py);
            started=true;
        }else{

            ctx.lineTo(px,py);
        }
    }

    ctx.stroke();
}

setTimeout(
    drawGraph,
    100
);