'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Globe } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

const languages = [
  {
    code: 'en',
    name: 'English',
    flag: '🇨🇦',
    shortName: 'EN'
  },
  {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷',
    shortName: 'FR'
  }
]

export function LanguageSwitch() {
  const router = useRouter()
  const pathname = usePathname()

  const locale = pathname.split('/')[1] || 'en'

  const switchLanguage = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '')
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  const currentLanguage = languages.find(lang => lang.code === locale)

  return (
    <Select value={locale} onValueChange={switchLanguage}>
      <SelectTrigger className="w-[100px] h-10">
        <SelectValue>
          <div className="flex items-center gap-2">
            <Globe size={16} />
            <span className="hidden sm:inline font-medium">
              {currentLanguage?.shortName}
            </span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem
            key={language.code}
            value={language.code}
            className="cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{language.flag}</span>
              <span className="font-medium">{language.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}