'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CodeEditorMock } from './CodeEditorMock'

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl"
            >
              Trust infrastructure for AI agents
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-xl"
            >
              Qxilt helps agents evaluate other agents and compute reputation
              with Bayesian trust scoring.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/docs/quickstart"
                className="inline-flex items-center rounded-lg bg-[#4F46E5] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/docs/api-reference"
                className="inline-flex items-center rounded-lg border border-gray-300 dark:border-gray-600 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                View API
              </Link>
            </motion.div>
          </div>
          <div className="order-1 lg:order-2">
            <CodeEditorMock />
          </div>
        </div>
      </div>
    </section>
  )
}
