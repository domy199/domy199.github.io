document.addEventListener('DOMContentLoaded', () => {
    const arrow = document.querySelector(".button1");
    const ticket = document.querySelector(".ticket");
    const bottom = document.querySelector(".bottom");

    // Toggle al click sulla freccia
    arrow.addEventListener('click', () => {
        ticket.classList.toggle("close");
        bottom.classList.toggle("hidden");
        arrow.classList.toggle("close");
    });

    // Funzione per zero-padding
    const pad = n => String(n).padStart(2, '0');

    // Imposta data e ora di attivazione
    const now = new Date();
    const day = pad(now.getDate());
    const month = pad(now.getMonth() + 1);
    const year = now.getFullYear();
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());

    const dateTime = `${day}/${month}/${year} - ${hours}:${minutes}`;

    document.querySelector(".under-animation-attivato-il").textContent = dateTime;
    document.querySelector(".data-emesso-il").textContent = dateTime;

    // Funzione per aggiornare l'orologio
    const updateClock = () => {
        const current = new Date();
        const h = pad(current.getHours());
        const m = pad(current.getMinutes());
        const s = pad(current.getSeconds());
        document.querySelector(".time-remaining").textContent = `${h}:${m}:${s}`;
    };

    // Aggiorna subito per evitare il "flash" a 0
    updateClock();

    // Poi aggiorna ogni secondo
    setInterval(updateClock, 1000);
});
