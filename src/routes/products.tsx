import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { z } from "zod";

// Define search schema for type safety
const productsSearchSchema = z.object({
  category: z.string().optional(),
  sort: z.enum(["name", "price", "date"]).optional(),
  page: z.number().min(1).optional().default(1),
});

export const Route = createFileRoute("/products")({
  validateSearch: productsSearchSchema,
  component: ProductsComponent,
});

// Mock data
const mockProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199.99,
    category: "electronics",
    image: "🎧",
    description: "High-quality wireless headphones with noise cancellation",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    category: "electronics",
    image: "⌚",
    description: "Feature-rich smartwatch with health tracking",
  },
  {
    id: 3,
    name: "Coffee Mug",
    price: 24.99,
    category: "home",
    image: "☕",
    description: "Premium ceramic coffee mug with thermal insulation",
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: 79.99,
    category: "accessories",
    image: "💻",
    description: "Ergonomic aluminum laptop stand for better posture",
  },
  {
    id: 5,
    name: "Desk Lamp",
    price: 89.99,
    category: "home",
    image: "💡",
    description:
      "LED desk lamp with adjustable brightness and color temperature",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 59.99,
    category: "accessories",
    image: "🖱️",
    description: "Precision wireless mouse with ergonomic design",
  },
];

function ProductsComponent() {
  const search = useSearch({ from: "/products" });
  const { category, sort = "name", page = 1 } = search;

  // Filter and sort products
  let filteredProducts = mockProducts;

  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  filteredProducts.sort((a, b) => {
    switch (sort) {
      case "price":
        return a.price - b.price;
      case "date":
        return a.id - b.id; // Using id as date proxy
      case "name":
      default:
        return a.name.localeCompare(b.name);
    }
  });

  // Pagination
  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Products</h1>
        <p className="text-gray-600">
          Explore our collection with filtering, sorting, and pagination
        </p>
      </div>

      {/* Filters and Sorting */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-wrap gap-4 items-center">
          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">
              Category:
            </label>
            <div className="flex space-x-2">
              <Link
                to="/products"
                search={{ ...search, category: undefined, page: 1 }}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  !category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                All
              </Link>
              {["electronics", "home", "accessories"].map((cat) => (
                <Link
                  key={cat}
                  to="/products"
                  search={{ ...search, category: cat, page: 1 }}
                  className={`px-3 py-1 rounded-full text-sm transition-colors capitalize ${
                    category === cat
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">
              Sort by:
            </label>
            <div className="flex space-x-2">
              {[
                { value: "name", label: "Name" },
                { value: "price", label: "Price" },
                { value: "date", label: "Newest" },
              ].map((option) => (
                <Link
                  key={option.value}
                  to="/products"
                  search={{ ...search, sort: option.value as any, page: 1 }}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    sort === option.value
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {option.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Active Filters Display */}
        {(category || search.sort) && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Active filters:</span>
              {category && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Category: {category}
                  <Link
                    to="/products"
                    search={{ ...search, category: undefined }}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </Link>
                </span>
              )}
              {search.sort && search.sort !== "name" && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Sort: {search.sort}
                  <Link
                    to="/products"
                    search={{ ...search, sort: undefined }}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </Link>
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
        {paginatedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <div className="text-4xl mb-4">{product.image}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">
                  ${product.price}
                </span>
                <Link
                  to="/products/$productId"
                  params={{ productId: product.id.toString() }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
              <div className="mt-2">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full capitalize">
                  {product.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2">
          <Link
            to="/products"
            search={{ ...search, page: Math.max(1, page - 1) }}
            className={`px-3 py-2 rounded-lg ${
              page === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
            }`}
            disabled={page === 1}
          >
            Previous
          </Link>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <Link
                key={pageNum}
                to="/products"
                search={{ ...search, page: pageNum }}
                className={`px-3 py-2 rounded-lg ${
                  page === pageNum
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                }`}
              >
                {pageNum}
              </Link>
            )
          )}

          <Link
            to="/products"
            search={{ ...search, page: Math.min(totalPages, page + 1) }}
            className={`px-3 py-2 rounded-lg ${
              page === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
            }`}
            disabled={page === totalPages}
          >
            Next
          </Link>
        </div>
      )}

      {/* Results Info */}
      <div className="text-center mt-6 text-gray-600">
        Showing {paginatedProducts.length} of {filteredProducts.length} products
        {category && ` in "${category}" category`}
      </div>
    </div>
  );
}
