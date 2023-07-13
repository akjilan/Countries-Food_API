//load and display phone details:
const searchPhone = () => {
  const myINputField = document.getElementById("phoneInputField");
  const myINputFieldText = myINputField.value;
  loadphones(myINputFieldText);
};

// const findPhone = (phoneName) => {
//   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${phoneName}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => addPhoneDetails(data));
// };
// const addPhoneDetails = (phones) => {
//   const myDiv = document.getElementById("DetailsOfPhoneContainer");
//   myDiv.innerHTML = "";
//   for (const phone of phones) {
//     const newDiv = document.createElement("div");
//     newDiv.classList.add("col");
//     newDiv.innerHTML = `
//               <div  class="card">
//                 <img src="${meal.strMealThumb}" class="card-img-top text-center" alt="...">
//                 <div class="card-body">
//                   <h5 class="card-title text-center">${phone.brand}</h5>
//                   <h5 class="card-title text-center">${phone.phone_name}</h5>
//                 <p class="card-text text-center">${phone.slug}</p>
          
//                 </div>
        
//               </div>
//           `;
//     myDiv.appendChild(newDiv);
//   }
// };
//load and display phone
const loadphones = (phoneName) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${phoneName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhones(data.data));

  // const res = await fetch(url);
  // const data = res.json();
  // displayPhones(data.data);
};

const displayPhones = (phones) => {
  console.log(phones);
  const phoneContianer = document.getElementById("phone-container");
  phoneContianer.innerHTML='';
  phones.forEach((phone) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("col");
    newDiv.innerHTML = `
            <div  class="card pt-3" style="background-color: lightblue;">
              <div>
              <div class="text-center card-img"><img src="${phone.image}" class="card-img-top" alt="..."></div>
              <div class="card-body">
                <h5 class="card-title text-center">${phone.phone_name}</h5>
                <p class="card-text text-center">${phone.slug}</p>
              </div>
              </div>
            </div>
        `;
    phoneContianer.appendChild(newDiv);
  });
};
