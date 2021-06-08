let trafficLights = document.querySelectorAll('.trafficLight');
let upperCircle = document.querySelector('#trafficLight');
let middleCircle = document.querySelector('#trafficLight2');
let lowerCircle = document.querySelector('#trafficLight3');

for (let trafficLight of trafficLights) {
    trafficLight.addEventListener('click', function makeGreen() {
        upperCircle.style.background = ('green');
        middleCircle.style.background = ('black');
        lowerCircle.style.background = ('black')
        trafficLight.removeEventListener('click', makeGreen);
        trafficLight.addEventListener('click', function makeYellow() {
            upperCircle.style.background = ('black')
            middleCircle.style.background = ('yellow');
            lowerCircle.style.background = ('black');
            trafficLight.removeEventListener('click', makeYellow);
            trafficLight.addEventListener('click', function makeRed() {
                upperCircle.style.background = ('black')
                middleCircle.style.background = ('black');
                lowerCircle.style.background = ('red');
                trafficLight.removeEventListener('click', makeRed);
                trafficLight.addEventListener('click', makeGreen);
            });
        });
    });
}
