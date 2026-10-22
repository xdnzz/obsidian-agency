import type { Metadata } from 'next';
import { LoveCoffeeScreen } from '@/components/home/LoveCoffeeScreen';

export const metadata: Metadata = {
  title: 'Love & coffee',
};

export default function LoveCoffeePage() {
  return <LoveCoffeeScreen />;
}
