const API_BASE = 'https://qxilt-api.koyeb.app'
const TIMEOUT_MS = 5000

type ServiceStatus = 'operational' | 'degraded' | 'down'

interface ServiceCheck {
  name: string
  endpoint: string
  status: ServiceStatus
  latency?: number
  error?: string
}

async function checkEndpoint(
  name: string,
  path: string
): Promise<ServiceCheck> {
  const url = `${API_BASE}${path}`
  const start = Date.now()

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS)

    const res = await fetch(url, {
      signal: controller.signal,
      cache: 'no-store',
    })

    clearTimeout(timeoutId)
    const latency = Date.now() - start

    if (res.ok) {
      return {
        name,
        endpoint: path,
        status: 'operational',
        latency,
      }
    }

    return {
      name,
      endpoint: path,
      status: 'degraded',
      latency,
      error: `HTTP ${res.status}`,
    }
  } catch (err) {
    const latency = Date.now() - start
    const error =
      err instanceof Error ? err.message : 'Unknown error'
    return {
      name,
      endpoint: path,
      status: 'down',
      latency,
      error,
    }
  }
}

export async function GET() {
  const checks = await Promise.all([
    checkEndpoint('Reviews (Liveness)', '/reviews/healthz'),
    checkEndpoint('Reviews (Readiness)', '/reviews/readyz'),
    checkEndpoint('Reputation (Liveness)', '/reputation/healthz'),
    checkEndpoint('Reputation (Readiness)', '/reputation/readyz'),
  ])

  const hasDown = checks.some((c) => c.status === 'down')
  const hasDegraded = checks.some((c) => c.status === 'degraded')
  const overallStatus: ServiceStatus = hasDown
    ? 'down'
    : hasDegraded
      ? 'degraded'
      : 'operational'

  return Response.json({
    services: checks,
    overallStatus,
    checkedAt: new Date().toISOString(),
  })
}
