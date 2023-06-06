import { Menu } from './Menu';

export default function Header() {
  return (
    <div className=" bg-neutral-200">
      <div className="container flex justify-between px-10 py-5">
        <div>Logo</div>
        <div>
          {/* @ts-expect-error Async Server Component */}
          <Menu />
        </div>
        <div>Cesta</div>
      </div>
    </div>
  );
}
