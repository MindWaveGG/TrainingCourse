let grocery1;
let grocery2;
let grocery3;

function calculateTotal() {
    grocery1 = parseFloat(document.getElementById('Grocery_1').value);
    console.log('Grocery 1: ', grocery1);
    grocery2 = parseFloat(document.getElementById('Grocery_2').value);
    console.log('Grocery 2: ', grocery2);
    grocery3 = parseFloat(document.getElementById('Grocery_3').value);
    console.log('Grocery 3: ',grocery3);
   
   let totalCost = grocery1 + grocery2 + grocery3;
   console.log('Total cost: ',totalCost);
   document.getElementById('result').innerText = `The total amount is: ${totalCost}`;
   }