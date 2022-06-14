let destination = 42;
function distanceFromHqInBlocks(location) {
    return Math.abs(location - destination);
}

function distanceFromHqInFeet(location) {
    let blocks = distanceFromHqInBlocks(location);
    return blocks * 264
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(end - start) * 264;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (2 * (distance - 400)) / 100;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    }else {
        return "cannot travel that far"
    }
}