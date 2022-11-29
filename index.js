function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42) 
}
function distanceFromHqInFeet(someValue) {
    return Math.abs((someValue - 42) * 264 )
}
function distanceTravelledInFeet(value1, value2) {
    return Math.abs((value1 - value2) * 264)
}
function calculatesFarePrice(start, destination) {
    const a = distanceTravelledInFeet(start, destination)
    if (400 > a) {
        return 0
    }
    else if (400 < a && a < 2000) {
        return (a-400) * 0.02
    }
    else if (2000 < a && a < 2500) {
        return 25
    }
    else if (a > 2500) {
        return "cannot travel that far"
    }
}