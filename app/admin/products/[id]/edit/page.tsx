import EditProductForm from '@/components/products/EditProductForm';
import ProductForm from '@/components/products/ProductForm';
import GobackButtom from '@/components/ui/GobackButtom';
import Heading from '@/components/ui/Heading';
import { prisma } from '@/src/lib/prisma';
import { notFound } from 'next/navigation';


const getProductById = async (id: number) => {
  const product = await prisma.product.findUnique({
    where: {
      id
    }
  })
  // If product not found, redirect to 404 page
  if (!product) {
    notFound();
  }
  return product;
}



const EditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await getProductById(+id);

  return (
    <>
      <Heading>Editar Producto: {product.name}</Heading>
      <GobackButtom />

      <EditProductForm>
        <ProductForm product={product} />
      </EditProductForm>
    </>
  )
}

export default EditPage;