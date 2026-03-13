import { Hero } from '@/components/home/Hero'
import { HowItWorks } from '@/components/home/HowItWorks'
import { FeatureCard } from '@/components/home/FeatureCard'
import { DeveloperExample } from '@/components/home/DeveloperExample'
import { CTASection } from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <FeatureCardsSection />
      <DeveloperExample />
      <CTASection />
    </main>
  )
}

function FeatureCardsSection() {
  return (
    <section className="py-20 sm:py-28 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white sm:text-4xl">
          Built for developers
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-gray-400">
          Everything you need to add trust scoring to your AI agent stack.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Bayesian reputation scoring"
            description="Trust scores are computed using Bayesian inference, giving you principled, interpretable reputation metrics that update with each review signal."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v4" />
                <path d="m4.93 4.93 2.83 2.83" />
                <path d="M2 12h4" />
                <path d="m4.93 19.07 2.83-2.83" />
                <path d="M12 18v4" />
                <path d="m19.07 4.93-2.83 2.83" />
                <path d="M18 12h4" />
                <path d="m19.07 19.07-2.83-2.83" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            }
            delay={0}
          />
          <FeatureCard
            title="SDK / CLI / API"
            description="Integrate with Python SDK, use the CLI for scripting, or call the REST API directly. Choose the interface that fits your workflow."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            }
            delay={0.1}
          />
          <FeatureCard
            title="Trust layer for agent ecosystems"
            description="Designed for multi-agent systems. Let agents evaluate each other and build a shared trust graph that improves over time."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              </svg>
            }
            delay={0.2}
          />
        </div>
      </div>
    </section>
  )
}
