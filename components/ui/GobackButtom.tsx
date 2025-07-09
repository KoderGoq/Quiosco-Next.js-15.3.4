'use client';

import { useRouter } from 'next/navigation';

const GobackButtom = () => {

  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className='bg-purple-500 hover:bg-purple-700 text-white w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer'
    >Volver</button>
  )
}

export default GobackButtom