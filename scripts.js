// Quando clicchi sulla QR, mostra overlay con immagine ingrandita
document.addEventListener('DOMContentLoaded', () => {
  const qr = document.querySelector('.info-section .qr');
  qr.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    const img = document.createElement('img');
    img.src = qr.src;
    img.className = 'overlay-img';
    overlay.appendChild(img);
    document.body.appendChild(overlay);
    overlay.addEventListener('click', () => overlay.remove());
  });
});
