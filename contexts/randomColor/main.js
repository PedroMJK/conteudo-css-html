// Seleciona o botão pelo ID
const button = document.getElementById('changeColorBtn');

function getRandomColor() {
    const letters = '0123456789ABCDEF'; // Valores hexadecimais permitidos
    let color = '#'; // Inicia a cor com '#'
    for (let i = 0; i < 6; i++) { // Loop para gerar os 6 caracteres da cor
      color += letters[Math.floor(Math.random() * 16)]; // Escolhe um valor aleatório de 0 a 15
    }
    return color; // Retorna a cor gerada
  }
  
  // Adiciona um evento de clique ao botão
  button.addEventListener('click', () => {
    // Altera a cor de fundo da página para a cor gerada aleatoriamente
    document.body.style.backgroundColor = getRandomColor();
  });