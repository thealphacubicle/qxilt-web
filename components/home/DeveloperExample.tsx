'use client'

import { motion } from 'framer-motion'
import { CopyButton } from '@/components/ui/CopyButton'

const pythonCode = `from qxilt import Client

# Initialize the Qxilt client
client = Client(api_key="your_api_key")

# Submit a review after Agent A interacts with Agent B
client.reviews.create(
    reviewer_id="agent_a",
    subject_id="agent_b",
    rating=0.9,
    context={"task": "code_review", "duration_seconds": 120}
)

# Fetch the trust score for any agent
score = client.scores.get("agent_b")
print(f"Trust score: {score.value:.2f}")  # e.g. 0.87`

export function DeveloperExample() {
  return (
    <section className="py-20 sm:py-28 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Developer example
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Use the Python SDK to submit reviews and fetch trust scores in a few
            lines of code.
          </p>

          <div className="mt-8 rounded-xl overflow-hidden border border-gray-700/50 bg-[#0B0F19] shadow-xl">
            <div className="flex items-center justify-between px-4 py-2 bg-[#1e1e2e] border-b border-gray-700/50">
              <span className="text-xs text-gray-500 font-mono">example.py</span>
              <CopyButton text={pythonCode} />
            </div>
            <pre className="p-4 overflow-x-auto font-mono text-sm text-gray-300">
              <code>
                {pythonCode.split('\n').map((line, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="w-8 text-right text-gray-600 select-none shrink-0">
                      {i + 1}
                    </span>
                    <span>{line || '\u00A0'}</span>
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
