// async function asyncApi(){
//     const api = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     console.log(api, "API");
// }
// asyncApi();




// fetching data in json format 
// async function getApi(){
//     const api = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     console.log("api", api);
//     const json_api= await api.json();
//     console.log("json format", json_api);
// }

// getApi();


// sending data to server using fetch api of jsonplacehoder website 
async function getapi(){
 const api =await fetch('https://jsonplaceholder.typicode.com/posts',{
     method: 'POST',
     body:JSON.stringify({
         title:"Hira zahid",
         body:'My Resume',
         id:2
     }),
     headers:{
         'Content-type':'application/json; charset=UTF-8'
     }
 })
 console.log("API", api);
 const jsonformat =await api.json();
 console.log("Json data", jsonformat);
}

getapi();