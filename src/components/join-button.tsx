'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

export default function JoinButtonWithForm() {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: 'Andrew Martin',
    email: '@amartin_tweets',
    link: 'google.com',
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async () => {
    let isValid = true;
    console.log(formData.name.trim());
    if (
      formData.name.trim() == '' ||
      formData.email.trim() == '' ||
      formData.link.trim() == ''
    ) {
      isValid = false;
      console.error('All fields are required');
      toast({
        title: "Uh oh! Something's missing.",
        description: 'All fields are required.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      description: 'Submitted!',
    });

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzW5Bz2c-5J9rKju1N1_183OI3HVxUEQ2qya182IX6MsVPs5tQasiaRYYs4TdAEoMA_/exec',
        {
          method: 'POST',
          mode: 'no-cors', // Important for CORS issues
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      console.log('Response:', response); // Log the response
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Tell us what you&apos;re building!</Button>
      </DialogTrigger>
      <DialogContent className='max-w-[350px] sm:max-w-[450px]'>
        <DialogHeader>
          <DialogTitle>Not on Twitter?</DialogTitle>
          <DialogDescription className='mt-5 '>
            Go make one — you&apos;re missing out.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-5 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              Name
            </Label>
            <Input
              id='name'
              value={formData.name}
              onChange={handleChange}
              className='col-span-4'
            />
          </div>
          <div className='grid grid-cols-5 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              Twitter
            </Label>
            <Input
              id='email'
              value={formData.email}
              onChange={handleChange}
              className='col-span-4'
            />
          </div>
          <div className='grid grid-cols-5 items-center gap-4'>
            <Label htmlFor='username' className='text-right  leading-5'>
              Project Link
            </Label>
            <Input
              id='link'
              value={formData.link}
              onChange={handleChange}
              className='col-span-4'
            />
          </div>
        </div>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button type='submit' onClick={handleSubmit}>
              Submit
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
