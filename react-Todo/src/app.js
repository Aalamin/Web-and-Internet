let items = ["go the shop", "buy some clothes", "watch movie"];


const handleAdd = (item) => {
    item.preventDefault();
    const val = item.target.elements.task.value;
    if(val){
        document.querySelector("#new-item").innerHTML= "";
        items.push(val);
        item.target.elements.task.value="";
        render();
    }
    else{
        document.querySelector("#new-item").innerHTML= "No Entry!!";
    }
}

const handleClear =() => {
    items =[];
    render();
}

const render = () => {
    const todoTemplate = (
        <div>
            <h1> Todo App</h1>
            <form onSubmit = {handleAdd}>
                <input type = "text" name = "task"/>
                <button>Add</button>
            </form>
            <p id ="new-item"></p>
            <button onClick={handleClear} disabled ={items.length ===0 ? true : false}>Clear</button>
            <ol>
                {items.map(item => <li key = {item}>{item}</li>)}
            </ol>
        </div>
    );  
    
    const myApp = document.querySelector("#hook");
    ReactDOM.render(todoTemplate, myApp);
}

render();
