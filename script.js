let noteField = document.querySelector('.notes');
let addButton = document.querySelector('.btn-add');
let finishBtn = document.querySelector('.btn-finish');
let counter = 1;


addButton.addEventListener('click', function() {
  let inputField = document.querySelector('.info');
  let myText = inputField.value;
  if (myText != '') {
    let myNote = document.createElement('div');
    let noteText = document.createElement('p');
    noteText.innerText = myText;
    myNote.classList.add('note');
    myNote.classList.add('note-'+counter);
    let buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');
    let newDeleteBtn = document.createElement('button');
    let newFinishBtn = document.createElement('button');
    newDeleteBtn.classList.add('btn');
    newDeleteBtn.classList.add('btn-delete');
    newDeleteBtn.classList.add('btn-note-'+counter);
    newDeleteBtn.type = "button";
    newDeleteBtn.name = "button";
    newDeleteBtn.innerText = "X";
    newDeleteBtn.addEventListener('click', deleteNote);
    newFinishBtn.classList.add('btn');
    newFinishBtn.classList.add('btn-finish');
    newFinishBtn.classList.add('btn-note-'+counter);
    newFinishBtn.innerText = "✔";
    newFinishBtn.addEventListener('click', finishNote);
    buttonsDiv.appendChild(newFinishBtn);
    buttonsDiv.appendChild(newDeleteBtn);
    // buttonsDiv.appendChild(newFinishBtn);
    noteField.appendChild(myNote);
    myNote.appendChild(noteText);
    myNote.appendChild(buttonsDiv);
    counter++;
  } else {
    alert("Введите текст");
  }
})

function deleteNote() {
  let numClass = this.classList[2];
  let number = numClass[numClass.length-1];
  let noteToDelete = document.querySelector('.note-' + number);
  noteToDelete.parentNode.removeChild(noteToDelete);
}

function finishNote() {
  let numClass = this.classList[2];
  let number = numClass[numClass.length-1];
  document.querySelector('.note-' + number).classList.add('not-active');
  this.style.backgroundColor = "white";
  this.style.color = "green";
  this.style.border = "1px solid black";
}
