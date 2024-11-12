import { cn } from '../utils/cn';

type Props = {
  diameter: string;
  className?: string;
};

export function Circle({ diameter, className }: Props) {
  return (
    <div
      style={{
        width: `${diameter}`,
      }}
      className={cn(
        `absolute -z-50 aspect-square origin-center rounded-full`,
        className,
      )}
    ></div>
  );
}
