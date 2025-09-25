import { createI18n } from 'vue-i18n'
import zh from './locales/zh'
import en from './locales/en'

// 获取浏览器语言设置
function getDefaultLocale (): 'zh' | 'en' {
  const browserLang = navigator.language.toLowerCase()
  if (browserLang.startsWith('zh')) {
    return 'zh'
  }
  return 'en'
}

// 从localStorage获取用户选择的语言，如果没有则使用浏览器默认语言
function getStoredLocale (): 'zh' | 'en' {
  const stored = localStorage.getItem('locale') as 'zh' | 'en' | null
  return stored || getDefaultLocale()
}

const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: getStoredLocale(), // 设置默认语言
  fallbackLocale: 'en', // 设置备用语言
  messages: {
    zh,
    en
  }
})

// 切换语言的函数
export function setLocale (locale: 'zh' | 'en') {
  i18n.global.locale.value = locale
  localStorage.setItem('locale', locale)
  document.documentElement.lang = locale
}

// 获取当前语言
export function getCurrentLocale (): 'zh' | 'en' {
  return i18n.global.locale.value
}

export default i18n
