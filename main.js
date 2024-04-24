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
class WalkingNavigator extends Navigator {
    constructor(currentCoordinates) {
        super({ speed: 5 }, currentCoordinates);
    }
}
  
class CarNavigator extends Navigator {
    constructor(currentCoordinates) {
        super({ speed: 60 }, currentCoordinates);
    }
}
  
class BicycleNavigator extends Navigator {
    constructor(currentCoordinates) {
        super({ speed: 20 }, currentCoordinates);
    }
}

let navigator;
switch (navigationMethod) {
    case 'walk':
        navigator = new WalkingNavigator(currentCoordinates);
        break;
    case 'car':
        navigator = new CarNavigator(currentCoordinates);
        break;
    case 'bike':
        navigator = new BicycleNavigator(currentCoordinates);
        break;
    default:
        console.log("Invalid navigation method. Please choose 'walk', 'car', or 'bike'.");
        break;
}

if (navigator) {
    navigator.setDestinationCoordinates(destinationCoordinates);
    navigator.destinationTime();
    navigator.go();
}
