//async await call to feth api data

function fetchdata(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("Promise");
            // resolve("data Of");
            reject("error defined");
        }, 1000)
    })
    return promise;
}

// async function _async(){
//      let data = await fetchdata();
//      console.log(data , "Successful");
// }

async function _async(){
    try{
        let data = await fetchdata();
        console.log(data, "successful");
    }
    catch(error){
        console.log(error,"error")
    }
}
 _async();

//Promise by amin
let promise = new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("New promise");
        resolve()
        // reject()
    }, 1000)
})

promise.then(function(){
    console.log("Promise Resolved first then");
    return 2;
})
.then(function(val){
    console.log("second then",val);
    return val+2;
})
.then(function(val2){
    console.log(val2);
})
.catch(function(error){
    console.log("Promised Error")
})

//simple manual promise approach by sir amir pinger
function success(){
  console.log("Success");
}
function failure(){
    console.log("Failure");
}
function checkPromise(userInput, success, failure){
    userInput == true ? success() : failure();
}

checkPromise(true, success, failure);


//userinput promise
function resolve(){
    console.log("promise resolved API");
}

function reject()
{
    console.log("Promisr reject API");
}
function checkUserInput(userInput){
    new Promise(function (resolve, reject){
        if(userInput){
            resolve();
        }
        else{
            reject();
        }
    })
}
checkUserInput(true);
// checkUserInput.then(resolve()).catch(reject());


//calling data from API using 
const anyFunction = () => {
    return Math.floor(Math.random() * 10) % 2 === 0 ? true : false;
};

const resolveFunction = () => console.log("Success Promise");
const rejectFunction = () => console.log("Reject Promise");

const result = new Promise((resolve, reject) => {
    setTimeout(() => {anyFunction() ? resolve() : reject()}, 1000);
});

result.then(resolveFunction).catch(rejectFunction);
console.log("Hello World");