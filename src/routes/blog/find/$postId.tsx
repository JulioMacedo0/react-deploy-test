import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { mockBlogPosts } from "../../../mocks/mockBlog";

export const Route = createFileRoute("/blog/find/$postId")({
  component: BlogPostComponent,
  loader: ({ params }) => {
    const post = mockBlogPosts.find((p) => p.id.toString() === params.postId);
    if (!post) {
      throw notFound();
    }
    return { post };
  },
  validateSearch: () => ({}), // Clear parent search params
});

function BlogPostComponent() {
  const { post } = Route.useLoaderData();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
      {/* Navigation Breadcrumb */}
      <nav className="mb-6 sm:mb-8">
        <ol className="flex flex-wrap items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
          </li>
          <li className="text-gray-500">/</li>
          <li>
            <Link to="/blog" className="text-blue-600 hover:text-blue-800">
              Blog
            </Link>
          </li>
          <li className="text-gray-500">/</li>
          <li className="text-gray-900 font-medium truncate">{post.title}</li>
        </ol>
      </nav>

      {/* Article Header */}
      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <div className="text-6xl sm:text-8xl mb-4 sm:mb-6">
              {post.image}
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full capitalize">
                {post.category}
              </span>
              <span className="text-sm text-gray-500">{post.readTime}</span>
              <span className="text-sm text-gray-500 hidden sm:inline">•</span>
              <span className="text-sm text-gray-500">{post.date}</span>
              <span className="text-sm text-gray-500 hidden sm:inline">•</span>
              <span className="text-sm text-gray-500">
                👁️ {post.popularity} views
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {post.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {post.excerpt}
            </p>
            <div className="mt-4 sm:mt-6">
              <span className="text-sm sm:text-base text-gray-500">
                By {post.author}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-sm sm:prose max-w-none">
            <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg">
                This is a comprehensive guide to understanding the concepts
                discussed in this blog post. The content would typically include
                detailed explanations, code examples, and practical insights
                related to the topic.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">
                Key Concepts
              </h2>

              <p className="text-sm sm:text-base">
                Here we would dive deep into the main concepts, providing
                readers with actionable insights and best practices that they
                can apply in their own projects.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">
                Implementation Details
              </h2>

              <p className="text-sm sm:text-base">
                This section would typically contain code examples, step-by-step
                instructions, and detailed explanations of how to implement the
                concepts discussed.
              </p>

              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg my-6 sm:my-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  💡 Pro Tip
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Always remember to test your implementation thoroughly and
                  consider edge cases that might affect your application's
                  performance and user experience.
                </p>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">
                Conclusion
              </h2>

              <p className="text-sm sm:text-base">
                To wrap up, this post covered the essential aspects of the
                topic, providing you with the knowledge and tools needed to
                successfully implement these concepts in your own projects.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  to="/blog"
                  search={{ searchTerm: tag }}
                  className="inline-flex items-center px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/blog"
              className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 sm:px-6 rounded-lg text-center font-medium hover:bg-gray-300 transition-colors"
            >
              ← Back to Blog
            </Link>
            <Link
              to="/blog"
              search={{ category: post.category }}
              className="flex-1 bg-blue-600 text-white py-3 px-4 sm:px-6 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
            >
              More in {post.category}
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <div className="mt-8 sm:mt-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
          Related Posts
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {mockBlogPosts
            .filter((p) => p.category === post.category && p.id !== post.id)
            .slice(0, 3)
            .map((relatedPost) => (
              <div
                key={relatedPost.id}
                className="bg-white rounded-lg shadow-md p-4 sm:p-6"
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">
                  {relatedPost.image}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                  {relatedPost.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                  {relatedPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-gray-500">
                    {relatedPost.readTime}
                  </span>
                  <Link
                    to="/blog/find/$postId"
                    params={{ postId: relatedPost.id.toString() }}
                    className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
