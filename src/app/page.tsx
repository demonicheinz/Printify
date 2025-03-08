import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/logo.svg"
        alt="Printify"
        width={500}
        height={500}
      />
    </div>
  );
}
