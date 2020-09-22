// Learning fetch api

// Basics of how to use a fetch api
fetch('https://jsonplaceholder.typicode.com/todos/')
.then(response => {
    // response.json() it will return a promise
    // make it a child promise
    return response.json();
})
.then(data => {console.log(data)})
.catch(error => console.log(error));

// Best way to fetch the data
// Basics of how to use a fetch api