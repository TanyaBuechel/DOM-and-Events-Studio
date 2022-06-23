window.addEventListener("load", function() {

    const takeOffButton = document.getElementById('takeoff');
    const flightStatus = document.getElementById('flightStatus');
    const sBackground = document.getElementById('shuttleBackground');
    const sHeight = document.getElementById('spaceShuttleHeight');
    const down = document.getElementById('down');
    const imgObj = document.getElementById('rocket');
    const land = document.getElementById('landing');
    
    takeOffButton.addEventListener('click', function(){
        let result = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if(result){
            flightStatus.innerHTML='Shuttle in flight';
            sBackground.style.backgroundColor = 'blue';
            sHeight.innerHTML = 10000;
    }


    })

    land.addEventListener('click', function(){

    })

    down.addEventListener('click', function (){
        imgObj.style.position = 'absolute';
        let movement = imgObj.style.bottom = "10px";
        imgObj.style.bottom = movement;
        sHeight.innerHTML = parseInt(sHeight.innerHTML) - 10000;
    })

});