'use strict'
var Id = 999;

var allFood = [];
//var foodID = 5;
function Food(foodName, type, price, foodID){
    this.foodName = foodName;
    this.type = type;
    this.price = price;
    this.foodID = foodID;
    allFood.push(this)
};

Food.prototype.uniqueID = function(){
    this.foodID = Id + 1;
    Id++;
};

let main = document.getElementById(`main`);
let table = document.createElement('table');
main.appendChild(table);
let tr = document.createElement(`tr`);
table.appendChild(tr);
let idTh = document.createElement(`th`);
idTh.textContent = (`ID`);
tr.appendChild(idTh);
let nameTh = document.createElement(`th`);
nameTh.textContent = (`Name`);
tr.appendChild(nameTh);
let typeTh = document.createElement(`th`);
typeTh.textContent = (`Type`);
tr.appendChild(typeTh);
let priceTh = document.createElement(`th`);
priceTh.textContent = (`Price`);
tr.appendChild(priceTh);

Food.prototype.render = function (){
    let tr = document.createElement(`tr`);
    table.appendChild(tr);
    let idTd = document.createElement(`td`);
    idTd.textContent = (`${this.foodID}`);
    tr.appendChild(idTd);
    let nameTd = document.createElement(`td`);
    nameTd.textContent = (`${this.foodName}`);
    tr.appendChild(nameTd);
    let typeTd = document.createElement(`td`);
    typeTd.textContent = (`${this.type}`);
    tr.appendChild(typeTd);
    let priceTd = document.createElement(`td`);
    priceTd.textContent = (`${this.price}`);
    tr.appendChild(priceTd);

};

let form = document.getElementById(`form`);
form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    let name = event.target.fName.value;
    let type = event.target.fTypes.value;
    let price = event.target.price.value;
    // console.log(event);

    const newFood = new Food(name, type, price);
    newFood.uniqueID();
    newFood.render();
    console.log(newFood);
};
console.log(allFood);

// 'use strict'
// var ID = 5000;
// var render;
// const allFood = [];
// function Food(fIdValue, foodNameVal, foodTypeVal, priceVal) {
//     this.fId = fIdValue;
//     this.foodName = foodNameVal;
//     this.foodType = foodTypeVal;
//     this.price = priceVal;
//     this.uniqueId = function() {
//         this.fId = ID + 1;
//         ++ID;
//     };
//     allFood.push(this);
// };
// render.uniqueId()

// const main = document.getElementById('main')
// const table = document.createElement('table')
// main.appendChild(table);

// const tr = document.createElement('tr');
// table.appendChild(tr)

// const idTh = document.createElement('th');
// idTh.textContent = (`ID`);
// tr.appendChild(idTh);

// const nameTh = document.createElement('th');
// nameTh.textContent = (`Name`);
// tr.appendChild(nameTh);

// const typeTh = document.createElement('th');
// typeTh.textContent = (`Type`);
// tr.appendChild(typeTh);

// const priceTh = document.createElement(`th`);
// priceTh.textContent = (`Price`);
// tr.appendChild(priceTh);


//  Food.prototype.render = function () {
//     const tr = document.createElement('tr');
//     table.appendChild(tr);

//     const tdId = document.createElement('td');
//     tdId.textContent = (`${this.foodId}`);
//     tr.appendChild(tdId);
    
//     const tdName = document.createElement('td');
//     tdId.textContent = (`${this.foodName}`);
//     tr.appendChild(tdName);

//     const tdType = document.createElement('td');
//     tdId.textContent = (`${this.foodType}`);
//     tr.appendChild(tdType);

//     const tdPrice = document.createElement('td');
//     tdId.textContent = (`${this.price}`);
//     tr.appendChild(tdPrice);
    
    
// };

// for (let x = 0; allFood.length < x; x++) {
//     allFood[x].render();
// }

// let form = document.getElementById('form');
// form.addEventListener(`submit`, handleSubmit);

// function handleSubmit(event) {
//      event.preventDefault();

//     const name = event.target.fName.value;
//     const type = event.target.fTypes.value;
//     const price = event.target.price.value;
    
//     console.log(event);

//     const dish = new Food(name, type, price);
//     dish.render();
    
//     console.log(dish);

//  }

//  console.log(allFood);
  



