// Função para verificar se a data está próxima ao vencimento
export function isProximaAoVencimento(dataVencimento, diasProximidade) {
    const diff = (dataVencimento - new Date()) / (24 * 60 * 60 * 1000); // Diferença em dias
    return diff >= 0 && diff <= diasProximidade;
}

// Exemplo de uso
let dataVencimento = new Date("2024-12-15"); // Data de vencimento
let diasProximidade = 5; // Definir como 5 dias próximos ao vencimento

console.log(isProximaAoVencimento(dataVencimento, diasProximidade) ? "Próximo ao vencimento" : "Não próximo ao vencimento");
