'use strict';
class Navigator {
    constructor(type, currentCoordinates) {
        this.type = type;
        this.currentCoordinates = currentCoordinates;
        this.destinationCoordinates = null;
        this.distance = null;
    }
  
    go() {
        const directions = ['right', 'left', 'straight'];
        const interval = setInterval(() => {
            if (this.distance > 0) {
                const direction = directions[Math.floor(Math.random() * directions.length)];
                console.log(`Move ${direction}`);
                this.distance -= 10 * this.type.speed;
            } else {
                clearInterval(interval);
                console.log('You have arrived');
            }
        }, 2000);
    }

    destinationTime() {
        if (!this.destinationCoordinates) {
            console.log('Please set destination coordinates first.');
            return;
        }
    
        const distance = this.calcDestination();
        const time = distance / this.type.speed;
        console.log(`Estimated travel time: ${time.toFixed(2)} hours`);
    }
  
    setDestinationCoordinates(destinationCoordinates) {
        this.destinationCoordinates = destinationCoordinates;
        this.distance = this.calcDestination();
    }
  
    calcDestination() {
        return Math.floor(Math.random() * (500 - 100 + 1) + 100);
    }
}

function promptForCoordinates() {
    const latitude = parseFloat(prompt("Enter latitude:"));
    const longitude = parseFloat(prompt("Enter longitude:"));
    return { latitude, longitude };
}

function promptForNavigationMethod() {
    const method = prompt("Choose navigation method: 'walk', 'car', or 'bike'");
    return method.toLowerCase();
}

const currentCoordinates = promptForCoordinates();
console.log("Current Coordinates:", currentCoordinates);

const destinationTime = parseFloat(prompt("Enter destination time in hours:"));
console.log("Destination Time:", destinationTime);

const destinationCoordinates = promptForCoordinates();
console.log("Destination Coordinates:", destinationCoordinates);

const navigationMethod = promptForNavigationMethod();