const display  = document.getElementById("display")

function clear () {
    display.innerText = "0";
}

function deleateLast () {
    if (display.innerText.length>1) {
        display.innerText = display.innerText.slice(0 , 1)
        
    } else {
        display.innerText = "0";
    }
}

function appendToDisplay(value) {
    if (display.innerText==="0"  && value!==".") {
        display.innerText = value;
    } else {
        display.innerText+= value;
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText)
    } catch  {
        display.innerText = "Error"
    }
}

