console.log("Scrip is running")
const Task = document.querySelector(".input-field");
const listContainer = document.querySelector(".tasklist");

const AddTask = () =>{
    
    if(Task.value === ""){
        alert("Please enter a task!");
    }
    else {
        let list = document.createElement("li");
        list.innerText = Task.value;
        listContainer.appendChild(list);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        list.appendChild(span)
        
    }
    Task.value = ""
    saveData()
}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked")}
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
}
},false)

const saveData = () => {
    localStorage.setItem("Data"  , listContainer.innerHTML)

}

const showData = () => {
    listContainer.innerHTML = localStorage.getItem("Data")
}

showData()

const AddButton = document.querySelector(".Addbtn");
AddButton.addEventListener("click" , AddTask);


// AddButton.addEventListener("keypress" , (e) => {
//     if(e.Key === "Enter"){
//         AddTask()
//     }
//     else{
        
//     }
// })


//adding date in todo
const getdate = () => {

    const date = new Date;
    let currDate = date.toLocaleDateString();
    console.log(currDate)
    
    const showdate = document.querySelector(".date");
    showdate.innerHTML = currDate;
}

const dateBtn = document.querySelector(".dateBtn");
dateBtn.addEventListener("click" , getdate)
