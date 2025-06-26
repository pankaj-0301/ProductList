import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to MyShop</h1>
        <p className="text-lg text-gray-600">
          Browse our amazing products on the{" "}
          <a href="/products" className="text-blue-600 underline">
            products page
          </a>
          .
        </p>
      </main>
    </>
  );
}
