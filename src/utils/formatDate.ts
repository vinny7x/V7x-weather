export function formatDate(date: string) {
  const [, month, day] = date.split("-");
  return `${day}/${month}`;
}
