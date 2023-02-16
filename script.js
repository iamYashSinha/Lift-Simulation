
// -----------------Declearation ---------------------//

var thirdFD = document.getElementById("thirdFD");
var secondFD = document.getElementById("secondFD");
var firstFD = document.getElementById("firstFD");
var groundFD = document.getElementById("groundFD");
var lift = document.getElementById("LiftHolder");
var closeDoorLift = document.getElementById("closeDoorLift");
var openDoorLift = document.getElementById("openDoorLift");
const groundF = "0vh";
const firstF = "25vh";
const secondF = "50vh";
const thirdF = "75vh";
var bool = 0;
var queuePos = [];
var queuefloor = [];




function makeRequest(butLoc, floor)
{
    if (butLoc == 0) {
        console.log("Button pressed inside lift");
        var liftLocation = isStoped();
        if (liftLocation == 0) {

            // Code for handling the moving lift condition...
            console.log("hey");
            if(returnVHValue(floor) != parseInt(lift.style.bottom)){
                queuefloor.push(floor);
                queuePos.push(butLoc);
                console.log("Pushed");
            }
            else{
                console.log("Not Pushed");
            }

        }
        else{
            switch (liftLocation) {
                case 1:
                    if (floor == liftLocation) {
                        // open Door.
                        openDoor();
                        setTimeout(function () {
                            closeDoor();
                        }, 1000)
                    }
                    else {
                        switch (floor) {
                            case 2:
                                setTimeout(function () {
                                    moveLift(firstF);
                                }, 1000)
                                closeDoor();
                                break;
                            case 3:
                                setTimeout(function () {
                                    moveLift(secondF);
                                }, 1000);
                                closeDoor();
                                break;
                            case 4:
                                setTimeout(function () {
                                    moveLift(thirdF);
                                }, 1000)
                                closeDoor();
                                break;
                            default:
                                console.log("Something Went Wrong under Inner Switch")
                        }
                    }
                    break;

                case 2:
                    if (floor == liftLocation) {
                        // open Door.
                        openDoor();
                        setTimeout(function () {
                            closeDoor();
                        }, 1000)
                    }
                    else {
                        switch (floor) {
                            case 1:
                                setTimeout(function () {
                                    moveLift(groundF);
                                }, 1000);
                                closeDoor();
                                break;
                            case 3:
                                setTimeout(function () {
                                    moveLift(secondF);
                                }, 1000);
                                closeDoor();
                                break;
                            case 4:
                                setTimeout(function () {
                                    moveLift(thirdF);
                                }, 1000)
                                closeDoor();
                                break;
                            default:
                                console.log("Something Went Wrong under Inner Switch")
                        }
                    }
                    break;

                case 3:
                    if (floor == liftLocation) {
                        // open Door.
                        openDoor();
                        setTimeout(function () {
                            closeDoor();
                        }, 1000)
                    }
                    else {
                        switch (floor) {
                            case 1:
                                setTimeout(function () {
                                    moveLift(groundF);
                                }, 1000);
                                closeDoor();
                                break;
                            case 2:
                                setTimeout(function () {
                                    moveLift(firstF);
                                }, 1000)
                                closeDoor();
                                break;
                            case 4:
                                setTimeout(function () {
                                    moveLift(thirdF);
                                }, 1000)
                                closeDoor();
                                break;
                            default:
                                console.log("Something Went Wrong under Inner Switch")
                        }
                    }
                    break;

                case 4:
                    if (floor == liftLocation) {
                        // open Door.
                        openDoor();

                        setTimeout(function () {
                            closeDoor();
                        }, 1000)
                    }
                    else {
                        switch (floor) {
                            case 1:
                                setTimeout(function () {
                                    moveLift(groundF);
                                }, 1000);
                                closeDoor();
                                break;
                            case 2:
                                setTimeout(function () {
                                    moveLift(firstF);
                                }, 1000)
                                closeDoor();
                                break;
                            case 3:
                                setTimeout(function () {
                                    moveLift(secondF);
                                }, 1000)
                                closeDoor();
                                break;
                            default:
                                console.log("Something Went Wrong under Inner Switch")
                        }
                    }
                    break;

                default:
                    console.log("Something Went Wrong");
            }
        }

    }
    else {

        var liftLocation = isStoped();
        if (liftLocation == 0) {

            // Code for handling the moving lift condition...
            console.log(lift.style.bottom);
            if(returnVHValue(floor) != parseInt(lift.style.bottom)){
                queuefloor.push(floor);
                queuePos.push(butLoc);   
                console.log("Pushed");
            }
            else{
                console.log("Not Pushed");
            }

        }
        else {
            switch (liftLocation) {
                case 1:
                    if (floor == liftLocation) {
                        // open Door.
                        openDoor();
                        setTimeout(function () {
                            closeDoor();
                        }, 1000)
                    }
                    else {
                        switch (floor) {
                            case 2:
                                setTimeout(function () {
                                    moveLift(firstF);
                                }, 1000)
                                closeDoor();
                                break;
                            case 3:
                                setTimeout(function () {
                                    moveLift(secondF);
                                }, 1000);
                                closeDoor();
                                break;
                            case 4:
                                setTimeout(function () {
                                    moveLift(thirdF);
                                }, 1000)
                                closeDoor();
                                break;
                            default:
                                console.log("Something Went Wrong under Inner Switch")
                        }
                    }
                    break;

                case 2:
                    if (floor == liftLocation) {
                        // open Door.
                        openDoor();
                        setTimeout(function () {
                            closeDoor();
                        }, 1000)
                    }
                    else {
                        switch (floor) {
                            case 1:
                                setTimeout(function () {
                                    moveLift(groundF);
                                }, 1000);
                                closeDoor();
                                break;
                            case 3:
                                setTimeout(function () {
                                    moveLift(secondF);
                                }, 1000);
                                closeDoor();
                                break;
                            case 4:
                                setTimeout(function () {
                                    moveLift(thirdF);
                                }, 1000)
                                closeDoor();
                                break;
                            default:
                                console.log("Something Went Wrong under Inner Switch")
                        }
                    }
                    break;

                case 3:
                    if (floor == liftLocation) {
                        // open Door.
                        openDoor();
                        setTimeout(function () {
                            closeDoor();
                        }, 1000)
                    }
                    else {
                        switch (floor) {
                            case 1:
                                setTimeout(function () {
                                    moveLift(groundF);
                                }, 1000);
                                closeDoor();
                                break;
                            case 2:
                                setTimeout(function () {
                                    moveLift(firstF);
                                }, 1000)
                                closeDoor();
                                break;
                            case 4:
                                setTimeout(function () {
                                    moveLift(thirdF);
                                }, 1000)
                                closeDoor();
                                break;
                            default:
                                console.log("Something Went Wrong under Inner Switch")
                        }
                    }
                    break;

                case 4:
                    if (floor == liftLocation) {
                        // open Door.
                        openDoor();

                        setTimeout(function () {
                            closeDoor();
                        }, 1000)
                    }
                    else {
                        switch (floor) {
                            case 1:
                                setTimeout(function () {
                                    moveLift(groundF);
                                }, 1000);
                                closeDoor();
                                break;
                            case 2:
                                setTimeout(function () {
                                    moveLift(firstF);
                                }, 1000)
                                closeDoor();
                                break;
                            case 3:
                                setTimeout(function () {
                                    moveLift(secondF);
                                }, 1000)
                                closeDoor();
                                break;
                            default:
                                console.log("Something Went Wrong under Inner Switch")
                        }
                    }
                    break;

                default:
                    console.log("Something Went Wrong");
            }
        }
    }
}


