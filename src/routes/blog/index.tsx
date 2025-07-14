import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { mockBlogPosts } from "../../mocks/mockBlog";

const blogSearchSchema = z.object({
  page: z.number().min(1).optional().default(1),
  category: z.string().optional(),
  searchTerm: z.string().optional(),
  sort: z.enum(["date", "title", "popularity"]).optional().default("date"),
});

type BlogSearchSchemaType = z.infer<typeof blogSearchSchema>;

export const Route = createFileRoute("/blog/")({
  validateSearch: blogSearchSchema,
  component: BlogComponent,
});

function BlogComponent() {
  const search = Route.useSearch();
  const { page = 1, category, searchTerm, sort = "date" } = search;
  const navigate = Route.useNavigate();

  const sortValues: {
    value: BlogSearchSchemaType["sort"];
    label: string;
  }[] = [
    { value: "date", label: "Latest" },
    { value: "title", label: "Title" },
    { value: "popularity", label: "Popular" },
  ];

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

  const postsPerPage = 3;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  const categories = [...new Set(mockBlogPosts.map((post) => post.category))];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Blog
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
          Discover tutorials, best practices, and insights about TanStack Router
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-4">
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Posts
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search by title, content, or tags..."
                defaultValue={searchTerm || ""}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                onChange={(e) => {
                  const value = e.target.value;

                  navigate({
                    search: { ...search, searchTerm: value, page: 1 },
                  });

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
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-0 sm:space-y-2">
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
          </div>

          {/* Sort Options */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sort By
            </label>
            <div className="space-y-2">
              <div className="grid grid-cols-3 sm:grid-cols-1 gap-2 sm:gap-0 sm:space-y-2">
                {sortValues.map((option) => (
                  <Link
                    key={option.value}
                    to="/blog"
                    search={{ ...search, sort: option.value, page: 1 }}
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors text-center sm:text-left ${
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
                    search={{ ...search, searchTerm: undefined }}
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

      <div className="space-y-6 sm:space-y-8 mb-6 sm:mb-8">
        {paginatedPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="text-3xl sm:text-4xl self-center sm:self-start">
                  {post.image}
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full capitalize">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                    <span className="text-sm text-gray-500 hidden sm:inline">
                      •
                    </span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    <Link
                      to="/blog/find/$postId"
                      params={{ postId: post.id.toString() }}
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                      <span className="text-sm text-gray-500">
                        By {post.author}
                      </span>
                      <span className="text-sm text-gray-500">
                        👁️ {post.popularity} views
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1 sm:gap-2 w-full sm:w-auto">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Link
                          key={tag}
                          to="/blog"
                          search={{ ...search, searchTerm: tag, page: 1 }}
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

      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center items-center gap-2">
          <Link
            to="/blog"
            search={{ ...search, page: Math.max(1, page - 1) }}
            className={`px-3 py-2 rounded-lg text-sm ${
              page === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
            }`}
          >
            Previous
          </Link>

          <div className="hidden sm:flex">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <Link
                  key={pageNum}
                  to="/blog"
                  search={{ ...search, page: pageNum }}
                  className={`px-3 py-2 rounded-lg text-sm ${
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

          <div className="flex sm:hidden">
            <span className="px-3 py-2 text-sm text-gray-600">
              Page {page} of {totalPages}
            </span>
          </div>

          <Link
            to="/blog"
            search={{ ...search, page: Math.min(totalPages, page + 1) }}
            className={`px-3 py-2 rounded-lg text-sm ${
              page === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
            }`}
          >
            Next
          </Link>
        </div>
      )}

      <div className="text-center mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base">
        Showing {paginatedPosts.length} of {filteredPosts.length} posts
        {category && ` in "${category}" category`}
        {searchTerm && ` matching "${searchTerm}"`}
      </div>
    </div>
  );
}
