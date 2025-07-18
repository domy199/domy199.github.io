document.addEventListener('DOMContentLoaded', () => {
    const arrow = document.querySelector(".button1");
    const ticket = document.querySelector(".ticket");
    const bottom = document.querySelector(".bottom");

    // Toggle visibilità e classi al clic sulla freccia
    arrow.addEventListener('click', () => {
        ticket.classList.toggle("close");
        bottom.classList.toggle("hidden");
        arrow.classList.toggle("close");
    });

    // Funzione per formattare un numero con zero iniziale se < 10
    const pad = n => String(n).padStart(2, '0');

    // Imposta la data e ora di attivazione
    const now = new Date();
    const day = pad(now.getDate());
    const month = pad(now.getMonth() + 1);
    const year = now.getFullYear();
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());

    const dateTime = `${day}/${month}/${year} - ${hours}:${minutes}`;

    document.querySelector(".under-animation-attivato-il").textContent = dateTime;
    document.querySelector(".data-emesso-il").textContent = dateTime;

    // Orologio in tempo reale (HH:MM:SS)
    setInterval(() => {
        const current = new Date();
        const h = pad(current.getHours());
        const m = pad(current.getMinutes());
        const s = pad(current.getSeconds());
        document.querySelector(".time-remaining").textContent = `${h}:${m}:${s}`;
    }, 1000);
});
