// Making request to get data from the server

// const request = new XMLHttpRequest();
// console.log(request);

// This will not work in node environment

// Running it in browser


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
let getTodos = (link , cb)=>{
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4 && request.status === 200){
            return cb(undefined, request.responseText);
        }
        else if(request.readyState === 4){
            return cb('Could not fetch the data', undefined);
        }
    });

    //Open a request to sent to the server
    // request.open('GET','https://jsonplaceholder.typicode.com/todos/');

    request.open('GET', link);

    // Now send the opened request
    request.send();
}


// getTodos((err, data)=>{
// //     console.log(`
// // The Error = ${err}\nThe data  = ${data}    
// //     `);

//     // Convert the data from the server to js array with objects

//     // console.log(JSON.parse(data));
//     let result = JSON.parse(data);

//     // Let's print the first object in the array
//     console.log(result);

//     // Access result[0].title property
//     // console.log(result[0].title);
// });



getTodos('./1.json', (err, data)=>{
    console.log(data);

    getTodos('./2.json', (err, data)=>{
        console.log(data);

        getTodos('./3.json', (err, data)=>{
            console.log(data);
        });
    });
});

// Running it in browser End