import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from '@/mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props: {
  params: Promise<{ mdxPath?: string[] }>
}) {
  const params = await props.params
  const mdxPath = params.mdxPath ?? []
  const { metadata } = await importPage(mdxPath)
  return metadata
}

const Wrapper = useMDXComponents().wrapper

export default async function DocsPage(props: {
  params: Promise<{ mdxPath?: string[] }>
}) {
  const params = await props.params
  const mdxPath = params.mdxPath ?? []
  const { default: MDXContent, toc, metadata, sourceCode } = await importPage(
    mdxPath
  )
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
