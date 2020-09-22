// Learning fetch api

// Basics of how to use a fetch api
// fetch('https://jsonplaceholder.typicode.com/todos/')
// .then(response => {
//     // response.json() it will return a promise
//     // make it a child promise
//     return response.json();
// })
// .then(data => {console.log(data)})
// .catch(error => console.log(error));


// Using async and await to avoid chainning of promises that can happen when you use fetch


// That is a normal function
// const getTodos = ()=>{

// }

// Now with the addition of async. This function will return a promise
const getTodos = async ()=>{
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/');

    let data = await response.json();
    
    return data;
}

// Let's test it
getTodos()
.then(data => console.log(data))
.catch(err => console.log(err))

// Best way to fetch the data
// Basics of how to use a fetch api