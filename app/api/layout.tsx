import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'API Reference',
  description: 'Qxilt REST API reference documentation.',
}

export default function ApiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
