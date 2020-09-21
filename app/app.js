// Making request to get data from the server

// const request = new XMLHttpRequest();
// console.log(request);

// This will not work in node environment

// Running it in browser
const request = new XMLHttpRequest();

// Let's add event handler to the request object to detect its different stages

// readystatechange must be in small letters
// request.addEventListener('readystatechange',()=>{
//     if(request.readyState === 4 && request.status === 200){
//         console.log(request , request.responseText);
//     }
//     else if(request.readyState === 4){
//         console.log('Could not fetch the data!');
//     }
// });



// Open a request to sent to the server
// request.open('GET','https://jsonplaceholder.typicode.com/todos/');

// Now send the opened request
// request.send();

// Let's add the above defined code to getTodos function
let getTodos = (cb)=>{
    request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4 && request.status === 200){
            cb(undefined, request.responseText);
        }
        else if(request.readyState === 4){
            cb('Could not fetch the data', undefined);
        }
    });

    //Open a request to sent to the server
    request.open('GET','https://jsonplacehoder.typicode.com/todos/');

    // Now send the opened request
    request.send();
}


getTodos((err, data)=>{
    console.log(`
The Error = ${err}\nThe data  = ${data}    
    `)
});

// Running it in browser End