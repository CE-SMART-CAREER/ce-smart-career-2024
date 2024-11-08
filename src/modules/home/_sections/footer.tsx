import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <footer className="bg-gray-200 p-8 text-center">
      <h2 className="mb-4 text-lg font-bold">ติดตามข่าวสาร</h2>
      <div className="flex justify-center space-x-8">
        <Icon icon="fa:instagram" className="text-3xl" />
        <Icon icon="fa:facebook" className="text-3xl" />
        <Icon icon="ic:baseline-tiktok" className="text-3xl" />
      </div>
    </footer>
  );
}
