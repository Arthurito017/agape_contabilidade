document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Inicializa as animações (AOS)
  if (typeof AOS !== 'undefined') {
    AOS.init();
  }

  // 2. Menu Mobile (Abrir e Fechar)
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // 3. Ajuste Automático do Topo (Para o menu não cobrir o título)
  function ajustarPaddingHero() {
    const navbar = document.querySelector('.custom-navbar');
    const hero = document.querySelector('.hero');
    
    if (navbar && hero) {
      const navHeight = navbar.offsetHeight;
      hero.style.paddingTop = navHeight + 'px';
    }
  }

  // Roda o ajuste ao carregar e ao redimensionar a tela
  window.addEventListener('resize', ajustarPaddingHero);
  ajustarPaddingHero();
  // 4. Lógica do Chatbot
  const chatToggle = document.getElementById('chat-toggle');
  const chatWindow = document.getElementById('chat-window');
  const closeChat = document.getElementById('close-chat');

  if (chatToggle && chatWindow && closeChat) {
    // Abrir chat
    chatToggle.addEventListener('click', () => {
      chatWindow.classList.toggle('active');
    });

    // Fechar chat pelo 'X'
    closeChat.addEventListener('click', () => {
      chatWindow.classList.remove('active');
    });
  }
});