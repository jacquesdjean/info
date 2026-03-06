import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
}

const defaults = {
  siteName: 'Jacques Jean',
  title: 'Jacques Jean — Building Stronger Businesses',
  description: 'Building systems in energy, water, and sales intelligence. Based in Austin, Texas.',
  image: 'https://jacquesjean.info/og-image.png',
  url: 'https://jacquesjean.info',
};

export function SEO({
  title,
  description,
  image,
  url,
  type = 'website',
  publishedTime
}: SEOProps) {
  const seo = {
    title: title ? `${title} | ${defaults.siteName}` : defaults.title,
    description: description || defaults.description,
    image: image || defaults.image,
    url: url || defaults.url,
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jacques Jean",
    "url": "https://jacquesjean.info",
    "image": defaults.image,
    "jobTitle": "Investor & Entrepreneur",
    "description": "Building systems in energy, water, and sales intelligence",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://cal.com/jacquesjean"
    ],
    "knowsAbout": ["energy", "water quality", "sales enablement", "channel sales"]
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={defaults.siteName} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <meta name="robots" content="index, follow" />
      <meta name="author" content="Jacques Jean" />
      <meta name="keywords" content="Jacques Jean, energy, water, sales enablement, channel sales, Austin Texas, entrepreneur, investor" />

      <link rel="canonical" href={seo.url} />

      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
    </Helmet>
  );
}
