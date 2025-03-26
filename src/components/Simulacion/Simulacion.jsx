"use client";
import { useEffect, useState } from 'react';
import YouTubePlayer from 'react-player/youtube';

export default function Simulacion() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className='mt-0 mx-4'>
  <div data-aos="fade-right" className='grid place-items-center justify-center gap-1 pt-0'>
    <h2 className='text-center text-cyan-400 text-3xl font-bold py-2 mt-24'>
      Simulacion de Proyecto
    </h2>
  </div>
  <div className='flex text-center justify-center mx-auto p-16 mt-1'>
    {isClient && ( 
      <YouTubePlayer
        url='https://youtu.be/9sCCaaf3dqs?si=yBulvQNTWUFcFujH'
        controls
        loop
      />
    )}
  </div>
</section>
  );
}