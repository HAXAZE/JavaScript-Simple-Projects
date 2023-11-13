const x = document.querySelector("#addbtn")
const main = document.querySelector("#main")
x.addEventListener(
    "click",
        function(){
            addNotes();
        }
)
// <!-- <div class="note">
// <div class="tool">
//     <i class="fas fa-save"></i>
//     <i class="fas fa-trash"></i>

// </div>
// <textarea ></textarea>
// </div> -->
const addNotes = ()=>{
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML=`
  
    <div class="tool">
        <i class=" save fas fa-save"></i>
        <i class=" trash fas fa-trash"></i>
    </div>
    <textarea ></textarea>`;

    // this is the function to delete the note whenerver trash icon is clicked
    note.querySelector(".trash").addEventListener(
        "click",
        function(){
            note.remove();
        }
    )
    main.appendChild(note)
}