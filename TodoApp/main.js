var items = ["Go to University", "Buy some clothes", "Clean my desktop", "Rearrange my program"];

function attachItems(items){
    var ul = document.querySelector(".item-list");
    for(var i = 0; i < items.length; i++){
        var li = makeListItem(items[i]);
        ul.appendChild(li);
    }
}

function makeListItem(text){
    var li = document.createElement("li");

    var a = document.createElement("a");
    a.href = "#";
    a.innerHTML = "x";
    a.onclick = function(){
        deleteItem(this);
    };

    var textNode = document.createTextNode(text);
    li.appendChild(a);
    li.appendChild(textNode);
    return li;
}


/*=>=>=> clear list items while saving <=<=<=*/
function ulClear(){
    var itemList = document.querySelector(".item-list");
    itemList.innerHTML = "";
}

function handleClickEvent(){
    var inputItem = document.querySelector("#new-item");
    var val = inputItem.value;
    if(val){
    document.querySelector(".msg").innerHTML = "";  /*=>=>=> clear notification field <=<=<=*/ 
    items.push(val);
    ulClear();
    attachItems(items);
    inputItem.value = '';  /*=>=>=> clear input field after saving <=<=<=*/
    }
    else{
        document.querySelector(".msg").innerHTML = "Invalid Entry";
    }
}

function deleteItem(anchor) {
    var item = anchor.parentNode.lastChild.textContent;
    var index = items.indexOf(item);
    if(index !== -1) {
        items.splice(index, 1);
        ulClear();
        attachItems(items);
    }
    console.log(index);
}

document.querySelector("#add-button").addEventListener("click", handleClickEvent);

attachItems(items);
