import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { z } from "zod";

// Define search schema for blog filtering and pagination
const blogSearchSchema = z.object({
  page: z.number().min(1).optional().default(1),
  category: z.string().optional(),
  search: z.string().optional(),
  sort: z.enum(["date", "title", "popularity"]).optional().default("date"),
});

export const Route = createFileRoute("/blog")({
  validateSearch: blogSearchSchema,
  component: BlogComponent,
});

// Mock blog posts data
const mockBlogPosts = [
  {
    id: 1,
    title: "Getting Started with TanStack Router",
    excerpt:
      "Learn the basics of TanStack Router and how to set up routing in your React application.",
    content:
      "TanStack Router is a powerful routing solution for React applications...",
    author: "John Doe",
    category: "tutorial",
    date: "2025-01-10",
    readTime: "5 min read",
    image: "📚",
    tags: ["react", "routing", "tutorial"],
    popularity: 1250,
  },
  {
    id: 2,
    title: "Advanced Routing Patterns",
    excerpt:
      "Explore advanced routing patterns including nested routes, layouts, and parameter validation.",
    content:
      "Once you've mastered the basics, it's time to explore more advanced patterns...",
    author: "Jane Smith",
    category: "advanced",
    date: "2025-01-08",
    readTime: "8 min read",
    image: "🚀",
    tags: ["react", "advanced", "patterns"],
    popularity: 890,
  },
  {
    id: 3,
    title: "Type-Safe Search Parameters",
    excerpt:
      "How to implement type-safe search parameters with validation using Zod schemas.",
    content:
      "Type safety is crucial for robust applications. Learn how to validate search params...",
    author: "Mike Johnson",
    category: "tutorial",
    date: "2025-01-05",
    readTime: "6 min read",
    image: "🔍",
    tags: ["typescript", "validation", "zod"],
    popularity: 756,
  },
  {
    id: 4,
    title: "Building a Dashboard with Nested Routes",
    excerpt:
      "Step-by-step guide to building a dashboard with complex nested routing structures.",
    content:
      "Dashboards often require complex layouts with multiple levels of navigation...",
    author: "Sarah Wilson",
    category: "tutorial",
    date: "2025-01-03",
    readTime: "12 min read",
    image: "📊",
    tags: ["dashboard", "nested-routes", "layout"],
    popularity: 432,
  },
  {
    id: 5,
    title: "Performance Optimization Tips",
    excerpt:
      "Best practices for optimizing your TanStack Router application for better performance.",
    content:
      "Performance is key to a great user experience. Here are some optimization tips...",
    author: "Tom Brown",
    category: "performance",
    date: "2025-01-01",
    readTime: "10 min read",
    image: "⚡",
    tags: ["performance", "optimization", "best-practices"],
    popularity: 623,
  },
  {
    id: 6,
    title: "Error Handling and 404 Pages",
    excerpt:
      "Learn how to handle errors gracefully and create custom 404 pages in your router.",
    content:
      "Error handling is an important aspect of any application. Let's explore...",
    author: "Emily Davis",
    category: "advanced",
    date: "2024-12-28",
    readTime: "7 min read",
    image: "🚨",
    tags: ["error-handling", "404", "user-experience"],
    popularity: 345,
  },
];

function BlogComponent() {
  const search = useSearch({ from: "/blog" });
  const { page = 1, category, search: searchTerm, sort = "date" } = search;

  // Filter posts
  let filteredPosts = mockBlogPosts;

  if (category) {
    filteredPosts = filteredPosts.filter((post) => post.category === category);
  }

  if (searchTerm) {
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
  }

  // Sort posts
  filteredPosts.sort((a, b) => {
    switch (sort) {
      case "title":
        return a.title.localeCompare(b.title);
      case "popularity":
        return b.popularity - a.popularity;
      case "date":
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  // Pagination
  const postsPerPage = 3;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  // Get unique categories
  const categories = [...new Set(mockBlogPosts.map((post) => post.category))];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover tutorials, best practices, and insights about TanStack Router
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid md:grid-cols-4 gap-4">
          {/* Search Input */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Posts
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search by title, content, or tags..."
                defaultValue={searchTerm || ""}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => {
                  // In a real app, you'd implement debounced search
                  const value = e.target.value;
                  // Navigate with new search term
                  console.log("Search:", value);
                }}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <div className="space-y-2">
              <Link
                to="/blog"
                search={{ ...search, category: undefined, page: 1 }}
                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                  !category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                All Categories
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat}
                  to="/blog"
                  search={{ ...search, category: cat, page: 1 }}
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors capitalize ${
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sort By
            </label>
            <div className="space-y-2">
              {[
                { value: "date", label: "Latest" },
                { value: "title", label: "Title" },
                { value: "popularity", label: "Popular" },
              ].map((option) => (
                <Link
                  key={option.value}
                  to="/blog"
                  search={{ ...search, sort: option.value as any, page: 1 }}
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
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

        {/* Active Filters */}
        {(category || searchTerm || sort !== "date") && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-500">Active filters:</span>
              {category && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Category: {category}
                  <Link
                    to="/blog"
                    search={{ ...search, category: undefined }}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </Link>
                </span>
              )}
              {searchTerm && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Search: "{searchTerm}"
                  <Link
                    to="/blog"
                    search={{ ...search, search: undefined }}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </Link>
                </span>
              )}
              {sort !== "date" && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Sort: {sort}
                  <Link
                    to="/blog"
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

      {/* Blog Posts Grid */}
      <div className="space-y-8 mb-8">
        {paginatedPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{post.image}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full capitalize">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    <Link
                      to="/blog/$postId"
                      params={{ postId: post.id.toString() }}
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">
                        By {post.author}
                      </span>
                      <span className="text-sm text-gray-500">
                        👁️ {post.popularity} views
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Link
                          key={tag}
                          to="/blog"
                          search={{ ...search, search: tag, page: 1 }}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* No Results */}
      {paginatedPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No posts found
          </h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search terms or filters to find what you're
            looking for.
          </p>
          <Link
            to="/blog"
            search={{}}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear all filters
          </Link>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2">
          <Link
            to="/blog"
            search={{ ...search, page: Math.max(1, page - 1) }}
            className={`px-3 py-2 rounded-lg ${
              page === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
            }`}
          >
            Previous
          </Link>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <Link
                key={pageNum}
                to="/blog"
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
            to="/blog"
            search={{ ...search, page: Math.min(totalPages, page + 1) }}
            className={`px-3 py-2 rounded-lg ${
              page === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
            }`}
          >
            Next
          </Link>
        </div>
      )}

      {/* Results Info */}
      <div className="text-center mt-6 text-gray-600">
        Showing {paginatedPosts.length} of {filteredPosts.length} posts
        {category && ` in "${category}" category`}
        {searchTerm && ` matching "${searchTerm}"`}
      </div>
    </div>
  );
}
