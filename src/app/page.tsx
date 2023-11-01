import { Button } from '@/components/ui/button';
import Nav from '@/components/nav';
import People from '@/components/people';
import { ModeToggle } from '@/components/ui/toggle-mode';
import Image from 'next/image';
import JoinButtonWithForm from '@/components/join-button';

export default function Home() {
  return (
    <main className='py-8 px-12'>
      <Nav />
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
        <p className='text-[43px] font-bold text-foreground leading-[60px]	'>
          A network going {" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600">
            all-in{" "}<br/>
          </span> 
          on{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600">
            tech & startup{" "}
          </span> 
          🚀
        </p>
      </section>


      <People />

      <section className="flex flex-col items-center gap-3 mt-10 mb-16">
        <p className="text-sm text-muted-foreground">Interested?</p>
        <JoinButtonWithForm />
      </section>
    </main>
  );
}
