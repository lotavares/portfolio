'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ExternalLink, Heart } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export function Footer() {
  const t = useTranslations('Footer')
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/lotavares',
      icon: () => <img src="/github-mark.svg" alt="GitHub" className="w-5 h-5 dark:invert" />,
      label: 'Visit my GitHub profile'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/lbtavares',
      icon: () => <img src="/linkedin-mark.png" alt="LinkedIn" className="w-6 h-5" />,
      label: 'Connect with me on LinkedIn'
    },
    {
      name: 'Email',
      href: 'mailto:lbotelhotavares@gmail.com',
      icon: () => <img src="/gmail-mark.svg" alt="Gmail" className="w-5 h-5" />,

      label: 'Send me an email'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">{t('myName')}</h3>
            <p className="text-muted-foreground max-w-xs">
              {t('description')}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="gap-2"
            >
              <ExternalLink size={16} />
              {t('backToTop')}
            </Button>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{t('quickLinks')}</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { label: t('nav.about'), id: 'about' },
                { label: t('nav.projects'), id: 'projects' },
                { label: t('nav.contact'), id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    const element = document.getElementById(item.id)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{t('connect')}</h4>
            <div className="flex space-x-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <IconComponent />
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            &copy; {currentYear} {t('myName')}. {t('copyright')}
          </p>

          <div className="flex items-center space-x-1 text-muted-foreground text-sm">
            <span>{t('madeWith')}</span>
            <Heart size={14} className="text-red-500 fill-current" />
            <span>{t('using')}</span>
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Next.js
            </Link>
            <span>&</span>
            <Link
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Tailwind CSS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}