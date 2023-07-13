// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(Response=>Response.json())
// .then(json=>console.log(json));

// one way

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())
//   .then(data => addList(data));

// function addList(data) {
//   document.getElementById("myButton").addEventListener("click", function () {
//     const myList = document.getElementById("myList");

//     for (const myData of data) {
//       const newList = document.createElement("li");
//       newList.innerText = myData.name;
//       myList.appendChild(newList);
//     // console.log(myData.name);
//     }
//   });
// }

/////////////////////////////////
//main way:

// function loadData(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())
//   .then(data => addList(data));
// }

// function addList(data){
//     const myList = document.getElementById("myList");
//     for (const myData of data) {
//         const newList = document.createElement("li");
//         newList.innerText = myData.name;
//         myList.appendChild(newList);
//       }

// }

///////////////////////////////////////

// function displayPost() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((data) => addAllPost(data));
// }
// displayPost();

// function addAllPost(data) {
//   const myDiv = document.getElementById("myPosts");
//   for (const myPost of data) {
//     const myNewDiv = document.createElement("div");
//     myNewDiv.classList.add('post');
//     myNewDiv.innerHTML = `
//         <h4>userid-${myPost.userId}</h4>
//         <h6>id-${myPost.id}</h6>
//         <h6>${myPost.title}</h6>
//         <p>${myPost.body}</p>

//     `;
//     myDiv.appendChild(myNewDiv);
//   }
// }

////////////////////////////////


//random user link: https://randomuser.me/api/?results/10

//rest countries: https://restcountries.com/v3.1/all
///////////////////////////////////////////////

// note:purotai array thakle mostly foreach use korbo..for of / map o use kora jabe..and object thakle dot ar array thakle index number dibo data get korar khetre..


/////////////////////////////
//countries getting:


const loadCountries = () =>{
    const url = 'https://restcountries.com/v3.1/all'
    fetch(url)
    .then(res=>res.json())
    .then(data=>getCountry(data))
}

const getCountry=(countries)=>{
    const divContainer = document.getElementById('div-container');
    for(const country of countries){
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <img class="text-center" src="${country.flags.png}" alt="" />
        <h4>name : ${country.name.common}</h4>
        <h4>population : ${country.population}</h4>
        <button onclick="loadCountryDetails('${country.cca2}')">details</button>
        
        `
        newDiv.classList.add('post');
        divContainer.appendChild(newDiv);
        // console.log(country);
    }
}

const loadCountryDetails = (code)=>{
    const myUrl = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(myUrl)
    .then(res=>res.json())
    .then(data=>loadDetails(data))
}
const loadDetails = (data)=>{
    const divContainer = document.getElementById('DetailsOfCountry');
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <img class="text-center" src="${data[0].flags.png}" alt="" />
    <h4>name : ${data[0].name.common}</h4>
    <h4>population : ${data[0].population}</h4>
    `
    divContainer.appendChild(newDiv);
    
    console.log(data[0]);
}

