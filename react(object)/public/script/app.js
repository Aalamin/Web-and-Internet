"use strict";

var person = {
    name: "Md. Mehedi Hasan",
    batch: "42nd"
    //home: "Bagerhat"


    // conditonal rendering using arrow function
};var getHomeTown = function getHomeTown(hometown) {
    if (hometown) {
        return React.createElement(
            "p",
            null,
            "Hometown: ",
            hometown
        );
    } else {
        return;
    }
};

/*      {person.home && <p>Hometown: {person.home}</p>}  If we do not want to keep p tag

        <p>Hometown:{person.home ? person.home : "unknown"}</p>    If we want to keep p tag and 
                                                                   if there were both values 
                                                                   true or false                 
 */
var c = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        person.name
    ),
    React.createElement(
        "p",
        null,
        "Batch: ",
        person.batch
    ),
    person.home && React.createElement(
        "p",
        null,
        "Hometown: ",
        person.home
    )
);
var myApp = document.querySelector("#my-app");

ReactDOM.render(c, myApp);
