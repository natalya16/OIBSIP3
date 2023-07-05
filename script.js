let btn = document.getElementById('add')
btn.addEventListener('click', addchapter)
let parentlist = document.getElementById('listitem')

// How to add an element in list
function addchapter(e){
    if(parentlist.children[0].className == "emptymsg"){
        parentlist.children[0].remove()
    }
    let currentinput = document.getElementById('insert')
    let currentchapter = currentinput.value.toUpperCase()

    let newli = document.createElement('li')
    newli.classList.add('chapter')
    newli.innerHTML = `<span id="todo">${currentchapter}</span><span id="todobtn"><button id="btn1" onclick="editchapter(this)">Edit</button> <button id="btn2" onclick="removechapter(this)">Remove</button></span>`
        parentlist.appendChild(newli)
      }

 //How to remove an element from list
 function removechapter(currentelement){

    currentelement.parentElement.parentElement.remove()
    if(parentlist.children.length <= 0){
        let emptymsg = document.createElement('h3')
        emptymsg.classList.add('emptymsg')
        emptymsg.textContent = "Hey Champ, What do you want to do today ?? "
        parentlist.appendChild(emptymsg)
    }
}

//How to edit element from list 
function editchapter(element){
    if(element.textContent == "Done") {
        element.textContent = "Edit"
        let editchaptername = element.parentElement.parentElement.children[0].value
        let currenttext = document.createElement('text')
        currenttext.textContent = editchaptername
        element.parentElement.replaceChild(currenttext,element.previousSibling)
    }
    else{
        element.textContent = "Done"
        let editchaptername = element.parentElement.parentElement.children[0].textContent
        let currenteditinput = document.createElement('input')
        currenteditinput.type = "text"
        currenteditinput.placeholder = "CHAPTER NAME"
        currenteditinput.value = editchaptername
        element.parentElement.replaceChild(currenteditinput,element.previousSibling)
 }
}