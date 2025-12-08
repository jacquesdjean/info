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
  description: 'Investing in water & energy freedom. Based in Austin, Texas.',
  image: 'https://framerusercontent.com/images/JApsSortn8lDy0Tsl66p6wcrM8.jpeg',
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
    "description": "Investing in water & energy freedom",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "addressCountry": "US"
    }
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

      <link rel="canonical" href={seo.url} />

      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
    </Helmet>
  );
}
