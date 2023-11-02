import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/toggle-mode';
import AtIcon from '@/icons/at-icon';
import TwitterIcon from '@/icons/twitter-logo';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import GithubIcon from '@/icons/github-logo';
export default function Nav() {
  return (
    <main
      style={{
        background: 'rgba(255, 255, 255, 0.01)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.18)',
      }}
      className='sticky top-0 z-50 flex items-center justify-between px-4 py-2 md:px-12 md:py-4'
    >
      <h1 className='text-lg font-[625]'>
        <span className='bg-gradient-to-r from-blue-400 via-blue-500 to-purple-400 bg-clip-text text-transparent'>
          Spaceship{' '}
        </span>
        <span className='text-default'>@ WashU</span>
      </h1>
      <div className='flex flex-row items-center gap-3'>
        <Link
          href='https://github.com/avocadodip/wuspaceship'
          target='_blank'
          rel='noopener noreferrer'
          className={buttonVariants({ size: 'icon', variant: 'ghost' })}
        >
          <GithubIcon />
        </Link>
        <ModeToggle />
      </div>
    </main>
  );
}
