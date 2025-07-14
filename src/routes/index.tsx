import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-8">
            <svg
              className="w-16 h-16 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 5v4M16 5v4"
              />
            </svg>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Welcome to Our Demo
          </h1>
          <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
            Explore a comprehensive example of modern web development with{" "}
            <span className="text-blue-600 font-semibold">TanStack Router</span>
            , <span className="text-blue-600 font-semibold">React</span>, and{" "}
            <span className="text-blue-600 font-semibold">Tailwind CSS</span>
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <Link
              to="/about"
              className="bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all hover:shadow-lg hover:scale-105 inline-flex items-center"
            >
              Learn More
              <svg
                className="ml-3 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
            <Link
              to="/products"
              className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all hover:shadow-lg hover:scale-105 border-2 border-blue-200"
            >
              Explore Products
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <Link
            to="/products"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border border-gray-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Products</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Browse our product catalog with advanced filtering, search, and
              dynamic routing
            </p>
            <div className="mt-6 text-blue-600 font-semibold inline-flex items-center">
              Explore →
            </div>
          </Link>

          <Link
            to="/dashboard"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border border-gray-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-6 group-hover:from-green-200 group-hover:to-green-300 transition-all">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Dashboard</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Experience nested layouts and complex navigation with our admin
              dashboard
            </p>
            <div className="mt-6 text-green-600 font-semibold inline-flex items-center">
              Enter →
            </div>
          </Link>

          <Link
            to="/blog"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border border-gray-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-6 group-hover:from-purple-200 group-hover:to-purple-300 transition-all">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Blog</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Discover content management with search, filtering, and URL state
              management
            </p>
            <div className="mt-6 text-purple-600 font-semibold inline-flex items-center">
              Read →
            </div>
          </Link>

          <Link
            to="/about"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border border-gray-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-orange-300 transition-all">
              <svg
                className="w-8 h-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">About</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Learn about TanStack Router's features, capabilities, and best
              practices
            </p>
            <div className="mt-6 text-orange-600 font-semibold inline-flex items-center">
              Discover →
            </div>
          </Link>
        </div>

        <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What You'll Find in This Demo
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">8+</div>
              <div className="text-gray-600 font-medium">Pages & Routes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">4</div>
              <div className="text-gray-600 font-medium">Nested Layouts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                100%
              </div>
              <div className="text-gray-600 font-medium">Type Safety</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">∞</div>
              <div className="text-gray-600 font-medium">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
