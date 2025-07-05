'use client';
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="bg-white">
      <nav>
        
      </nav>
      <h1 className="flex items-center justify-center text-black">30 Day Challenge</h1>
      <div className="flex items-center justify-center min-h-screen mt-4">
       <div className="grid grid-cols-5 gap-4">
        {Array.from({ length: 30 }, (_, i) => (
          <a
            key={i}
            href= {`/day/${i+1}`}
            className="bg-gray-200 border border-gray-500 rounded-md flex items-center justify-center w-24 h-24 hover:bg-gray-300 cursor-pointer text-black"
          >
            {String(i + 1).padStart(2, '0')}
          </a>
        ))}
      </div>
    </div>
    </div>
  );
}
