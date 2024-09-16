
window.addEventListener('DOMContentLoaded',function () {
let cat = "Potato";
cat = location.search.split('?').pop();

if(cat == 'Potato'){         
    let divs = document.querySelectorAll('.potatoLink');
    divs.forEach(div => div.classList.add('active'));
} else if (cat=='Soup') {    
    let divs = document.querySelectorAll('.soupLink');
    divs.forEach(div => div.classList.add('active'));
}
else if (cat=='Chicken') {    
    let divs = document.querySelectorAll('.chikenLink');
    divs.forEach(div => div.classList.add('active'));
} else if (cat=='Beef'){    
    let divs = document.querySelectorAll('.beefLink');
    divs.forEach(div => div.classList.add('active'));
} else {    
    let divs = document.querySelectorAll('.potatoLink');
    divs.forEach(div => div.classList.add('active'));
}
//console.log(cat);
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${cat}`)
.then((res)=>res.json())
.then((data) => displayMeal(data.meals))
.catch((err) => console.error('Error fetching data:', err));

const displayMeal = (data) => {    
    data.forEach((item, index) => {     
        let meal = `
        <div class="col-span-1">
        <div class="card bg-base-100 w-full h-96 shadow-xl rounded">
          <figure>
            <img src="${item.strMealThumb}" alt="Shoes" />
          </figure>
          <div class="card-body p-4">
            <h2 class="card-title">
              ${item.strMeal}             
            </h2>
            <p class="text-justify">${item.strInstructions.slice(0,100)}...    </p>            
          </div>
        </div>
      </div>   
        `;
        document.getElementById('mealsContainer').innerHTML += meal;
    });    
}
});