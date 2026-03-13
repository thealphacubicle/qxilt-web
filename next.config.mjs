import nextra from 'nextra'

const withNextra = nextra({
  contentDirBasePath: '/docs',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js options
}

export default withNextra(nextConfig)
