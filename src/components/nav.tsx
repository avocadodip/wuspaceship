import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/toggle-mode';
import Image from 'next/image';

export default function Nav() {
  return (
    
    <main style={{
      background: 'rgba(255, 255, 255, 0.01)',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(4px)',
      border: '1px solid rgba(255, 255, 255, 0.18)'
    }}
    className='pt-4 px-12 pb-4 flex items-center justify-between sticky top-0 z-50'>
      <h1 className='text-lg font-medium'>Spaceship @ WashU</h1>
      <ModeToggle />
    </main>
  );
}

