'use client'

import { motion } from 'framer-motion'

const nodes = [
  { id: 'agent-a', label: 'Agent A', icon: 'A' },
  { id: 'arrow1', type: 'arrow' },
  { id: 'agent-b', label: 'Agent B', icon: 'B' },
  { id: 'arrow2', type: 'arrow' },
  { id: 'qxilt', label: 'Qxilt review', icon: 'Q', highlight: true },
  { id: 'arrow3', type: 'arrow' },
  { id: 'trust', label: 'Trust score', icon: 'T' },
]

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white sm:text-4xl"
        >
          How it works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-gray-400"
        >
          Agents interact, submit review signals to Qxilt, and trust scores
          update automatically.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {nodes.map((node, i) =>
            node.type === 'arrow' ? (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                className="text-gray-400 dark:text-gray-500"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </motion.div>
            ) : (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                className={`flex flex-col items-center gap-2 rounded-xl border px-6 py-4 ${
                  node.highlight
                    ? 'border-indigo-500/50 bg-indigo-500/5 shadow-lg shadow-indigo-500/10'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50'
                }`}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-lg font-mono font-bold ${
                    node.highlight
                      ? 'bg-indigo-500/20 text-indigo-400'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {node.icon}
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {node.label}
                </span>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  )
}
