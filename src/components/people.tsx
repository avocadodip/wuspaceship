import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
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
      joined: 'September, 2023',
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
      joined: 'September, 2023',
      projects: [],
      twitter: 'https://twitter.com/FredHua03',
    },
    // Add more people here
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[300px]'>Name</TableHead>
          <TableHead>Building</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {peopleData.map((person, index) => (
          <TableRow key={index}>
            {/* NAME */}
            <TableCell>
              <div className='flex gap-3'>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant='link'>{person.name}</Button>
                </HoverCardTrigger>
                <HoverCardContent className='w-80'>
                  <div className='flex justify-between space-x-4'>
                    <Avatar>
                      <AvatarImage src='https://github.com/vercel.png' />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className='space-y-1'>
                      <h4 className='text-sm font-semibold'>{person.name}</h4>
                      <p className='text-sm'>
                        The React Framework – created and maintained by @vercel.
                      </p>
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
                <Badge variant='outline'>
                  <p className='font-medium text-muted-foreground'>
                    {person.year}
                  </p>
                </Badge>
                <Badge variant='outline'>
                  <p className='font-medium text-muted-foreground'>
                    {person.major}
                  </p>
                </Badge>
              </div>
            </TableCell>


            {/* PROJECTS */}
            <TableCell>
              {person.projects.map((project, projectIndex) => (
                <div className='flex gap-2' key={projectIndex}>
                  <Link
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={badgeVariants({ variant: 'default' })}
                  >
                    {project.name}
                    <ArrowUpRightIcon />
                  </Link>
                  <p className='text-muted-foreground'>{project.description}</p>
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
