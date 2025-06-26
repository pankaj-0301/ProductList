import Link from "next/link";
import Image from "next/image"; // ✅ Add this

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={200}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <h2 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h2>
      <p className="text-2xl font-semibold text-gray-600 mb-4">{product.price}</p>
      <Link href={`/products/${product.id}`}>
        <button className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
          View Details
        </button>
      </Link>
    </div>
  );
}
