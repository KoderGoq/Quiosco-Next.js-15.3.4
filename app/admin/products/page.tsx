import { redirect } from 'next/navigation';
import ProductsPagination from '@/components/products/ProductsPagination';
import ProductsTable from '@/components/products/ProductsTable';
import Heading from '@/components/ui/Heading';
import { prisma } from '@/src/lib/prisma';
import Link from 'next/link';
import ProductSearchForm from '@/components/products/ProductSearchForm';


const productCount = async () => {
  return await prisma.product.count();
}

const getProducts = async (page: number, pageSize: number) => {

  const skip = (page - 1) * pageSize;

  const products = await prisma.product.findMany({
    take: pageSize,
    skip: skip,
    include: {
      category: true
    }
  });

  return products;
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>;

const ProductsPage = async ({ searchParams }: { searchParams: Promise<{ page?: string }> }) => {

  const params = await searchParams;
  const page = +(params.page ?? 1);
  const pageSize = 10;

  if (page < 0) {
    redirect('/admin/products')
  }

  const productsData = getProducts(page, pageSize);
  const totalProductsData = productCount();
  const [products, totalProducts] = await Promise.all([productsData, totalProductsData]);
  const totalPages = Math.ceil(totalProducts / pageSize);

  if (page > totalPages) {
    redirect('/admin/products')
  }

  return (
    <>
      <Heading>Administrar Productos</Heading>

      <div className='flex flex-col lg:flex-row lg:justify-between gap-5'>
        <Link
          href={'/admin/products/new'}
          className='bg-purple-500 hover:bg-purple-700 text-white w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer'
        >Crear Producto</Link>
        <ProductSearchForm />
      </div>

      <ProductsTable
        products={products}
      />

      <ProductsPagination page={page} totalPages={totalPages} />
    </>
  )
}

export default ProductsPage;