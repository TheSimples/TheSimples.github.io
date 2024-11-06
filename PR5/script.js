document.addEventListener('DOMContentLoaded', getMyLocation);

function getMyLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(dispayLocation);
    }
    else{
        alert("Oops, no geolocation support");
    }
}

function dispayLocation(positon){
    let latitude = positon.coords.latitude;
    let longitude = positon.coords.longtitude;
    let div = document.getElementById('location');
    div.innerHTML = `You are at Latitude: ${latitude}, Longitude: ${longitude}`;
}

function displayError(error){
    const errorTypes = {
        0: "Unknown error",
        1: "Permission denied by user",
        2: "position is not available",
        3: "Request timed out"
    };
    const errorMessage = errorTypes[error.code];
    if(error.code == 0 || error.code == 2){
        errorMessage = errorMessage + " " + error.message;
    }
    let div = document.getElementById("location");
    div.innerHTML = errorMessage;
}
