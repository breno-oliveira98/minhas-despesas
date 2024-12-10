export function formatDateToBrazilian(date) {
  const [year, month, day] = date.split('-'); // Separar a data no formato yyyy-mm-dd
  return `${day}/${month}/${year}`; // Formatar para o padrão DD/MM/YYYY
}