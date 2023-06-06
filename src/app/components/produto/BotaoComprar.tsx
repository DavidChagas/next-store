'use client';

export default function BotaoComprar() {
  const comprar = () => {
    alert('Comprado');
  };

  return (
    <button
      type="button"
      className="
        mt-1 w-[100%] 
        rounded-md border border-green-700  
        p-1 
        text-center font-semibold text-green-700 
        transition duration-150 ease-out 
        hover:bg-green-700 hover:text-white hover:ease-in
      "
      onClick={comprar}
    >
      Comprar
    </button>
  );
}
