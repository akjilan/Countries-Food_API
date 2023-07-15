const searchFood = () => {
  const spinnerId = document.getElementById("spinnerId");
  spinnerId.style.display = "block";
  const myINputField = document.getElementById("inputField");
  const myINputFieldText = myINputField.value;
  findFood(myINputFieldText);
};

const findFood = (mealName) => {
  const mealContainer = document.getElementById("mealContainer");
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => addMealDetails(data));

};

// <h3>id meal is : ${meal.idMeal}</h3>
const addMealDetails = (myMeals) => {
  const myDiv = document.getElementById("mealContainer");
  myDiv.innerHTML = "";
  for (const meal of myMeals.meals) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("col");
    newDiv.innerHTML = `
            <div  class="card">
              <img src="${meal.strMealThumb
      }" class="card-img-top text-center" alt="...">
              <div class="card-body">
                <h5 class="card-title text-center">${meal.strMeal}</h5>
                <p class="card-text text-center">${meal.strInstructions.slice(
        0,
        200
      )}</p>
              </div>
              <button class="text-center btn btn-warning my-2" onclick="loadMealDetails('${meal.idMeal
      }')">See details</button>
            </div>
        `;
    myDiv.appendChild(newDiv);

    const spinnerId = document.getElementById("spinnerId");
    spinnerId.style.display = "none";
  }
};

const loadMealDetails = (code) => {
  const spinnerId = document.getElementById("spinnerId");
  spinnerId.style.display = "block";
  const dynamicUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${code}`;
  fetch(dynamicUrl)
    .then((res) => res.json())
    .then((data) => findMealDetals(data.meals[0]));
};

const findMealDetals = (mealDetails) => {
  const detailsContainer = document.getElementById("mealDetailsContainer");
  const newDiv = document.createElement("div");
  newDiv.classList.add("post");
  newDiv.innerHTML = `
  <h5>idmeal: ${mealDetails.idMeal}</h5>
  <h5 class="card-title text-center">${mealDetails.strMeal}</h5>
  <h5>catagory: ${mealDetails.strCategory}</h5>
  <h5>area: ${mealDetails.area}</h5>
  <p class="card-text text-center">${mealDetails.strInstructions.slice(
    0,
    300
  )}</p>
  `;
  detailsContainer.appendChild(newDiv);
  const spinnerId = document.getElementById("spinnerId");
  spinnerId.style.display = "none";
};
