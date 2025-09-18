import { SITE_CONFIG, SEO_CONFIG } from '@/lib/constants'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": SITE_CONFIG.name,
    "jobTitle": "Software Developer",
    "description": SEO_CONFIG.descriptions.en,
    "url": SITE_CONFIG.domain,
    "image": `${SITE_CONFIG.domain}${SEO_CONFIG.images.og}`,
    "sameAs": [
      SITE_CONFIG.github,
      SITE_CONFIG.linkedin
    ],
    "knowsAbout": SEO_CONFIG.skills,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CA"
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${SITE_CONFIG.name} Portfolio`,
    "url": SITE_CONFIG.domain,
    "description": `Portfolio website of ${SITE_CONFIG.name}, Software Developer specializing in full-stack development and data science.`,
    "author": {
      "@type": "Person",
      "name": SITE_CONFIG.name
    },
    "inLanguage": ["en", "fr"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
    </>
  );
}