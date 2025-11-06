// Verifica se o botão da primeira página existe antes de usar
const learnMoreBtn = document.getElementById('learnMoreBtn');

// Se o botão existir (na página inicial), adiciona o evento
if (learnMoreBtn) {
  learnMoreBtn.addEventListener('click', () => {
    // Ao clicar, leva o usuário para a página de introdução
    window.location.href = 'introducao.html';
  });
}

// Verifica se o botão da segunda página existe
const nextBtn = document.getElementById('nextBtn');

// Se existir, mostra um alerta simples
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    alert('Agora você está pronto para aprender Engenharia de Software!');
  });
}

// Verifica se o botão da página Engenharia de Software existe
const nextToCriseBtn = document.getElementById('nextToCriseBtn');

// Se existir, adiciona o comportamento de clique
if (nextToCriseBtn) {
  nextToCriseBtn.addEventListener('click', () => {
    // Redireciona o usuário para a próxima página (Crise do Software)
    window.location.href = 'crise.html';
  });
}

