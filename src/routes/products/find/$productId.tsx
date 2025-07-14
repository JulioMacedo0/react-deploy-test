import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { mockProducts } from "../../../mocks/productMock";

export const Route = createFileRoute("/products/find/$productId")({
  component: ProductDetailComponent,
  loader: ({ params }) => {
    const product = mockProducts.find(
      (p) => p.id.toString() === params.productId
    );
    if (!product) {
      throw notFound();
    }
    return { product };
  },
});

function ProductDetailComponent() {
  const { product } = Route.useLoaderData();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
          </li>
          <li className="text-gray-500">/</li>
          <li>
            <Link to="/products" className="text-blue-600 hover:text-blue-800">
              Products
            </Link>
          </li>
          <li className="text-gray-500">/</li>
          <li className="text-gray-900 font-medium">{product.name}</li>
        </ol>
      </nav>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8 p-8">
          <div className="flex items-center justify-center bg-gray-50 rounded-lg p-12">
            <div className="text-8xl">{product.image}</div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full mb-3 capitalize">
                {product.category}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-4">
                ${product.price}
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Specifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(product.specs).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between py-2 border-b border-gray-100"
              >
                <span className="font-medium text-gray-700">{key}:</span>
                <span className="text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 px-8 py-6">
          <div className="flex space-x-4">
            <Link
              to="/products"
              className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg text-center font-medium hover:bg-gray-300 transition-colors"
            >
              ← Back to Products
            </Link>
            <Link
              to="/products"
              search={{ category: product.category }}
              className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
            >
              View Similar Products
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Related Products
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {mockProducts
            .filter(
              (p) => p.category === product.category && p.id !== product.id
            )
            .slice(0, 3)
            .map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="text-3xl mb-3">{relatedProduct.image}</div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {relatedProduct.name}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {relatedProduct.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-blue-600">
                    ${relatedProduct.price}
                  </span>
                  <Link
                    to="/products/find/$productId"
                    params={{ productId: relatedProduct.id.toString() }}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    View →
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
