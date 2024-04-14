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