export function formatDateToBRL(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); // Adiciona 0 à esquerda se o dia for menor que 10
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses começam do 0, então somamos 1
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  }
  