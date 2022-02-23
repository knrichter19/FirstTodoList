let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
savedTasks.forEach(addItem);

console.log(savedTasks);


function addItem(taskText){
    const item = document.createElement("li");
    item.classList.add("taskItem");

    let itemName = document.createElement("h4");
    itemName.innerText = taskText;
    itemName.classList.add("itemName");

    const delButton = document.createElement("button");
    delButton.innerText = "✖";
    delButton.classList.add("deleteButton")
    delButton.addEventListener("click", function(){
        item.remove();
        savedTasks.pop(taskText);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
    });

    item.append(itemName, delButton);

    document.getElementById("itemView").append(item);
}

document.getElementById("addButton").addEventListener("click", () => {
    const taskText = document.getElementById("taskTextbox").value;
    if (taskText === "") return;
    addItem(taskText);
    
    savedTasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));

    document.getElementById("taskTextbox").value = "";
});

