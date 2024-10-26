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
  name: string;
  logo: string;
  type: string;
  description: string;
};

export function CompanyLogo({ name, logo, type, description }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer rounded-[var(--radius)] bg-white px-5 py-3 shadow-lg">
          <AspectRatio
            ratio={16 / 9}
            className="flex w-full items-center justify-center outline-none"
          >
            <Image
              src={logo}
              alt={name}
              width={164}
              height={61}
              className="object-contain"
            />
          </AspectRatio>
        </div>
      </DialogTrigger>

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
