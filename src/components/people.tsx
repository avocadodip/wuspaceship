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

export default function People() {
  return (
    <Table>
      {/* <TableCaption>Click for more info.</TableCaption> */}

      <TableHeader>
        <TableRow>
          <TableHead className='w-[300px]'>Name</TableHead>

          <TableHead>Building</TableHead>
          {/* <TableHead  className="text-right">Connect</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
        <TableCell>
            <div className="flex gap-3">
            Chris Chen
            <Badge variant='outline'>
                <p className='font-medium text-muted-foreground'>2026</p>
              </Badge>
              <Badge variant='outline'>
                <p className='font-medium text-muted-foreground'>CS</p>
              </Badge>
            </div>

          </TableCell>

          <TableCell>
            <div className='flex gap-2'>
              <Link
                href='https://pledge.so'
                target='_blank'
                rel='noopener noreferrer'
                className={badgeVariants({ variant: 'default' })}
              >
                Pledge
                <ArrowUpRightIcon />
              </Link>

              <p className='text-muted-foreground'>
                To-do list that charges you for failing tasks
              </p>
            </div>
          </TableCell>
          <TableCell className='text-right'>
            <Link
              href='https://twitter.com/avocadodip'
              target='_blank'
              rel='noopener noreferrer'
              className={buttonVariants({ size: 'icon', variant: 'ghost' })}
            >
              <p className="text-muted-foreground">
              <TwitterIcon />
              </p>            </Link>
          </TableCell>
        </TableRow>

        <TableRow className='items-center'>
          <TableCell>
            <div className="flex gap-3">
            Fred Hua
            <Badge variant='outline'>
                <p className='font-medium text-muted-foreground'>2025</p>
              </Badge>
              <Badge variant='outline'>
                <p className='font-medium text-muted-foreground'>BUCS</p>
              </Badge>
            </div>

          </TableCell>


          {/* BUILDING */}
          <TableCell></TableCell>

          {/* CONNECT */}
          <TableCell className='text-right'>
            <Link
              href='https://twitter.com/FredHua03'
              target='_blank'
              rel='noopener noreferrer'
              className={buttonVariants({ size: 'icon', variant: 'ghost' })}
            >
              <p className="text-muted-foreground">
              <TwitterIcon />
              </p>
            </Link>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
