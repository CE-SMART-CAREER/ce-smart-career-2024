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
import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';
import Link from 'next/link';

type Props = {
  name: string;
  logo: string;
  url: string;
  description: string;
  contact: string;
};

export function CompanyInfoModal({
  name,
  logo,
  url,
  description,
  contact,
}: Props) {
  const router = useRouter();

  const closeModal = () => {
    router.replace('/', { scroll: false });
  };

  return (
    <Dialog defaultOpen={true} onOpenChange={closeModal}>
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
              <div className="flex gap-2">
                <div className="text-md">{name}</div>
                {url && (
                  <Link href={url} target="_blank" rel="noopener noreferrer">
                    <Icon
                      icon="radix-icons:external-link"
                      className="cursor-pointer text-gray-400 hover:text-orange-300"
                      width="1rem"
                      height="1rem"
                    />
                  </Link>
                )}
              </div>
              {/* <div className="pt-2 text-orange-300">{type}</div> */}
            </DialogTitle>
            <DialogDescription className="m-0 max-h-[30vh] overflow-y-auto p-[2px] pr-[5px]">
              <p>{description}</p>
              {contact && (
                <div className="mt-2">
                  <span className="font-medium text-black">
                    ติดต่อสอบถามเพิ่มเติมได้ที่
                  </span>
                  <p>{contact}</p>
                </div>
              )}
            </DialogDescription>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
