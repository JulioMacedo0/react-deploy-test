import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { mockProducts, PRODUCT_CATEGORIES } from "../../mocks/productMock";

const productsSearchSchema = z.object({
  category: z.enum(PRODUCT_CATEGORIES).optional(),
  sort: z.enum(["name", "price", "date"]).optional().default("name"),
  page: z.number().min(1).optional().default(1),
});

type productsSearchSchemaType = z.infer<typeof productsSearchSchema>;

export const Route = createFileRoute("/products/")({
  validateSearch: productsSearchSchema,
  component: ProductsComponent,
});

function ProductsComponent() {
  const search = Route.useSearch();
  const { category, sort = "name", page = 1 } = search;

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
        return a.id - b.id;
      case "name":
      default:
        return a.name.localeCompare(b.name);
    }
  });

  // Pagination
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const sortValues: {
    value: productsSearchSchemaType["sort"];
    label: string;
  }[] = [
    { value: "name", label: "Name" },
    { value: "price", label: "Price" },
    { value: "date", label: "Newest" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Products</h1>
        <p className="text-sm sm:text-base text-gray-600">
          Explore our collection with filtering, sorting, and pagination
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Category:
            </label>
            <div className="flex flex-wrap gap-2">
              <Link
                to="/products"
                search={{ ...search, category: undefined, page: 1 }}
                className={`px-3 py-1 rounded-full text-sm transition-colors whitespace-nowrap ${
                  !category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                All
              </Link>
              {PRODUCT_CATEGORIES.map((cat) => (
                <Link
                  key={cat}
                  to="/products"
                  search={{ ...search, category: cat, page: 1 }}
                  className={`px-3 py-1 rounded-full text-sm transition-colors capitalize whitespace-nowrap ${
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

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Sort by:
            </label>
            <div className="flex flex-wrap gap-2">
              {sortValues.map((option) => (
                <Link
                  key={option.value}
                  to="/products"
                  search={{ ...search, sort: option.value, page: 1 }}
                  className={`px-3 py-1 rounded-full text-sm transition-colors whitespace-nowrap ${
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {paginatedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{product.image}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{product.description}</p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                <span className="text-xl sm:text-2xl font-bold text-blue-600">
                  ${product.price}
                </span>
                <Link
                  to="/products/find/$productId"
                  params={{ productId: product.id.toString() }}
                  className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm sm:text-base"
                >
                  View Details
                </Link>
              </div>
              <div className="mt-2 sm:mt-3">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full capitalize">
                  {product.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center items-center gap-2 mb-4">
          <Link
            to="/products"
            search={{ ...search, page: Math.max(1, page - 1) }}
            className={`px-3 py-2 rounded-lg text-sm sm:text-base ${
              page === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
            }`}
            disabled={page === 1}
          >
            Previous
          </Link>

          <div className="flex flex-wrap gap-1 sm:gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <Link
                  key={pageNum}
                  to="/products"
                  search={{ ...search, page: pageNum }}
                  className={`px-2 sm:px-3 py-2 rounded-lg text-sm sm:text-base ${
                    page === pageNum
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                  }`}
                >
                  {pageNum}
                </Link>
              )
            )}
          </div>

          <Link
            to="/products"
            search={{ ...search, page: Math.min(totalPages, page + 1) }}
            className={`px-3 py-2 rounded-lg text-sm sm:text-base ${
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

      <div className="text-center text-sm sm:text-base text-gray-600">
        Showing {paginatedProducts.length} of {filteredProducts.length} products
        {category && ` in "${category}" category`}
      </div>
    </div>
  );
}
