import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
  <div className="grid grid-cols-5 gap-4">
    {Array.from({ length: 30 }, (_, i) => (
      <a
        key={i}
        href={`/day${i + 1}'`}
        className="bg-gray-200 border border-gray-500 rounded-md flex items-center justify-center w-24 h-24 hover:bg-gray-300 cursor-pointer"
      >
        {String(i + 1).padStart(2, '0')}
      </a>
    ))}
  </div>
</div>
  );
}
