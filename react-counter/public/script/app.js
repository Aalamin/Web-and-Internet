"use strict";

var count = 0;

var add = function add() {
    count++;
    render();
};

var minus = function minus() {
    count--;
    render();
};

var render = function render() {
    var counterTemplate = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            count
        ),
        React.createElement(
            "button",
            { onClick: add },
            "+Add"
        ),
        React.createElement(
            "button",
            { onClick: minus },
            "-Minus"
        ),
        React.createElement(
            "button",
            null,
            "Reset"
        )
    );

    var myApp = document.querySelector("#my-app");

    ReactDOM.render(counterTemplate, myApp);
};

render();
