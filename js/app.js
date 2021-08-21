// Get All Buttons 
const memory16GB = document.getElementById('8gb-memory');
const memory8GB = document.getElementById('16gb-memory');
const storage256GB = document.getElementById('256gb-storage');
const storage512GB = document.getElementById('512gb-storage');
const storage1TB = document.getElementById('1tb-storage');
const freeDelivery = document.getElementById('free-delivery');
const expressDelivery = document.getElementById('express-delivery');
const apply = document.getElementById('apply');








// // Feature select and price update
// function systemUpdatePrice(system, extraCost) {
    
//     const systemCost = parseFloat(document.getElementById(system + '-cost').innerText = extraCost);
//     return systemCost;
// }
// // add all extra cost 
// function addExtraCost() {
    
    
//     // const totalPrice = parseFloat(document.getElementById('total-price').innerText);
//     // return totalPrice;
// }



// // features button clicked update price 
// // 8gb clicked 
// memory8GB.addEventListener('click', function () {
//     const updateSystemPrice = systemUpdatePrice('memory', '0');
//     const totalPrice = updateTotalPrice();
//     const updatedTotalPrice = updateSystemPrice + totalPrice;
//     document.getElementById('total-price').innerText = updatedTotalPrice;
    
//     // const extraPrice = extraPriceCalculate();
//     // const totalPrice = parseFloat(document.getElementById('total-price').innerText);
//     // const newTotalPrice = updatedPrice + totalPrice;
//     // console.log(newTotalPrice);
//     // document.getElementById('total-price').innerText = newTotalPrice;
// })

// // 16gb clicked
// sixteenGb.addEventListener('click', function () {
//     const updateSystemPrice = systemUpdatePrice('memory', '180');
//     const totalPrice = updateTotalPrice();
//     const updatedTotalPrice = updateSystemPrice + totalPrice;
//     document.getElementById('total-price').innerText = updatedTotalPrice;
    
// })

// // 256gb clicked 
// twoFiftySixGb.addEventListener('click', function () {
    
//     const updateSystemPrice = systemUpdatePrice('storage', '0');
//     const totalPrice = updateTotalPrice();
//     const updatedTotalPrice = updateSystemPrice + totalPrice;
//     document.getElementById('total-price').innerText = updatedTotalPrice;
// })

// // 512gb clicked 
// .addEventListener('click', function () {
    
//     const updateSystemPrice = systemUpdatePrice('storage', '100');
//     const totalPrice = updateTotalPrice();
//     const updatedTotalPrice = updateSystemPrice + totalPrice;
//     document.getElementById('total-price').innerText = updatedTotalPrice;
// })
// // 1TB clicked 
// .addEventListener('click', function () {
    
//     const updateSystemPrice = systemUpdatePrice('storage', '180');
//     const totalPrice = updateTotalPrice();
//     const updatedTotalPrice = updateSystemPrice + totalPrice;
//     document.getElementById('total-price').innerText = updatedTotalPrice;
// })
// // Aug 25 clicked 
// .addEventListener('click', function () {
    
//     const updateSystemPrice = systemUpdatePrice('delivery', '0');
//     const totalPrice = updateTotalPrice();
//     const updatedTotalPrice = updateSystemPrice + totalPrice;
//     document.getElementById('total-price').innerText = updatedTotalPrice;
// })
// // Aug 21 clicked 
// document.getElementById('aug-21').addEventListener('click', function () {
    
//     const updateSystemPrice = systemUpdatePrice('delivery', '20');
//     const totalPrice = updateTotalPrice();
//     const updatedTotalPrice = updateSystemPrice + totalPrice;
//     document.getElementById('total-price').innerText = updatedTotalPrice;
// })

















// Extra Price Calculation 
// function extraPriceCalculate() {
//     const totalPrice = parseFloat(document.getElementById('total-price').innerText);

// //     const featureUpgrade = systemUpdatePrice();
// //     // console.log(featureUpgrade);
// //     const bestPrice = parseFloat(document.getElementById('best-price').innerText);
// //     const totalPrice = featureUpgrade + bestPrice;
// //     const upgradedTotalPrice = document.getElementById('total-price').innerText = totalPrice;
// //     console.log(upgradedTotalPrice);
//     return totalPrice;
// }