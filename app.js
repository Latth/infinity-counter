var numberTop = document.getElementById('numberup');
var numberDown = document.getElementById('numberdown');
var number = document.getElementById('number');
var btnStart = document.getElementById('start')

var index1 = 0
var index2 = 1
var index3 = 2

function numberToplane(e){

    var speed = 1000;
    for(i=0; i<1; i++){
        index1++
        numberTop.innerHTML = index1
        index3++
        numberDown.innerHTML = index3
        index2++
        number.innerHTML = index2
    }

    setTimeout(numberToplane, speed);
    
    e.removeChild("click",numberToplane, true);
}

btnStart.addEventListener('click', numberToplane)

