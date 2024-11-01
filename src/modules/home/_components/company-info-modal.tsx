'use client';

import Image from 'next/image';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '@/shared/components/ui/dialog';
import { redirect } from 'next/navigation';

type Props = {
  name: string;
  logo: string;
  type: string;
  description: string;
};

export function CompanyInfoModal({ name, logo, type, description }: Props) {
  return (
    <Dialog defaultOpen={true} onOpenChange={(open) => redirect(`/`)}>
      <DialogPortal>
        <DialogOverlay className="bg-black/50" />
        <DialogContent className="max-w-[min(28rem,_90vw)] rounded-md bg-white text-black sm:max-w-md">
          <div className="flex flex-col justify-between gap-4">
            <Image
              src={logo}
              alt={name}
              width={164}
              height={61}
              className="mx-auto h-[164px] w-full max-w-[30ch] object-contain"
            />
            <DialogTitle>
              <div className="text-md mt-4">{name}</div>
              <div className="pt-2 text-orange-300">{type}</div>
            </DialogTitle>
            <DialogDescription>
              <div>{description}</div>
            </DialogDescription>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
