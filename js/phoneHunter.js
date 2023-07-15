//display with mouse enter:
document
  .getElementById("phoneInputField")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      searchPhone();
    }
  });
//load and display phone details:
const searchPhone = () => {
  processSearch(10);
};

//load and display phone

const loadphones = async (phoneName, dataLimit) => {
  const spinnerId = document.getElementById("spinnerId");
  spinnerId.style.display = "block";
  const url = `https://openapi.programming-hero.com/api/phones?search=${phoneName}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data, dataLimit);
};
//display phones and filter:

const displayPhones = (phones, dataLimit) => {
  const showAllID = document.getElementById("showAllId");
  if (dataLimit && phones.length > 10) {
    phones = phones.slice(0, 10);
    showAllID.classList.remove("d-none");
  } else {
    showAllID.classList.add("d-none");
  }
  const warningText = document.getElementById("warning-noItemText");
  const spinnerId = document.getElementById("spinnerId");
  if (phones.length == 0) {
    warningText.style.display = "block";
    spinnerId.style.display = "none";
  } else {
    warningText.style.display = "none";
  }
  //set and append the card in html:
  const phoneContianer = document.getElementById("phone-container");
  phoneContianer.innerHTML = "";
  phones.forEach((phone) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("col");
    newDiv.innerHTML = `
              <div  class="card pt-3" style="background-color: lightblue;">
                <div>
                <div class="text-center card-img"><img src="${phone.image}" class="card-img-top" alt="..."></div>
                <div class="card-body text-center">
                  <h5 class="card-title text-center">${phone.phone_name}</h5>
                  <p class="card-text text-center">${phone.slug}</p>
                  <button onclick="loadPhoneDetails('${phone.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">See Details</button>
                 
                </div>
                </div>
              </div>
          `;
    phoneContianer.appendChild(newDiv);
    const spinnerId = document.getElementById("spinnerId");
    spinnerId.style.display = "none";
  });
};

//common function to search with limit:
function processSearch(dataLimit) {
  const myINputField = document.getElementById("phoneInputField");
  const myINputFieldText = myINputField.value;
  loadphones(myINputFieldText, dataLimit);
}

document
  .getElementById("showAllItemsButtonid")
  .addEventListener("click", function () {
    processSearch();
  });

//show details after clicking see details:

const loadPhoneDetails = async (code) => {
  const url = `https://openapi.programming-hero.com/api/phone/${code}`;
  const res = await fetch(url);
  const data = await res.json();
  showphoneDetails(data.data);
};

const showphoneDetails = (data) => {
  console.log(data);

  const modalTitle = document.getElementById("staticBackdropLabel");
  modalTitle.innerText=data.brand;
  const modalBOdyId = document.getElementById("modalBOdyId");
  modalBOdyId.innerHTML='';
  const newDiv = document.createElement("div");
  newDiv.innerHTML=`
    <div class="d-flex justify-content-center">
    <img  class="pt-1 img-fluid" src="${data.image}" alt="" />
    </div>
    <h3  class="py-2">${data.name}</h3>
    <p class="">${data.slug}</p>
    <p class="">${data.releaseDate?data.releaseDate:'no release date found'}</p>
    <p class="">${data.mainFeatures.chipSet?data.mainFeatures.chipSet:'no data found' }</p>
    <p class="">${data.mainFeatures.displaySize?data.mainFeatures.displaySize:'no data found'}</p>
  `
  newDiv.classList.add('py-5');
  modalBOdyId.appendChild(newDiv);
  


};
/////////////////////////
