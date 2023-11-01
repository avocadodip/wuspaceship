import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/toggle-mode';
import AtIcon from '@/icons/at-icon';
import Image from 'next/image';

export default function Nav() {
  return (
    <main
      style={{
        background: 'rgba(255, 255, 255, 0.01)',
        backdropFilter: 'blur(3px)',
        WebkitBackdropFilter: 'blur(3px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
      }}
      className='sticky top-0 z-50 flex items-center justify-between px-12 pb-4 pt-4'
    >
      <h1 className='text-lg font-[625]'>
        <span className='bg-gradient-to-r from-blue-400 via-blue-500 to-purple-400 bg-clip-text text-transparent'>
          Spaceship{' '}
        </span>
        <span className='text-default'>@ WashU</span>
      </h1>
      <ModeToggle />
    </main>
  );
}
