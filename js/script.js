/* alert("Async Programming"); */

/* 
    Async Programming in js  can be done using two ways
    ->  Old way ( By the use of callbacks ) 
    ->  New way ( By the use of promises )

*/
console.log("Start");
function logIn(email, password, callback){

    setTimeout(() => {
        console.log("We got the data");
        callback({userEmail: email, userPass: password});
    }, 5000);


 /*    setTimeout(() => {
        console.log("Now we get the data");
        return {userEmail: email, userPass: password};
    }, 0); */

    /* return {userEmail: email, userPass: password}; */
}


let userData = logIn("talhaimran284@gmail.com", "talha157", (user) =>{
    console.log(user.userEmail);
    console.log(user.userPass);
});

//console.log(userData);

console.log("End");