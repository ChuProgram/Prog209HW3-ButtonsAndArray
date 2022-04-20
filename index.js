
let origArray = [2,3,4];

document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById("box1").value = origArray[0];
    document.getElementById("box2").value = origArray[1];
    document.getElementById("box3").value = origArray[2];

    document.getElementById("cubeBtn").addEventListener("click", (function() { 
        let newArray = origArray.map(toCube);

        document.getElementById("box1").value = newArray[0];
        document.getElementById("box2").value = newArray[1];
        document.getElementById("box3").value = newArray[2];
    }))

    document.getElementById("powerBtn").addEventListener("click", (function() { 
        let newArray = origArray.map(toPower);

        document.getElementById("box1").value = newArray[0];
        document.getElementById("box2").value = newArray[1];
        document.getElementById("box3").value = newArray[2];
    }))

})

function squareFunc() {
    let newArray = origArray.map(toSquare);

    document.getElementById("box1").value = newArray[0];
    document.getElementById("box2").value = newArray[1];
    document.getElementById("box3").value = newArray[2];
}

function toSquare(value) {
    return Math.pow(value, 2);
}

// anonymous function
let toCube = function(value) {
    return Math.pow(value, 3);
}

function toPower(value) {
    return Math.pow(value, 4);
}