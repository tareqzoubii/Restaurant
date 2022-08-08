'use strict'
var firstId = 5000;
var render;
const allFood = [];
function Food(fIdValue, foodNameVal, foodTypeVal, priceVal) {
    this.foodId = fIdValue;
    this.foodName = foodNameVal;
    this.foodType = foodTypeVal;
    this.price = priceVal;
    this.uniqueId = function() {
        this.foodId = firstId + 1;
        ++firstId;
    }
    allFood.push(this);
};

const main = document.getElementById('main')
const table = document.createElement('table')
main.appendChild(table);

const tr = document.createElement('tr');
table.appendChild(tr)

const idTh = document.createElement('th');
idTh.textContent = (`ID`);
tr.appendChild(idTh);

const nameTh = document.createElement('th');
nameTh.textContent = (`Name`);
tr.appendChild(nameTh);

const typeTh = document.createElement('th');
typeTh.textContent = (`Type`);
tr.appendChild(typeTh);

const priceTh = document.createElement(`th`);
priceTh.textContent = (`Price`);
tr.appendChild(priceTh);


 Food.prototype.render = function () {
    const tr = document.createElement('tr');
    table.appendChild(tr);

    const tdId = document.createElement('td');
    tdId.textContent = (`${this.foodId}`);
    tr.appendChild(tdId);
    
    const tdName = document.createElement('td');
    tdId.textContent = (`${this.foodName}`);
    tr.appendChild(tdName);

    const tdType = document.createElement('td');
    tdId.textContent = (`${this.foodType}`);
    tr.appendChild(tdType);

    const tdPrice = document.createElement('td');
    tdId.textContent = (`${this.price}`);
    tr.appendChild(tdPrice);
};

 for (let x = 0; allFood.length < x; x++) {
     allFood[x].render();
 }

let form = document.getElementById('form');
form.addEventListener(`submit`, handleSubmit);

function handleSubmit(event) {
     event.preventDefault();

     const name = event.target.fName.value;
      const type = event.target.fTypes.value;
      const price = event.target.price.value;
      const fID = event.timeStamp.value;
      

    console.log(event);
    const dish = new Food(name, type, price);
  dish.render();
  console.log(dish);

 }

 console.log(allFood);
  



