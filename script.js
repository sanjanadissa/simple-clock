const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand'); 
function setdate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees= ((seconds/60)*360)+90;

    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const minuts = now.getMinutes();
    const thirdDegree = ((minuts/60)*360)+90;
    minHand.style.transform = `rotate(${thirdDegree}deg)`;

    const hour = now.getHours();
    const hourDegree = ((hour/12)*360)+90;
    hourHand.style.transform= `rotate(${hourDegree}deg)`;

}

setInterval(setdate,1000);