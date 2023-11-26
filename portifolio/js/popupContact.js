// Função para abrir o popup
function abrirPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// Função para fechar o popup
function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Função para abrir o WhatsApp
function abrirWhatsApp() {
    window.open('https://api.whatsapp.com/send?phone=5511959816510', '_blank');
}

// Função para abrir o cliente de e-mail com destinatário preenchido
function abrirEmail() {
    window.location.href = 'mailto:marconypinheirodemoura@gmail.com?subject=Contato via Portifólio';
}

// Associar a função de abrir o popup ao clique do botão de Contato
document.getElementById('contact').addEventListener('click', abrirPopup);
