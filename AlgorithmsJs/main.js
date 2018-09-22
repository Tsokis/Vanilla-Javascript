
// -------------TEST------------- 
/*let arrayB = ['john', 'nik', 'kiss'];
let op = '';
for (i = 0; i < arrayB.length; i++) {
    op = arrayB;

} */
//Another way to pass css class through javascript
//document.getElementById("myDIV").className = "mystyle";


//                                      ALGORITHMS WITH JAVASCRIPT
//----------------------IMAGES SLIDES--------------------------------------------------------------
var i = 0;
var images = [];
var time = 3000;
//image list
images[0] = 'image1.jpg';
images[1] = 'image2.jpg';
images[2] = 'image3.jpg';

//change image 
function changeImg() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImg()', time);
}

window.onload = changeImg;

//--------------------ADD-EVENTS--------------------------------------------------------------------

let input = document.getElementById("input");
input.addEventListener("keyup", readInput);

let output = document.getElementById("output");
document
    .getElementById("button")
    .addEventListener("click", checkIfPalindrome);
// changes bg color on div
let display = document.getElementById("display");
document
    .getElementById("changeBackGroundColor")
    .addEventListener("click", changeBackground);
//changes background color

document.getElementById('BgColorChange').addEventListener('click', changeBackGroundColor);



//-------------------ALGORITHMS-------------------------------------------------------------

//reverse string function
function readInput() {
    let input = document.getElementById("input").value.toLowerCase();
    let reverseString = input
        .split("")
        .reverse()
        .join("");
    output.innerHTML = reverseString;
}

// palindrome function
function checkIfPalindrome() {  

    let strPassed = document
        .getElementById("checkPalindrome")
        .value.toLowerCase();
    let revString = strPassed
        .split("")
        .reverse()
        .join("");
    
    //document.body.setAttribute('class', 'testclass');
    if (strPassed === '' ) {
        display.innerHTML = '<h4>Enter a string please!</h4>';
    } else {
         if (strPassed === revString) {
             display.innerHTML = "<h4>It's a palindrome</h4>" + strPassed;
         } else {
             return (display.innerHTML = "<h5>It's not a palindrome</h5>");
         }
        
    }
}

//-----------------Background Change-------------------------------------------------------
// change background color on the div of palindrome function
function changeBackground() {
    
    document.getElementById("changeBackGroundColor").style.backgroundColor =
        "lightgrey";
}
//-----------------------------------------------------------------------------------------



// CHange background color on button click and adding  css class
function changeBackGroundColor() {
    
    
    document.body.style.backgroundColor =
        "#2c7e87";
     document.body.setAttribute('class', 'note');    
   
    } 
    


//---------------------ANIMATION FUNCTIONS------------------------------------------------------

// brake chain animation
function brakeChain() {
    let chain = document.getElementById('chain');
    chain.innerHTML = "&#xf0c1";

    setTimeout(function () {
        chain.innerHTML = '&#xf127';
    }, 1000);
}
//call animation
brakeChain();

//animate every 2 seconds
setInterval(brakeChain, 2000);

//battery charge animation
function chargeBattery() {
    let battery = document.getElementById('battery');
    battery.innerHTML = "&#xf244";
    setTimeout(function () {
        battery.innerHTML = "&#xf243";
    }, 1000);
    setTimeout(function () {
        battery.innerHTML = "&#xf242";
    }, 2000);
    setTimeout(function () {
        battery.innerHTML = "&#xf241";
    }, 3000);
    setTimeout(function () {
        battery.innerHTML = "&#xf240";
    }, 4000);
}

//call animation
chargeBattery();

//run every  5 seconds
setInterval(chargeBattery, 5000);


//Hourglass animation
function hourglass() {
    let hourglass = document.getElementById('hourglass');
    hourglass.innerHTML = '&#xf251';
    setTimeout(function () {
        hourglass.innerHTML = '&#xf252';
    }, 1000);
    setTimeout(function () {
        hourglass.innerHTML = '&#xf253';
    }, 2000);
}

//hourglass animation call
hourglass();
//run animation every 3 seconds
setInterval(hourglass, 3000);