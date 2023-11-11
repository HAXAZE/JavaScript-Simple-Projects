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
        <i class="fas fa-save"></i>
        <i class="fas fa-trash"></i>
    </div>
    <textarea ></textarea>`;

    main.appendChild(note)
}