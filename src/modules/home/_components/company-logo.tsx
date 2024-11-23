import Image from 'next/image';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Link from 'next/link';

type Props = {
  companyId: number;
  name: string;
  logo: string;
};

export function CompanyLogo({ name, logo, companyId }: Props) {
  return (
    <Link
      key={companyId}
      href={{ query: { companyId: companyId } }}
      scroll={false}
    >
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
            className="h-full object-contain"
          />
        </AspectRatio>
      </div>
    </Link>
  );
}
