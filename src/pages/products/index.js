import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import products from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Product Listing</h1>
        <ProductGrid products={products} />
      </main>
    </div>
  );
}
