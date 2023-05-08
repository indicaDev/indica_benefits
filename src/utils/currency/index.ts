export const formatToBrazilianCurrency = (value: number | string): string =>
  value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
