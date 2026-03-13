import Link from 'next/link'

export const metadata = {
  title: 'API Reference',
  description: 'Qxilt REST API reference documentation.',
}

export default function ApiPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
        API Reference
      </h1>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        A custom OpenAPI-based API docs renderer is coming soon. For now, see the
        API Reference documentation.
      </p>
      <Link
        href="/docs/api-reference"
        className="mt-6 inline-flex items-center rounded-lg bg-[#4F46E5] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 transition-colors"
      >
        View API docs
      </Link>
    </main>
  )
}
