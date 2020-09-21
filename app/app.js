// Making request to get data from the server

// const request = new XMLHttpRequest();
// console.log(request);

// This will not work in node environment

// Running it in browser
const request = new XMLHttpRequest();

// Let's add event handler to the request object to detect its different stages

// readystatechange must be in small letters
request.addEventListener('readystatechange',()=>{
    if(request.readyState === 4){
        console.log(request.responseText);
    }
});

// Open a request to sent to the server
request.open('GET','https://jsonplaceholder.typicode.com/todos/');

// Now send the opened request
request.send();




// Running it in browser End