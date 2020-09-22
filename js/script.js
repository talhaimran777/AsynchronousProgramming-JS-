/* console.log("1");

setTimeout(() =>{
    console.log(2);
}, 5000 );

console.log("3"); */

// Just the pushing of master branch to github
// This is used as a call-back function
function greetings(name){
    console.log(`Wellcome ${name} to this great festival!`);
}


function introduction(firstName, lastName, callback){
    let fullName = null;

    fullName = `${firstName} ${lastName}`;
    callback(fullName);
}

introduction("Talha", "Imran", greetings);

/* Working on promises in java script */

const weather = true;
let promise = new Promise((resolve, reject) =>{
    if(weather){
        let dateDetails = {
            name: "Mcdonalds",
            location: "At Fortress ( Lahore )",
            table: 5,
        }

        resolve(dateDetails);
    }else{
        reject(new Error('Bad weather, so no Date'))
    }

    
});

console.log(promise);

promise.then((data) =>{
    console.log(data);
});

promise.catch((error) =>{
    console.log(error.message);
});