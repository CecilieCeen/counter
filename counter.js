 /*Method 1

let theNumber = 0;

document.getElementById("minus").addEventListener("click", function(){
    theNumber--;
    document.getElementById("number").innerHTML = theNumber;
});

document.getElementById("plus").addEventListener("click", function(){
    theNumber++;
    document.getElementById("number").innerHTML = theNumber;
});

*/



const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
let numberCounter = document.getElementById("number");


let theNumber = 0;


function counterMinus(){
    theNumber--;
    numberCounter.innerHTML = theNumber;
};

function counterPlus(){
    theNumber++;
    numberCounter.innerHTML = theNumber;
}


minusBtn.addEventListener("click", counterMinus);
plusBtn.addEventListener("click", counterPlus);



