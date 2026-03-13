'use client'

import { motion } from 'framer-motion'

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  delay?: number
}

export function FeatureCard({ title, description, icon, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-6 transition-shadow hover:shadow-lg hover:shadow-indigo-500/5 hover:border-indigo-500/30"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-500/20 transition-colors">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  )
}
