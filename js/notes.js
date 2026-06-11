function saveNotes(){

    const text =
    document.getElementById(
        "notesBox"
    ).value;

    localStorage.setItem(
        "mathNotes",
        text
    );

    alert("Notes Saved!");
}

window.onload = function(){

    const saved =
    localStorage.getItem(
        "mathNotes"
    );

    if(saved){

        document.getElementById(
            "notesBox"
        ).value = saved;

    }

};