// -------------------Check if lift is steady or not--------------------//
// ------------------ Return 0 if moving -------------------------------//
// ------------------ Return floor number if steadty -------------------------------//

function isStoped() //Pass the location where to chaeck that is left reached there or not
{
    var leftLoc = parseInt(window.getComputedStyle(lift, null).getPropertyValue("bottom"));
    var floor1 = parseInt(window.getComputedStyle(groundFD, null).getPropertyValue("bottom"));
    var floor2 = parseInt(window.getComputedStyle(firstFD, null).getPropertyValue("bottom"));
    var floor3 = parseInt(window.getComputedStyle(secondFD, null).getPropertyValue("bottom"));
    var floor4 = parseInt(window.getComputedStyle(thirdFD, null).getPropertyValue("bottom"));
    if (leftLoc == floor1) {
        console.log("Lift is on Ground Floor");
        return 1;
    }
    else if (leftLoc == floor2) {
        console.log("Lift is on First Floor");
        return 2;
    }
    else if (leftLoc == floor3) {
        console.log("Lift is on Second Floor");
        return 3;
    }
    else if (leftLoc == floor4) {
        console.log("Lift is on Third Floor");
        return 4;
    }
    else {
        console.log("Lift is Moving");
        return 0;
    }
}


// ------------------Move Lift To specified Floor --------------------//

function moveLift(temp) {
    lift.style.bottom = temp;
    setTimeout(openDoor, 2000);
    setTimeout(closeDoor, 4000);
    setTimeout(function(){
        if(typeof(queuefloor[0]) == "undefined"){
            console.log("Sucess")
        }
        else{
            makeRequest(queuePos.shift(),queuefloor.shift());
        }
    },4000)
}

function openDoor() {
    closeDoorLift.style.opacity = "0";
    setTimeout(function () {
        closeDoorLift.style.visibility = "hidden";
        closeDoorLift.style.display = "none";
        openDoorLift.style.display = "block";
        openDoorLift.style.visibility = "visible";
        setTimeout(function () {
            openDoorLift.style.opacity = "1";
        }, 250);

    }, 250);
    console.log("Door Opened");
}

function closeDoor() {

    openDoorLift.style.opacity = "0";
    setTimeout(function () {
        openDoorLift.style.visibility = "hidden";
        openDoorLift.style.display = "none";
        closeDoorLift.style.display = "block";
        closeDoorLift.style.visibility = "visible";
        setTimeout(function () {
            closeDoorLift.style.opacity = "1";
        }, 250);
    }, 250);
    console.log("Door Closed");
}

function returnVHValue(f){
    switch(f){
        case 1:
        return 0;
        break;
        case 2:
        return 25;
        break;
        case 3:
        return 50;
        break;
        case 4:
        return 75;
        break;
    }
}