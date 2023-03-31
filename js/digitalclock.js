function currenttime() {
    let theTime = new Date()

    let dayNum = theTime.getDay();
    let theHour = theTime.getHours(); 
    let theMinutes = theTime.getMinutes();
    let theSeconds = theTime.getSeconds();

    let theDay = ["Sun" , "Mon", "Tue", "Wed", "Thu" , "Fri", "Sat"];

    let AmPm = "Am"

    if (theHour >= 12) {
        AmPm = "Pm";
    
    }
    if (theHour > 12){
        theHour = theHour % 12
    
    }

    if(theHour < 10) {
        theHour = "0" + theHour;
    }
    if(theMinutes < 10) {
        theMinutes = "0" + theMinutes;
    }

    if(theSeconds < 10) {
        theSeconds = "0" + theSeconds;
    }
    document.getElementById("day").innerHTML = theDay[dayNum];
    document.getElementById("hour").innerHTML = theHour;
    document.getElementById("min").innerHTML = theMinutes;
    document.getElementById("second").innerHTML = theSeconds;
    document.getElementById("ampm").innerHTML = AmPm;


    let evenSeconds = theSeconds % 2;

    if(evenSeconds === 0) {
        document.getElementById("colon1").style.color = "red";
        document.getElementById("colon2").style.color = "red";
    }
    else {
        document.getElementById("colon1").style.color = 'black';
        document.getElementById("colon2").style.color = 'black';
    }
    
}

setInterval(() => {
    currenttime()
}, 1000);

currenttime()