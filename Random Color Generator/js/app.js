const getColor =()=>{
    // color codes are in hexCode
    const randomNumber = Math.floor(Math.random()*1677215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
    navigator.clipboard.writeText(randomCode);
}

document.getElementById("btn").addEventListener(
    "click",
    getColor
)
getColor();
