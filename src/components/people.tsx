import {
  Table,
  TableBody,
  TableCell,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge, badgeVariants } from '@/components/ui/badge';
import ArrowUpRightIcon from '../icons/arrow-up-right';
import TwitterIcon from '../icons/twitter-logo';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { CalendarDays } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

export default function People() {
  const peopleData = [
    {
      name: 'Chris Chen',
      year: '2026',
      major: 'CS',
      interests: 'Product Design, AI/ML, XR',
      joined: 'September, 2023',
      avatar: '/spaceship.png',
      projects: [
        {
          name: 'Pledge',
          link: 'https://pledge.so',
          description: 'To-do list that charges you for failing tasks',
        },
        // Add more projects here
      ],
      twitter: 'https://twitter.com/avocadodip',
    },
    {
      name: 'Fred Hua',
      year: '2025',
      major: 'BUCS',
      interests: '',
      joined: 'September, 2023',
      avatar: '/spaceship.png',
      projects: [],
      twitter: 'https://twitter.com/FredHua03',
    },
    // Add more people here
  ];

  return (
    <Table className='text-xs md:text-sm'>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[200px] md:w-[300px]'>Name</TableHead>
          <TableHead>Building</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {peopleData.map((person, index) => (
          <TableRow key={index}>
            {/* NAME */}
            <TableCell>
              <div className='flex items-center gap-1 md:gap-3'>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant='link'>
                      <p className='text-xs md:text-sm'>{person.name}</p>
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className='w-80'>
                    <div className='flex space-x-4'>
                      <Avatar>
                        <AvatarImage src={person.avatar} />
                        <AvatarFallback>VC</AvatarFallback>
                      </Avatar>
                      <div className='space-y-1'>
                        <h4 className='text-sm font-semibold'>{person.name}</h4>
                        {person.interests && (
                          <p className='text-xs'>
                            Interests: {person.interests}
                          </p>
                        )}
                        <div className='flex items-center pt-2'>
                          <CalendarDays className='mr-2 h-4 w-4 opacity-70' />{' '}
                          <span className='text-xs text-muted-foreground'>
                            Joined {person.joined}
                          </span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <Badge variant='outline' className='max-h-8'>
                  <p className='font-medium text-muted-foreground'>
                    {person.year}
                  </p>
                </Badge>
                <Badge variant='outline' className='max-h-8'>
                  <p className='font-medium text-muted-foreground'>
                    {person.major}
                  </p>
                </Badge>
              </div>
            </TableCell>

            {/* PROJECTS */}
            <TableCell>
              {person.projects.map((project, projectIndex) => (
                <div
                  className='flex max-h-8 items-center gap-2'
                  key={projectIndex}
                >
                  <Link
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={badgeVariants({ variant: 'default' })}
                  >
                    {project.name}
                    <ArrowUpRightIcon />
                  </Link>
                  <p className='min-w-[300px] text-muted-foreground'>
                    {project.description}
                  </p>
                </div>
              ))}
            </TableCell>
            {/* SOCIALS */}
            <TableCell className='text-right'>
              <Link
                href={person.twitter}
                target='_blank'
                rel='noopener noreferrer'
                className={buttonVariants({ size: 'icon', variant: 'ghost' })}
              >
                <p className='text-muted-foreground'>
                  <TwitterIcon />
                </p>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
