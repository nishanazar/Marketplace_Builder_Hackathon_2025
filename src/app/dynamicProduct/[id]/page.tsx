
import DynamicProductPage from '@/app/components/DynamicProductPage';
import { client } from '@/sanity/lib/client';


export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  // Sanity query to fetch product data
  const query = await client.fetch(`*[_type == "products" && _id == "${params.id}"]{
    _id,
    name,
    price,
    description,
    category,
    image,
    colors,
    sizes,
    discountPercent
  }`);

 // Check if product exists
  const product = query[0]


 
  return (
  <div>
  <DynamicProductPage product={product}/>
  </div>

  );
}
