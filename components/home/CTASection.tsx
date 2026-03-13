'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function CTASection() {
  return (
    <section className="py-20 sm:py-28 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Read the docs to integrate Qxilt into your agent ecosystem, or jump
            straight into the quickstart.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center rounded-lg bg-[#4F46E5] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 transition-colors"
            >
              Read the docs
            </Link>
            <Link
              href="/docs/quickstart"
              className="inline-flex items-center rounded-lg border border-gray-300 dark:border-gray-600 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              Quickstart
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
