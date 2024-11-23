import type { PropsWithChildren } from 'react';
import { InView } from 'react-intersection-observer';

type Props = {
  id: string;
  onChange: (inView: boolean, entry: IntersectionObserverEntry) => void;
};

export default function ObserverSection({
  children,
  onChange,
  id,
}: PropsWithChildren<Props>) {
  return (
    <InView threshold={0.2} triggerOnce={false} onChange={onChange}>
      {({ ref }) => (
        <div id={id} ref={ref}>
          {children}
        </div>
      )}
    </InView>
  );
}
