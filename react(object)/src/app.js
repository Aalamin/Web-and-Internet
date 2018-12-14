const person = {
    name: "Md. Mehedi Hasan",
    batch: "42nd",
    //home: "Bagerhat"
}


// conditonal rendering using arrow function
const getHomeTown = (hometown) => {
    if(hometown){
        return <p>Hometown: {hometown}</p>;
    }
    else{
        return;
    }
}


/*      {person.home && <p>Hometown: {person.home}</p>}  If we do not want to keep p tag

        <p>Hometown:{person.home ? person.home : "unknown"}</p>    If we want to keep p tag and 
                                                                   if there were both values 
                                                                   true or false                 
 */
const c = (
    <div>
        <h1>{person.name}</h1>
        <p>Batch: {person.batch}</p>
        {person.home && <p>Hometown: {person.home}</p>}
    </div>
    
);
const myApp = document.querySelector("#my-app");

ReactDOM.render(c, myApp);