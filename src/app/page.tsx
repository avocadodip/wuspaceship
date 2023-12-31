import { Button } from '@/components/ui/button';
import Nav from '@/components/nav';
import People from '@/components/people';
import { ModeToggle } from '@/components/ui/toggle-mode';
import JoinButtonWithForm from '@/components/join-button';
import About from '@/components/about';

// npx prettier --write "src/**/*.{js,jsx,ts,tsx,json,md}"

export default function Home() {
  return (
    <main className='px-4 pb-4 md:px-12'>
      <section className='flex flex-col items-center gap-6 py-20 text-center '>
        {/* <p className='text-5xl font-bold text-foreground leading-[60px]	'>
          Going{" "}
 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
all-in{" "} 
          </span><br /> 
            on{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            startup{" "}
          </span> 
          🚀
        </p> */}
        <p className='text-3xl font-bold leading-[43px] text-foreground sm:text-[43px] sm:leading-[60px]	'>
          The network going{' '}
          <span className='bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent'>
            all-in <br />
          </span>
          on{' '}
          <span className='bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
            tech startups{' '}
          </span>
          🚀
        </p>
      </section>

      <People />

      <About />

      <section className='mb-16 mt-20 flex flex-col items-center gap-3'>
        <p className='text-sm text-muted-foreground'>Interested?</p>
        <JoinButtonWithForm />
      </section>
    </main>
  );
}
