import { Menu } from './Menu';

export default function Header() {
  return (
    <div className=" bg-neutral-200">
      <div className="container mx-auto flex justify-between px-10 py-5">
        <div>Logo</div>
        <div>
          <Menu />
        </div>
        <div>Cesta</div>
      </div>
    </div>
  );
}
