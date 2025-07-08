'use client';

import { SearchSchema } from '@/src/schema'
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';


const ProductSearchForm = () => {

  const router = useRouter();

  const handleSearchAction = (formData: FormData) => {
    const data = {
      search: formData.get('search')
    }

    const result = SearchSchema.safeParse(data);
    if (!result.success) {
      result.error.issues.forEach(issue => {
        toast.error(issue.message)
      })
      return;
    }

    router.push(`/admin/products/search?search=${result.data.search}`)

  }

  return (
    <form
      action={handleSearchAction}
      className='flex items-center'>

      <input
        type="text"
        placeholder='Buscar Producto'
        className='p-2 placeholder-gray-400 w-full bg-white'
        name='search'
      />

      <input
        type="submit"
        value={'Buscar'}
        className='bg-purple-600 p-2 uppercase text-white cursor-pointer'
      />
    </form>
  )
}

export default ProductSearchForm