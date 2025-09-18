import { Metadata } from 'next'
import { SITE_CONFIG, SEO_CONFIG } from '@/lib/constants'

interface GenerateMetadataProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const { locale } = await params

  const isEnglish = locale === 'en'

  return {
    title: isEnglish ? SEO_CONFIG.titles.en : SEO_CONFIG.titles.fr,
    description: isEnglish ? SEO_CONFIG.descriptions.en : SEO_CONFIG.descriptions.fr,
    keywords: [...(isEnglish ? SEO_CONFIG.keywords.en : SEO_CONFIG.keywords.fr)],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    metadataBase: new URL(SITE_CONFIG.domain),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'fr': '/fr',
      },
    },
    openGraph: {
      type: 'website',
      locale: isEnglish ? 'en_US' : 'fr_FR',
      url: `/${locale}`,
      siteName: 'Lorena Tavares Portfolio',
      title: isEnglish ? SEO_CONFIG.titles.en : SEO_CONFIG.titles.fr,
      description: isEnglish ? SEO_CONFIG.descriptions.en : SEO_CONFIG.descriptions.fr,
      images: [
        {
          url: SEO_CONFIG.images.og,
          width: 1200,
          height: 630,
          alt: isEnglish
            ? `${SITE_CONFIG.name} - Software Developer`
            : `${SITE_CONFIG.name} - Développeuse Logiciel`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEnglish ? SEO_CONFIG.titles.en : SEO_CONFIG.titles.fr,
      description: isEnglish ? SEO_CONFIG.shortDescriptions.en : SEO_CONFIG.shortDescriptions.fr,
      images: [SEO_CONFIG.images.og],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: SEO_CONFIG.images.favicon,
      apple: SEO_CONFIG.images.apple,
    },
    other: {
      'theme-color': '#000000',
      'color-scheme': 'light dark',
    },
  }
}