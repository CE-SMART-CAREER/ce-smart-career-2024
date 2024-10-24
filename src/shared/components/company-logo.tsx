import Image from 'next/image';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog';

type Props = {
  company: {
    name: string;
    logo: string;
    type: string;
    description: string;
  };
};

export function CompanyLogo({ company }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="rounded-[var(--radius)] bg-white px-5 py-3 shadow-lg">
          <AspectRatio
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
          </AspectRatio>
        </div>
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-[dialog-overlay-hide_200ms] data-[state=open]:animate-[dialog-overlay-show_200ms]" />
        <DialogContent className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-linear-soft-gray p-8 text-gray-900 shadow backdrop-blur-3xl data-[state=closed]:animate-[dialog-content-hide_200ms] data-[state=open]:animate-[dialog-content-show_200ms] [&>button]:hidden">
          <div className="flex flex-col justify-between gap-4 text-white">
            <Image
              src={company.logo}
              alt={company.name}
              width={164}
              height={61}
              className="mx-auto w-full max-w-[30ch] object-contain"
            />
            <DialogTitle>
              <div className="text-md pt-4">{company.name}</div>
              <div className="pt-2 text-orange-300">{company.type}</div>
            </DialogTitle>
            <DialogDescription>
              <div className="text-white">{company.description}</div>
            </DialogDescription>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
