function addItem(){
    const taskText = document.getElementById("taskTextbox").value;
    if (taskText === "") return;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("taskItem");

    let itemName = document.createElement("h4");
    itemName.innerText = taskText;
    itemName.classList.add("itemName");

    const delButton = document.createElement("button");
    delButton.innerText = "X";
    delButton.classList.add("deleteButton")
    delButton.addEventListener("click", function(){
        itemDiv.remove();
    });

    itemDiv.append(itemName, delButton);


    document.getElementById("itemView").append(itemDiv);
    document.getElementById("taskTextbox").value = "";
}

document.getElementById("addButton").onclick = addItem;