import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center h-screen w-full overflow-auto">
      <div className="flex justify-center items-center">
        <Image src="/png/CGT_SRX_BLK.png" className="dark:invert" alt="Logo CGT" width={200} height={200} />
      </div>
    </div>
  );
}
