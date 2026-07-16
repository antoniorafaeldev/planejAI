export function formatCurrencyMask(value: string): string {
  const onlyNumbers = value.replace(/\D/g, '');

  if (!onlyNumbers) {
    return '';
  }

  const numericValue = Number(onlyNumbers);

  if (!Number.isFinite(numericValue)) {
    return '';
  }

  const amount = numericValue / 100;

  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function parseCurrency(value: string): number {
  return (
    parseFloat(value.replace(/\./g, '').replace(',', '.').replace('R$', '')) ||
    0
  );
}
