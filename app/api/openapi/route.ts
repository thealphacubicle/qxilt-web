const OPENAPI_URL = 'https://qxilt-api.koyeb.app/openapi.json'
const API_BASE = 'https://qxilt-api.koyeb.app'

export async function GET() {
  const res = await fetch(OPENAPI_URL, { cache: 'no-store' })
  if (!res.ok) {
    return new Response(null, { status: res.status })
  }
  const json = (await res.json()) as Record<string, unknown>
  const spec = {
    ...json,
    servers: [{ url: API_BASE, description: 'Production' }],
    'x-tagGroups': [
      { name: 'Reviews', tags: ['reviews'] },
      { name: 'Reputation', tags: ['reputation'] },
      { name: 'Reputation Health', tags: ['reputation-health'] },
    ],
  }
  return Response.json(spec, {
    headers: {
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate',
    },
  })
}
