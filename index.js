document.addEventListener('DOMContentLoaded', () => {
    const arrow = document.querySelector(".button1");
    const ticket = document.querySelector(".ticket");
    const bottom = document.querySelector(".bottom");

    arrow.addEventListener('click', () => {
        ticket.classList.toggle("close");
        bottom.classList.toggle("hidden");
        arrow.classList.toggle("close");
    });

    const pad = n => String(n).padStart(2, '0');

    // DATA DI ATTIVAZIONE
    const now = new Date();
    const day = pad(now.getDate());
    const month = pad(now.getMonth() + 1);
    const year = now.getFullYear();
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());

    const dateTime = `${day}/${month}/${year} - ${hours}:${minutes}`;
    document.querySelector(".under-animation-attivato-il").textContent = dateTime;
    document.querySelector(".data-emesso-il").textContent = dateTime;

    // OROLOGIO LIVE
    const updateClock = () => {
        const current = new Date();
        const h = pad(current.getHours());
        const m = pad(current.getMinutes());
        const s = pad(current.getSeconds());
        document.querySelector(".time-remaining").textContent = `${h}:${m}:${s}`;
    };
    updateClock();
    setInterval(updateClock, 1000);

    // COUNTDOWN "2 h 10 min" → aggiornato ogni minuto
    const endTime = new Date(now.getTime() + 29 * 60 * 1000); // 29 minuti da ora

    const updateRemaining = () => {
        const current = new Date();
        let diff = endTime - current;

        if (diff <= 0) {
            document.querySelector(".tempo-restante").textContent = "0 h 0 min";
            return;
        }

        const totalMinutes = Math.floor(diff / (1000 * 60));
        const remainingHours = Math.floor(totalMinutes / 60);
        const remainingMinutes = totalMinutes % 60;

        document.querySelector(".tempo-restante").textContent = `${remainingHours} h ${remainingMinutes} min`;
    };

    // Aggiorna subito + ogni 30 secondi
    updateRemaining();
    setInterval(updateRemaining, 30000); // ogni 30 secondi (basta per i minuti)
});
