'use client';

import Image from 'next/image';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import type { PropsWithChildren } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog';
import { useBoolean } from '@/shared/hooks';

type Props = {
  key: number;
  company: {
    name: string;
    logo: string;
  };
};

export function CompanyLogo({ key, company }: PropsWithChildren<Props>) {
  const openModal = useBoolean(false);

  return (
    <Dialog open={openModal.value} onOpenChange={openModal.onToggle}>
      <DialogTrigger asChild>
        <div
          key={key}
          className="rounded-[var(--radius)] bg-white px-5 py-3 shadow-lg"
        >
          <AspectRatio.Root
            ratio={16 / 9}
            className="flex w-full items-center justify-center outline-none"
          >
            <Image
              src={company.logo}
              alt={company.name}
              width={164}
              height={61}
              className="object-contain"
            />
          </AspectRatio.Root>
        </div>
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-[dialog-overlay-hide_200ms] data-[state=open]:animate-[dialog-overlay-show_200ms]" />
        <DialogContent className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 text-gray-900 shadow data-[state=closed]:animate-[dialog-content-hide_200ms] data-[state=open]:animate-[dialog-content-show_200ms]">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl">asgd</DialogTitle>
            <DialogDescription>asldkfjlsadkjflasdkjflk</DialogDescription>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
