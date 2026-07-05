//GET ELEMENTS
    const days = document.querySelector("#days");
    const hours = document.querySelector("#hours");
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");

    //WRITE FUNCTION TO UPDATE TIME
function updateTime() {
    const currentYear = new Date().getFullYear();
    const newYear = new Date(`january 1 ${currentYear+1} 00:00:00`)
    const currentDate = new Date();
    const difference = newYear-currentDate;
    
    //CALCULATE DAYS HOURS SECONDS MINUTES
    /* 1000ms = 1second;
    60seconds = 1minute;
    60minutes = 1hour;
    24hours = 1day; */
    const D = Math.floor(difference/1000/60/60/24);
    const H = Math.floor((difference/1000/60/60)%24);
    const M = Math.floor((difference/1000/60)%60);
    const S = Math.floor((difference/1000)%60);

    //ASSIGN VALUES
    days.innerHTML = D<10?"0"+D:D;
    hours.innerHTML = H<10?"0"+H:H;
    minutes.innerHTML = M<10?"0"+M:M;
    seconds.innerHTML = S<10?"0"+S:S;
}

//UPDATE TIME BY SECONDS
setInterval(updateTime, 1000);