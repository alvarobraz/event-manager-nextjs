/**
 * Formata uma string de data ISO ou objeto Date para o padrão brasileiro.
 * Exemplo: 2026-03-25T20:00:00Z -> 25 de março de 2026, 20:00
 */
export function formatDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(dateObj);
}
