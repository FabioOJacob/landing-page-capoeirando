document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA DO MODAL ---
    const modal = document.getElementById('successModal');
    const ctaButtonSecondary = document.querySelector('.cta-button.secondary');
    const closeButtons = document.querySelectorAll('.close-button, .modal-close-btn');

    // Função para abrir o modal
    const openModal = () => {
        modal.style.display = 'flex';
        document.body.classList.add('modal-open'); // <--- ADICIONA A CLASSE
    };

    // Função para fechar o modal
    const closeModal = () => {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open'); // <--- REMOVE A CLASSE
    };

    if (ctaButtonSecondary) {
        ctaButtonSecondary.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    }

    // Fechar o modal via botões ou "X"
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });

    // Fechar o modal clicando fora dele
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // --- LÓGICA DE ROLAGEM ANTERIOR (Mantida) ---
    const ctaButtons = document.querySelectorAll('a[href^="#"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                // Apenas impede a rolagem se o botão for o CTA SECUNDÁRIO que abre o modal
                if (button !== ctaButtonSecondary) { 
                    e.preventDefault();
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        });
    });

    // 2. Placeholder para Rastreamento de Conversão
    // Este código deve ser substituído por tags reais do Facebook Pixel / Google Analytics
    const primaryCta = document.querySelector('.cta-button.primary');
    if (primaryCta) {
        primaryCta.addEventListener('click', function() {
            console.log('Evento de Conversão: Clique no Teste Grátis (Hero).');
        });
    }

    console.log('Landing Page de Capoeirando carregada com sucesso.');
});