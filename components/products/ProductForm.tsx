import { prisma } from '@/src/lib/prisma';
import ImageUpload from './ImageUpload';
import { Product } from '@/generated/prisma';


const getCategories = async () => {
  return await prisma.category.findMany()
}

type ProductFormProps = {
  product?: Product
}

const ProductForm = async ({ product }: ProductFormProps) => {

  const categories = await getCategories();

  return (
    <>
      <div className="space-y-2">
        <label
          className="text-slate-800"
          htmlFor="name"
        >Nombre:</label>
        <input
          id="name"
          type="text"
          name="name"
          className="block w-full p-3 bg-slate-100"
          placeholder="Nombre Producto"
          defaultValue={product?.name}
        />
      </div>

      <div className="space-y-2">
        <label
          className="text-slate-800"
          htmlFor="price"
        >Precio:</label>
        <input
          id="price"
          name="price"
          className="block w-full p-3 bg-slate-100"
          placeholder="Precio Producto"
          defaultValue={product?.price}
        />
      </div>

      <div className="space-y-2">
        <label
          className="text-slate-800"
          htmlFor="categoryId"
        >Categoría:</label>
        <select
          className="block w-full p-3 bg-slate-100"
          id="categoryId"
          name="categoryId"
          defaultValue={product?.categoryId}
        >
          <option value="">-- Seleccione --</option>
          {categories.map(categoria => (
            < option key={categoria.id} value={categoria.id} > {categoria.name}</option>
          ))}
        </select>
      </div >
      <ImageUpload image={product?.image} />
    </>
  )
}

export default ProductForm;