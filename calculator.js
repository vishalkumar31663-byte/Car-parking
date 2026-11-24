const parkingLots = [
    { name: 'Shopping District', two: 20, four: 50 },
    { name: 'Railway Station Lot', two: 15, four: 40 },
    { name: 'Court Complex', two: 10, four: 30 },
    { name: 'Central Market', two: 25, four: 60 }
];

function calculateFee(rate, hours) {
    return rate * hours;
}

function customEstimate() {
    let choice = prompt('Choose a parking location:\n1. Shopping District\n2. Railway Station Lot\n3. Court Complex\n4. Central Market', '1');
    if (choice === null) return;
    choice = choice.trim();
    if (choice !== '1' && choice !== '2' && choice !== '3' && choice !== '4') {
        alert('Choose a location from 1 to 4.');
        return;
    }

    let vehicle = prompt('Vehicle type:\n1. Two-wheeler\n2. Four-wheeler', '2');
    if (vehicle === null) return;
    vehicle = vehicle.trim();
    if (vehicle !== '1' && vehicle !== '2') {
        alert('Choose 1 or 2 for the vehicle type.');
        return;
    }

    let input = prompt('Enter parking duration in hours (0.5 to 24):', '2');
    if (input === null) return;
    let hours = Number(input);
    if (!(hours >= 0.5 && hours <= 24)) {
        alert('Enter a valid duration from 0.5 to 24 hours.');
        return;
    }

    let lot = parkingLots[Number(choice) - 1];
    let rate = lot.two;
    let vehicleName = 'Two-wheeler';
    if (vehicle === '2') {
        rate = lot.four;
        vehicleName = 'Four-wheeler';
    }

    let total = calculateFee(rate, hours);
    alert('Parking fee estimate\n\nLocation: ' + lot.name + '\nVehicle: ' + vehicleName + '\nDuration: ' + hours + ' hours\nHourly rate: ₹' + rate + '\nEstimated total: ₹' + total.toFixed(2) + '\n\nDemo estimate only; this is not a booking.');
}
