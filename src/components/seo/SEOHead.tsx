import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
  structuredData?: object;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  language?: string;
  alternateLanguages?: { hreflang: string; href: string }[];
  robotsAdvanced?: string;
  contentType?: string;
  geoPosition?: string;
  ICBM?: string;
}

export function SEOHead({
  title = "Momta 2028 - AI Robots & Future Robotics | Friendly Robot Technology",
  description = "Momta 2028: Leading AI robots and friendly robotics technology. Best robots for home automation, cheap robots with advanced AI. Join the future of robotics - launching 2028.",
  keywords = "AI robots, friendly robots, cheap robots, best robots, future of robotics, Momta robotics, artificial intelligence robots, home automation robots, robot technology 2028, serene intelligence",
  canonical = "https://momta.org",
  ogImage = "https://momta.org/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  noIndex = false,
  structuredData,
  publishedTime,
  modifiedTime,
  author = "Momta Technology",
  language = "en",
  alternateLanguages,
  robotsAdvanced,
  contentType = "website",
  geoPosition,
  ICBM
}: SEOHeadProps) {
  // Generate additional Open Graph tags based on content type
  const generateArticleTags = () => {
    if (ogType !== 'article') return null;
    
    return (
      <>
        {publishedTime && <meta property="article:published_time" content={publishedTime} />}
        {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
        {author && <meta property="article:author" content={author} />}
        <meta property="article:section" content="Technology" />
        <meta property="article:tag" content="AI Robots" />
        <meta property="article:tag" content="Robotics" />
        <meta property="article:tag" content="Home Automation" />
      </>
    );
  };

  // Generate hreflang tags for international SEO
  const generateHreflangTags = () => {
    if (!alternateLanguages || alternateLanguages.length === 0) return null;
    
    return alternateLanguages.map((alt, index) => (
      <link key={index} rel="alternate" hrefLang={alt.hreflang} href={alt.href} />
    ));
  };

  // Default structured data if none provided
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Momta 2028",
    "url": "https://momta.org",
    "logo": "https://momta.org/logo.png",
    "sameAs": [
      "https://twitter.com/momta2028",
      "https://www.facebook.com/momta2028",
      "https://www.linkedin.com/company/momta2028"
    ],
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+1-800-MOMTA-AI",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "en"
    }]
  };

  const jsonLd = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Character Set & Viewport */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content={robotsAdvanced || "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      )}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Momta 2028" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Momta 2028 - AI Robots and Future Robotics" />
      {generateArticleTags()}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@momta2028" />
      <meta name="twitter:creator" content="@momta2028" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Momta 2028 - AI Robots and Future Robotics" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1E7EFF" />
      <meta name="msapplication-TileColor" content="#1E7EFF" />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      
      {/* Enhanced SEO Meta Tags */}
      <meta name="application-name" content="Momta 2028" />
      <meta name="apple-mobile-web-app-title" content="Momta 2028" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-tap-highlight" content="no" />
      
      {/* Content Type & Language */}
      <meta http-equiv="Content-Type" content={`text/html; charset=utf-8`} />
      <meta name="language" content={language} />
      <meta name="content-language" content={language} />
      
      {/* Geo Tags for Local SEO */}
      {geoPosition && <meta name="geo.position" content={geoPosition} />}
      {ICBM && <meta name="ICBM" content={ICBM} />}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      
      {/* Preload Critical Resources */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
        as="style"
      />
      <link rel="preload" href={ogImage} as="image" />
      
      {/* DNS Prefetch for External Resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//supabase.co" />
      <link rel="dns-prefetch" href="//cdn.momta.org" />
      
      {/* Preconnect to critical external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Hreflang for International SEO */}
      {generateHreflangTags()}
      
      {/* Favicon and App Icons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1E7EFF" />
      <link rel="shortcut icon" href="/favicon.ico" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
