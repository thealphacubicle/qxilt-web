import { getPageMap } from 'nextra/page-map'
import { Layout, Footer } from 'nextra-theme-docs'
import 'nextra-theme-docs/style.css'

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pageMap = await getPageMap()

  return (
    <Layout
      pageMap={pageMap}
      navbar={null}
      footer={
        <Footer>
          MIT {new Date().getFullYear()} © Qxilt.
        </Footer>
      }
      docsRepositoryBase="https://github.com/qxilt/qxilt-web"
      darkMode
      nextThemes={{
        defaultTheme: 'system',
        storageKey: 'qxilt-theme',
      }}
    >
      {children}
    </Layout>
  )
}
