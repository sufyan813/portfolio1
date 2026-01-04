'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className={`text-center transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-6xl font-light tracking-wide">Your Name</h1>
        <p className="mt-6 text-lg text-gray-400">
          Gothic logo & brand identity designer
        </p>
      </div>
    </main>
  );
}
