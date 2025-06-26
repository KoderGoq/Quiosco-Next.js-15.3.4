'use client';

import { Product } from '@/generated/prisma';
import { useStore } from '@/src/store';

type AddProductButtonProps = {
  product: Product
}

const AddProductButton = ({ product }: AddProductButtonProps) => {

  const addToOrder = useStore((state) => state.addToOrder);

  return (
    <button
      type='button'
      className='bg-purple-600 hover:bg-purple-700 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer'
      onClick={() => addToOrder(product)}
    >Agregar
    </button>
  )
}

export default AddProductButton