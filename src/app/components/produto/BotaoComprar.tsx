'use client';

export default function BotaoComprar() {
  const comprar = () => {
    alert('Comprado');
  };

  return (
    <button
      type="button"
      className="mt-1 p-1 w-[100%] text-center text-green-700 border border-green-700 rounded-md font-semibold hover:bg-green-700 hover:text-white transition duration-150 ease-out hover:ease-in"
      onClick={comprar}
    >
      Comprar
    </button>
  );
}
