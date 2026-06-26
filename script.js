const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.classList.toggle('is-open', !isOpen);
    mobileMenu.hidden = isOpen;
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('is-open');
      mobileMenu.hidden = true;
    });
  });
}

const tabs = document.querySelectorAll('[data-tab]');
const panels = document.querySelectorAll('.program-panel');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const targetId = tab.dataset.tab;

    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-selected', String(isActive));
    });

    panels.forEach((panel) => {
      const isTarget = panel.id === targetId;
      panel.classList.toggle('is-active', isTarget);
      panel.hidden = !isTarget;
    });
  });
});

const modal = document.getElementById('contactModal');
const modalMessage = document.getElementById('contactMessage');
const contactDiego = document.getElementById('contactDiego');
const contactSol = document.getElementById('contactSol');
let lastTrigger = null;

function buildWhatsappLink(number, ticket) {
  const text = `Hola, quiero consultar/reservar ${ticket} para Marajá Fest 2026.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

function openContactModal(ticket, trigger) {
  if (!modal) return;

  lastTrigger = trigger;
  modalMessage.textContent = `Elegí un contacto y te llevamos a WhatsApp con el mensaje listo para ${ticket}.`;
  contactDiego.href = buildWhatsappLink('5492236685699', ticket);
  contactSol.href = buildWhatsappLink('5492235017025', ticket);
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modal.querySelector('.modal-close').focus();
}

function closeContactModal() {
  if (!modal) return;

  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  if (lastTrigger) lastTrigger.focus();
}

document.querySelectorAll('.js-open-contact').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    openContactModal(trigger.dataset.ticket || 'una entrada', trigger);
  });
});

document.querySelectorAll('[data-close-modal]').forEach((trigger) => {
  trigger.addEventListener('click', closeContactModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal?.classList.contains('is-open')) {
    closeContactModal();
  }
});
