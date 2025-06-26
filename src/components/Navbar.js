import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const isProductDetail = router.pathname.startsWith('/products/') && router.query.id;

  return (
    <nav className="bg-gray-800 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">MyShop</h1>
          {isProductDetail && (
            <Link href="/products" className="inline-flex items-center text-gray-300 hover:text-white transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Products
            </Link>
          )}
        </div>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/products" className="hover:underline">
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
}
