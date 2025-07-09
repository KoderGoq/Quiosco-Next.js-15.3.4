import ProductSearchForm from '@/components/products/ProductSearchForm';
import ProductsTable from '@/components/products/ProductsTable';
import Heading from '@/components/ui/Heading';
import { prisma } from '@/src/lib/prisma';

const searchProducts = async (searchTerm: string) => {
  const product = await prisma.product.findMany({
    where: {
      name: {
        contains: searchTerm,
        mode: 'insensitive'
      }
    },
    include: {
      category: true
    }
  })
  return product;
}

const SearchPage = async ({ searchParams }: { searchParams: Promise<{ search: string }> }) => {
  // Await the searchParams promise
  const resolvedSearchParams = await searchParams;
  const products = await searchProducts(resolvedSearchParams.search);

  return (
    <>
      <Heading>Resultados de busqueda: <span>{resolvedSearchParams.search}</span></Heading>

      <div className='flex flex-col lg:flex-row lg:justify-end gap-5'>
        <ProductSearchForm />
      </div>

      {products.length ? (
        <ProductsTable products={products} />
      ) : <p className='text-center text-lg'>No hay resultados</p>}

    </>
  )
}

export default SearchPage;