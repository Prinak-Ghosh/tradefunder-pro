export interface Product {
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
}

export const products: Product[] = [
  {
    priceId: 'price_1RnNX3E6f3joFG516gsw0ybp',
    name: 'TradeHelp',
    description: 'Get expert trading assistance and guidance',
    mode: 'subscription'
  }
];