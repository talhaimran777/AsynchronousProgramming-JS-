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
let getTodos = (resource)=>{

    // Let's convert this function to a promise

    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange',()=>{
            if(request.readyState === 4 && request.status === 200){
                resolve(request.responseText);
            }
            else if(request.readyState === 4){
                reject('Could not fetch the data');
            }
        });

        //Open a request to sent to the server
        // request.open('GET','https://jsonplaceholder.typicode.com/todos/');

        request.open('GET', resource);

        // Now send the opened request
        request.send();
    });
    
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


// Callback hell
// getTodos('./1.json', (err, data)=>{
//     console.log(data);

//     setTimeout(()=>{
//         getTodos('./2.json', (err, data)=>{
//             console.log(data);

//             setTimeout(()=>{
//                 getTodos('./3.json', (err, data)=>{
//                     console.log(data);
//                 });
//             }, 2000);
           
//         });
//     }, 2000);
    
// });
// Callback hell


// Basics of Promises
// let getSomething = ()=>{
//     return new Promise((resolve, reject)=>{

//         // In this callback function that is passed to the promise object
//         // you usaully make a request to the server for something
//         resolve('Got the data!');
//         // reject('Error in fetching the data');
//     });
// }

// getSomething().then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err);
// });

/* Call the promise function here */

// This is a bad way of writting promises code
// let's use chainning of promises
// getTodos('./1.json')
// .then( data =>  console.log(data))
// .catch( err => console.log(console.log(err)));

// getTodos('./2.json')
// .then( data =>  console.log(data))
// .catch( err => console.log(console.log(err)));

// getTodos('./3.json')
// .then( data =>  console.log(data))
// .catch( err => console.log(console.log(err)));


// Promise chainning Started
getTodos('./1.json')
.then(data => {
    console.log('Promise 1 resolved, ',data);
    // In order to start chainning the promise you have to return the child promise

    return getTodos('./2.json')
    .then(data => {
        console.log('Promise 2 resolved, ',data);

        return getTodos('./3.json')
        .then(data => {
            console.log('Promise 3 resolved, ',data);
        })
    })

    // That's how you chain promises to stay  away from callback hell
})

// This .catch method will fire for every promise mentioned above
.catch(err => console.log(err));
// Promise chainning Started End


// Basics of Promises End


// Running it in browser End