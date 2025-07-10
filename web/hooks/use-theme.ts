import { Theme } from '@/types/app'
import { useTheme as useBaseTheme } from 'next-themes'
import { useEffect } from 'react'

const useTheme = () => {
  const { theme, resolvedTheme, setTheme, ...rest } = useBaseTheme()
  // 设置主题永远是light
  useEffect(() => {
    setTheme(Theme.light)
  }, [])
  return {
    // only returns 'light' or 'dark' theme
    theme: theme === Theme.system ? resolvedTheme as Theme : theme as Theme,
    ...rest,
  }
}

export default useTheme
