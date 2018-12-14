let count = 0;

const add = () => {
    count++;
    render();
}

const minus = () => {
    count--;
    render();
}

const render = () => {
        const counterTemplate = (
            <div>
                <h1>{count}</h1>
                <button onClick={add}>+Add</button>
                <button onClick={minus}>-Minus</button>
                <button>Reset</button>
            </div>
        );

        const myApp = document.querySelector("#my-app");

        ReactDOM.render(counterTemplate, myApp);
}

render();