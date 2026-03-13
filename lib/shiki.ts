import { codeToHtml } from 'shiki'

const themes = {
  dark: 'github-dark',
  light: 'github-light',
} as const

export async function highlightCode(
  code: string,
  lang: string = 'python',
  themeKey: keyof typeof themes = 'dark'
) {
  return codeToHtml(code, {
    lang,
    theme: themes[themeKey],
  })
}
