// Menú móvil
    const menuButton = document.getElementById('menuButton');
    const mainNav = document.getElementById('mainNav');
    menuButton.addEventListener('click', () => {
      const open = mainNav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.textContent = open ? 'Cerrar' : 'Menú';
    });
    mainNav.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = 'Menú';
    }));

    // Cuenta regresiva: sábado 15 de agosto de 2026, 21:00 hora Argentina.
    const targetDate = new Date('2026-08-15T21:00:00-03:00').getTime();
    function updateCountdown() {
      const remaining = Math.max(0, targetDate - Date.now());
      const days = Math.floor(remaining / 86400000);
      const hours = Math.floor((remaining % 86400000) / 3600000);
      const minutes = Math.floor((remaining % 3600000) / 60000);
      const seconds = Math.floor((remaining % 60000) / 1000);
      document.getElementById('days').textContent = String(days).padStart(2, '0');
      document.getElementById('hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
      document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Ampliación de fotos de hotel y recuerdos 2022.
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.getElementById('closeModal');
    document.querySelectorAll('.open-image').forEach(button => button.addEventListener('click', () => {
      modalImage.src = button.dataset.image;
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
    }));
    function hideModal() {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      modalImage.src = '';
    }
    closeModal.addEventListener('click', hideModal);
    modal.addEventListener('click', event => { if (event.target === modal) hideModal(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') hideModal(); });
