/* Código simples para interceptar o envio do formulário, evitar o recarregamento 
da página e exibir um alerta de sucesso para atender ao solicitado no projeto */
const form = document.getElementById('form')

form.addEventListener('submit', function(e) {
  e.preventDefault()
  form.reset()

  alert('Mensagem enviada com sucesso!')
})

// Alterna visibilidade do menu mobile
const hamburger = document.getElementById('hamburger')
const navMenu = document.getElementById('nav-menu')

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show')
})