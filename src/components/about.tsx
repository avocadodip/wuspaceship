"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Tilt from 'react-parallax-tilt';

const CustomTilt = (props: any) => (
  <Tilt
    tiltEnable={true}
    tiltReverse={true}
    tiltAngleXInitial={0}
    tiltAngleYInitial={0}
    tiltMaxAngleX={6}
    tiltMaxAngleY={6}
    glareEnable={true}
    glareMaxOpacity={0.2}
    glareColor={'#ffffff'}
    glareBorderRadius={'0.5rem'}
    glarePosition={'all'}
    glareReverse={false}
    {...props} 
    className="flex-1"
  />
);


export default function About() {
  return (
    <main className='mt-20 flex flex-col'>
      <h1 className='mb-4 text-center text-2xl sm:text-3xl font-[625]'>What we do</h1>

      <div className='flex flex-col sm:flex-row w-full justify-between gap-4'>
      <CustomTilt>
          <Card>
            <CardHeader>
              <CardTitle className='text-2xl sm:text-3xl'>
                <span className='bg-gradient-to-r   from-blue-500 via-blue-400 to-blue-300 bg-clip-text text-transparent'>
                  Gtfol
                </span>
              </CardTitle>
              <CardDescription className='leading-5'>
                {' '}
                Get the f*ck off localhost. This means building in public to get
                feedback and iterate quickly.
              </CardDescription>
            </CardHeader>
          </Card>
        </CustomTilt>


        <CustomTilt>


          <Card>
            <CardHeader>
              <CardTitle className='text-2xl sm:text-3xl'>
                {' '}
                <span className='bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300    bg-clip-text text-transparent'>
                  Learn
                </span>
              </CardTitle>
              <CardDescription className='leading-5'>
                from top VCs and founders who have built products, led teams, and
                raised rounds.
              </CardDescription>
            </CardHeader>
          </Card>
          </CustomTilt>

          <CustomTilt>
          <Card>
            <CardHeader>
              <CardTitle className='text-2xl sm:text-3xl'>
                {' '}
                <span className='bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 bg-clip-text text-transparent'>
                  Travel
                </span>
              </CardTitle>
              <CardDescription className='leading-5'>
                to broaden our network and perspective. Hackathons, events, sf/la
                to nyc/boston.
              </CardDescription>
            </CardHeader>
          </Card>
          </CustomTilt>
      </div>
    </main>
  );
}
