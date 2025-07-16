document.addEventListener('DOMContentLoaded', () => {
    const arrow = document.querySelector(".button1")
    const ticket = document.querySelector(".ticket")
    const bottom = document.querySelector(".bottom")
    arrow.addEventListener('click', (e) => {
        ticket.classList.toggle("close")
        bottom.classList.toggle("hidden")
        arrow.classList.toggle("close")
    })
    var date = new Date()

    if(date.getMonth()+1 >= 10){
        if(date.getDate() >= 10){
            if(date.getMinutes() >= 10 && date.getHours() >= 10){
                document.querySelector(".under-animation-attivato-il").textContent = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
                document.querySelector(".data-emesso-il").textContent = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
            }
            else if(date.getMinutes() < 10 && date.getHours() >= 10){
                document.querySelector(".under-animation-attivato-il").textContent = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:0${date.getMinutes()}`
                document.querySelector(".data-emesso-il").textContent = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:0${date.getMinutes()}`
            }
            else if(date.getMinutes() >= 10 && date.getHours() < 10){
                document.querySelector(".under-animation-attivato-il").textContent = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - 0${date.getHours()}:${date.getMinutes()}`
                document.querySelector(".data-emesso-il").textContent = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - 0${date.getHours()}:${date.getMinutes()}`
            }
            else {
                document.querySelector(".under-animation-attivato-il").textContent = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - 0${date.getHours()}:0${date.getMinutes()}`
                document.querySelector(".data-emesso-il").textContent = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - 0${date.getHours()}:0${date.getMinutes()}`
            }
        }
        else {
            if(date.getMinutes() >= 10 && date.getHours() >= 10){
                document.querySelector(".under-animation-attivato-il").textContent = `0${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
                document.querySelector(".data-emesso-il").textContent = `0${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
            }
            else if(date.getMinutes() < 10 && date.getHours() >= 10){
                document.querySelector(".under-animation-attivato-il").textContent = `0${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:0${date.getMinutes()}`
                document.querySelector(".data-emesso-il").textContent = `0${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:0${date.getMinutes()}`
            }
            else if(date.getMinutes() >= 10 && date.getHours() < 10){
                document.querySelector(".under-animation-attivato-il").textContent = `0${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - 0${date.getHours()}:${date.getMinutes()}`
                document.querySelector(".data-emesso-il").textContent = `0${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - 0${date.getHours()}:${date.getMinutes()}`
            }
            else {
                document.querySelector(".under-animation-attivato-il").textContent = `0${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - 0${date.getHours()}:0${date.getMinutes()}`
                document.querySelector(".data-emesso-il").textContent = `0${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - 0${date.getHours()}:0${date.getMinutes()}`
            }
        }
    }
    else {
        if(date.getDate() >= 10){
            if(date.getMinutes() >= 10 && date.getHours() >= 10){
                document.querySelector(".under-animation-attivato-il").textContent = `${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
                document.querySelector(".data-emesso-il").textContent = `${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
            }
            else if(date.getMinutes() < 10 && date.getHours() >= 10){
                document.querySelector(".under-animation-attivato-il").textContent = `${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:0${date.getMinutes()}`
                document.querySelector(".data-emesso-il").textContent = `${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:0${date.getMinutes()}`
            }
            else if(date.getMinutes() >= 10 && date.getHours() < 10){
                document.querySelector(".under-animation-attivato-il").textContent = `${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()} - 0${date.getHours()}:${date.getMinutes()}`
                document.querySelector(".data-emesso-il").textContent = `${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()} - 0${date.getHours()}:${date.getMinutes()}`
            }
            else {
                document.querySelector(".under-animation-attivato-il").textContent = `${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()} - 0${date.getHours()}:0${date.getMinutes()}`
                document.querySelector(".data-emesso-il").textContent = `${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()} - 0${date.getHours()}:0${date.getMinutes()}`
            }
        }
        else {
            if(date.getMinutes() >= 10 && date.getHours() >= 10){
                document.querySelector(".under-animation-attivato-il").textContent = `0${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
                document.querySelector(".data-emesso-il").textContent = `0${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
            }
            else if(date.getMinutes() < 10 && date.getHours() >= 10){
                document.querySelector(".under-animation-attivato-il").textContent = `0${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:0${date.getMinutes()}`
                document.querySelector(".data-emesso-il").textContent = `0${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:0${date.getMinutes()}`
            }
            else if(date.getMinutes() >= 10 && date.getHours() < 10){
                document.querySelector(".under-animation-attivato-il").textContent = `0${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()} - 0${date.getHours()}:${date.getMinutes()}`
                document.querySelector(".data-emesso-il").textContent = `0${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()} - 0${date.getHours()}:${date.getMinutes()}`
            }
            else {
                document.querySelector(".under-animation-attivato-il").textContent = `0${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()} - 0${date.getHours()}:0${date.getMinutes()}`
                document.querySelector(".data-emesso-il").textContent = `0${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()} - 0${date.getHours()}:0${date.getMinutes()}`
            }
        }
    }

    var countDownDate = new Date(date.getTime() + 29*60000);
    var width = 100

    setInterval(function() {
        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector(".time-remaining").textContent = "00" + ":"
            + minutes + ":" + seconds;

        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".time-remaining").textContent = " EXPIRED ";
        }

        width -= 0.08
        document.querySelector(".inner-progress-bar").style.width = `${width}%`;
    }, 1000);

})