import { Product } from '@/generated/prisma';
import { formatCurrency } from '@/src/utils';
import Image from 'next/image';

type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className='border border-slate-300 bg-white'>

      <Image
        width={400}
        height={500}
        src={`/products/${product.image}.jpg`}
        alt={`Imagen de ${product.name}`}
      />
      <div className='p-5'>
        <h3 className='text-2xl font-bold'>{product.name}</h3>
        <p className='mt-5 font-black text-4xl text-amber-500'>{formatCurrency(product.price)}</p>
        <button
          type='button'
          className='bg-purple-600 hover:bg-purple-700 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer'
        >Agregar</button>
      </div>
    </div>
  )
}

export default ProductCard;