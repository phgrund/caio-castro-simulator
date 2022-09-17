const moneyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 2
})

export const formatMoney = (value) => {
  return moneyFormatter.format(value)
}
