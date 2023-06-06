import { Menu } from '../header/Menu';

export default function Footer() {
  return (
    <div className="container flex justify-between bg-neutral-600 px-10 py-10 text-white">
      <div>FOOOOTER</div>
      {/* @ts-expect-error Async Server Component */}
      <Menu />
    </div>
  );
}
