const getcolor = () => {
    const randomnumber = Math.floor(Math.random() * 1677215);
    const randomcode = "#" + randomnumber.toString(16);
    // console.log(randomnumber, randomcode);
    document.body.style.backgroundColor=randomcode ;
    document.getElementById("colour-code").innerText = randomcode;

    navigator.clipboard.writeText(randomcode);
}

document.getElementById("btn").addEventListener(
    "click",
    getcolor
)

getcolor();