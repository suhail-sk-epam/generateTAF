// Helper methods can be added here for reuse across test files

export function parsePrice(priceText: string): number {
  return parseFloat(priceText.replace('$', ''));
}