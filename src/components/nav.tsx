import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/toggle-mode';
import Image from 'next/image';

export default function Nav() {
  return (
    <main className='flex items-center justify-between'>
      <h1 className='text-lg font-medium'>Spaceship @ WashU</h1>
      <ModeToggle />
    </main>
  );
}
