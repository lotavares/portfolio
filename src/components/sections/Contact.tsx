'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function Contact() {
  const t = useTranslations('Contact')

  const contactLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/lotavares',
      icon: () => <img src="/github-mark.svg" alt="GitHub" className="w-8 h-8" />,
      label: 'Visit my GitHub profile'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/lbtavares',
      icon: () => <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />,
      label: 'Connect with me on LinkedIn'
    },
    {
      name: 'Email',
      href: 'mailto:lbotelhotavares@gmail.com',
      icon: () => <img src="/mail.svg" alt="Mail" className="w-8 h-8" />,
      label: 'Send me an email'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">
            {t('title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {contactLinks.map((contact) => {
            const IconComponent = contact.icon
            return (
              <motion.a
                key={contact.name}
                href={contact.href}
                target={contact.name !== 'Email' ? '_blank' : undefined}
                rel={contact.name !== 'Email' ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group text-center"
                aria-label={contact.label}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-4 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform duration-300">
                    <div className="invert brightness-0">
                      <IconComponent />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {contact.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      <span className="text-sm">
                        {t(`links.${contact.name.toLowerCase()}`)}
                      </span>
                      <ExternalLink size={14} />
                    </div>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
