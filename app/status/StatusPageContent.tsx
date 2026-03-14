'use client'

import { useEffect, useState } from 'react'

type ServiceStatus = 'operational' | 'degraded' | 'down'

interface ServiceCheck {
  name: string
  endpoint: string
  status: ServiceStatus
  latency?: number
  error?: string
}

interface HealthResponse {
  services: ServiceCheck[]
  overallStatus: ServiceStatus
  checkedAt: string
}

function StatusIndicator({ status }: { status: ServiceStatus }) {
  const config = {
    operational: {
      bg: 'bg-emerald-500',
      label: 'Operational',
      dot: 'bg-emerald-500',
    },
    degraded: {
      bg: 'bg-amber-500',
      label: 'Degraded',
      dot: 'bg-amber-500',
    },
    down: {
      bg: 'bg-red-500',
      label: 'Down',
      dot: 'bg-red-500',
    },
  }[status]

  return (
    <span className="inline-flex items-center gap-2">
      <span
        className={`h-2.5 w-2.5 rounded-full ${config.dot} animate-pulse`}
        aria-hidden
      />
      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
        {config.label}
      </span>
    </span>
  )
}

export function StatusPageContent() {
  const [data, setData] = useState<HealthResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchHealth = async () => {
    try {
      const res = await fetch('/api/health')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const json: HealthResponse = await res.json()
      setData(json)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to reach services')
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchHealth()
    const interval = setInterval(fetchHealth, 58 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading && !data) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Service Status
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Checking service health...
        </p>
      </main>
    )
  }

  if (error && !data) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Service Status
        </h1>
        <p className="mt-4 text-red-600 dark:text-red-400">{error}</p>
        <button
          onClick={fetchHealth}
          className="mt-4 rounded-lg bg-[#4F46E5] px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-600 transition-colors"
        >
          Retry
        </button>
      </main>
    )
  }

  const overallConfig = {
    operational: {
      bg: 'bg-emerald-500/10 border-emerald-500/30',
      text: 'text-emerald-700 dark:text-emerald-400',
      message: 'All systems operational',
    },
    degraded: {
      bg: 'bg-amber-500/10 border-amber-500/30',
      text: 'text-amber-700 dark:text-amber-400',
      message: 'Some services degraded',
    },
    down: {
      bg: 'bg-red-500/10 border-red-500/30',
      text: 'text-red-700 dark:text-red-400',
      message: 'Service disruption',
    },
  }[data!.overallStatus]

  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
        Service Status
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Real-time status of Qxilt API services.
      </p>

      <div
        className={`mt-8 rounded-lg border px-4 py-3 ${overallConfig.bg} ${overallConfig.text}`}
      >
        <p className="font-medium">{overallConfig.message}</p>
        <p className="mt-1 text-sm opacity-90">
          Last checked: {new Date(data!.checkedAt).toLocaleString()}
        </p>
      </div>

      <ul className="mt-8 space-y-4">
        {data!.services.map((svc) => (
          <li
            key={svc.endpoint}
            className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 px-4 py-3"
          >
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                {svc.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                {svc.endpoint}
              </p>
              {svc.error && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {svc.error}
                </p>
              )}
            </div>
            <div className="flex items-center gap-4">
              {svc.latency != null && (
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {svc.latency}ms
                </span>
              )}
              <StatusIndicator status={svc.status} />
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        Status is checked every 58 minutes.
      </p>
    </main>
  )
}
