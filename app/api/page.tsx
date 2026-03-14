'use client'

import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'

const SCALAR_CUSTOM_CSS = `
  :root {
    --scalar-color-accent: #4f46e5;
    --scalar-color-accent-2: #6366f1;
    --scalar-background-accent: #4f46e515;
    --scalar-background-accent-2: #6366f115;
    --refs-content-max-width: min(100%, 1200px);
  }
  #api-reference-page [class*="start-row"] {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 16px !important;
  }
`

export default function ApiPage() {
  return (
    <main id="api-reference-page" className="min-h-[calc(100vh-3.5rem)] w-full">
      <ApiReferenceReact
        configuration={{
          url: '/api/openapi',
          theme: 'purple',
          layout: 'modern',
          showDarkModeToggle: true,
          proxyUrl: 'https://proxy.scalar.com',
          customCss: SCALAR_CUSTOM_CSS,
        }}
      />
    </main>
  )
}
