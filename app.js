const URL ="https://cat-fact.herokuapp.com/facts";
const factPara= document.querySelector("#fact");
const button= document.querySelector("#button");


// let Promise = fetch(URL);
// console.log(Promise);

const getFacts= async()=>{
    console.log("Getting your cat fact of the day....")
    let response = await fetch(URL); 
    console.log(response);//JSON format needs to be converted 
    let data = await response.json(); // converted format
    console.log(data[4].text);
    factPara.innerText = data[1].text;

}//async ends

//promise chain
// function getFacts(){
//     fetch(URL).then((response)=>{
//         return response.json();
//     }).then((data)=>{

//         console.log("getting cat data...")
//         factPara.innerText = data[1].text;

//     });
// }

button.addEventListener("click",getFacts);
