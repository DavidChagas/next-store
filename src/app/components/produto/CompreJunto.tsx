interface CompreJuntoProps {
  categoria: string;
}

export default async function CompreJunto({ categoria }: CompreJuntoProps) {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });

  return <div className="rounded-md border"> compre junto</div>;
}
