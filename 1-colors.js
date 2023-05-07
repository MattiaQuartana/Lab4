const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("colorChanger");
const colorTxt = document.querySelector(".color");
const infoSection = document.querySelector(".information");

btn.addEventListener('click',function(){ /** anonymous function */
    console.log("Button clicked");
    
    // let randomIndex = getRandomNumber();

    // let randomRGB = "rgba("+ getRandomNumber()+ "," +getRandomNumber()+ ","+ getRandomNumber() + ")";
    let randomRGB = "#";
    for (let i = 0; i<6; i++){
        randomRGB += getRandomHexValue();
    }
    
    infoSection.style.backgroundColor = randomRGB;
    colorTxt.textContent = randomRGB;

    //infoSection.style.backgroundColor = colors[randomIndex];
    //colorTxt.textContent = colors[randomIndex];
})

/* function getRandomNumber(){

    //let result = Math.floor(Math.random()*colors.length);
    let result = Math.floor(Math.random()*256);
    console.log(result);
    return result;

} */

function getRandomHexValue(){
    let hexValues = "0123456789ABCDEF";
    let randomIndex = Math.floor(Math.random()*16);
    return hexValues[randomIndex];
}