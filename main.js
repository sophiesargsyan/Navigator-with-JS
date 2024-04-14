'use strict';
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