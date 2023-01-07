// **AJAX -> Asynchronous Javascript and XML**
// It allows you to update the parts of a page without reloading the entire page
//-> you can recieve data from a server and can send data to  a server in the background
// 7 main  steps to an AJAX
//1-An event occurs on a webpage
//2-An XMLHTTP object is created by javascript
//3-An XMLHTTP object sends request to the web server
//4-Server processes the request
//5-Server sends the response back to the webpage also at the other server
//6-Response is read by JavaScript
//7-Page update is performed by the javascript

function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", 
    "https://crossorigin.me/http://carnes.cc/code.ajax_example.txt", true);
    xhttp.send();
}

// CORS: Cross Origin Resource Sharing
// CORS Proxy: allows us to bypass CORS error using a proxy server 
// that acts as a bridge between the client and the server
// Long  term solution to this cross origin error would be updating
// .htxs file on xyz.cc to allow cross-origin requests
// onreadystatechange defines a function to be called when the ready 
// state property changes
// readystate==0 -> the request not initialized
// readystate==1 -> server connection established
// readystate==2 -> request received
// readystate==3 -> processing requests
// readystate==4 -> request is finished and response os ready
// status is an HTML response
// status==200 -> okay,resource found on the server :)
// status==404 -> not found :(
// this.responseText -> returns the data as a string from the server
// this.responseXML -> returns XML
// .open() -> inside of it specify what file or resource we are requesting
// "GET" -> 
// "POST" -> if you are sending a large amount of data to the server or sending user input
// true -> whetther or not the request is asynchronous
// .send() -> actually send request to the server


//-----**JSON**-------
// JavaScript Object Notation ->  text only format -> canbe easily sent through a url
// Syntax for storing and exchanging data(between browser and server the data can only be text)
// Characteristics:
// Datais in name-value pairs, seperated by commas
// Curly braces hold objects
// Square brackets hold arrays
// JSON values must be of the following  datatypes string, number, JSON obj, Array, Boolean or null(cannot be a function, a date or undefined)

let myJSON = {
    "name": {
        "first": "Phatyyma",
        "last": "Ahmadd"
    },
    "age": 33,
    "skills": ["juggling",
    "baking", "singing"],
    "married": true,
    "superpowers": null
}

let stringfield = JSON.stringify(myJSON);
console.log(stringfield);

let stringJson = '{"name":"Phatyyma", "last": "Ahmadd", "kids": null}';
let myParse = JSON.parse(stringJson);
console.log(myParse);