document.addEventListener("DOMContentLoaded", function () {
    // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const currentDay = new Date().getDay();

    // Create an array of day IDs
    const dayIds = ["sun", "mon", "tues", "wed", "thurs", "fri", "satur"];

    // Loop through the day elements and highlight the current day
    for (let i = 0; i < dayIds.length; i++) {
        if (i === currentDay) {
            document.getElementById(dayIds[i]).classList.add("highlight");
        }
    }
    function reclock(){
    const hr=document.querySelectorAll('.h');
    const mi=document.querySelectorAll('.m');
    const se=document.querySelectorAll('.s');
    const Txt=document.querySelector('.txt');

    var time=new Date();
    var hrs=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
    var txt="AM";
    if(hrs>12){
        hrs=hrs-12;
        txt="PM";
    }
    else if(hrs==0){
        hrs=12;
        txt="AM";
    }
    else if(hrs>=12){
        txt="PM";
    }
    hrs=hrs<10?"0"+hrs:hrs;
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;

    hrs=hrs.toString();
    hr[0].innerHTML=hrs[0];
    hr[1].innerHTML=hrs[1];
    min=min.toString();
    mi[0].innerHTML=min[0];
    mi[1].innerHTML=min[1];
    sec=sec.toString();
    se[0].innerHTML=sec[0];
    se[1].innerHTML=sec[1];
    Txt.innerHTML=txt;
}
setInterval(reclock);

function redate(){
    const Day=document.querySelector('.day');
    const Mon=document.querySelector('.mon');
    const Year=document.querySelector('.year');

    const date=new Date();
    var d=date.getDate();
    var m=date.getMonth();
    var y=date.getFullYear();

    d=d<10?'0'+d:d;
    m=m<10?'0'+m:m;

    Day.innerHTML=d;
    Mon.innerHTML=m;
    Year.innerHTML=y;
}

setInterval(redate);

function reMonth() {
    const currentMonth = new Date().getMonth();
    const monIds = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

    for (let i = 0; i < monIds.length; i++) {
        if (i === currentMonth) {
            // Set the color of the current month element to red (you can change this color as needed)
            document.getElementById(monIds[i]).style.color = " #ffeb33";
        }
    }
}

reMonth();

});




