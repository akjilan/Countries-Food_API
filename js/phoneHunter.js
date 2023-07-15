//load and display phone details:
const searchPhone = () => {
  const myINputField = document.getElementById("phoneInputField");
  const myINputFieldText = myINputField.value;
  loadphones(myINputFieldText);
};

//load and display phone
const loadphones = (phoneName) => {
    const spinnerId = document.getElementById('spinnerId');
    spinnerId.style.display = 'block';
  const url = `https://openapi.programming-hero.com/api/phones?search=${phoneName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhones(data.data));

  // const res = await fetch(url);
  // const data = res.json();
  // displayPhones(data.data);
};

const displayPhones = (phones) => {
  phones = phones.slice(0, 10);
  const warningText = document.getElementById("warning-noItemText");
  const spinnerId = document.getElementById('spinnerId');
  if (phones.length == 0) {
    warningText.style.display = "block";
    spinnerId.style.display = 'none';
  } else {
    warningText.style.display = "none";
  }

  const phoneContianer = document.getElementById("phone-container");
  phoneContianer.innerHTML = "";
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
    const spinnerId = document.getElementById('spinnerId');
    spinnerId.style.display = 'none';
  });
};
