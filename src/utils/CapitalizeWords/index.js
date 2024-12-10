export function capitalizeWords(str) {
    return str
      .split(' ') // Separa a string em um array de palavras
      .map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitaliza a primeira letra de cada palavra
      )
      .join(' '); // Junta as palavras novamente em uma string
  }

  