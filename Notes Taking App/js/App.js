const x = document.querySelector("#addbtn")
const main = document.querySelector("#main")

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    if(data.length === 0){
        localStorage.removeItem("notes")
    }
    else{
        localStorage.setItem("notes", JSON.stringify(data))
    }
}   
x.addEventListener(
    "click",
    function () {
        addNotes();
    }
)


const addNotes = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
  
    <div class="tool">
        <i class=" save fas fa-save"></i>
        <i class=" trash fas fa-trash"></i>
    </div>
    <textarea >${text}</textarea>`;

    // this is the function to delete the note whenerver trash icon is clicked
    note.querySelector(".trash").addEventListener(
        "click",
        function () {
            note.remove();
        }
    )
    note.querySelector(".save").addEventListener(
        "click",
        function () {
            saveNotes();
        }
    )
    note.querySelector("textarea").addEventListener(
        "focusout",
        function(){
            saveNotes()
        }
    )

    main.appendChild(note)
    saveNotes()
}
(
    function () {
        const lsnotes = JSON.parse(localStorage.getItem("notes"));
        if(lsnotes === null){
            addNotes()
        }else{
            lsnotes.forEach(
                (lsNote) =>{
                    addNotes(lsNote)
                }
            )
        }
        
        // if(lsnotes.length === 0){
        //     localStorage.removeItem("notes")
        // }
        // else{
        //     addNotes()
        // }
    }
)()