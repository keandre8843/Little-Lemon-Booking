import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SEO({ 
  title = 'Little Lemon - Mediterranean Restaurant in Chicago',
  description = 'Little Lemon is a charming neighborhood bistro serving authentic Mediterranean cuisine with a modern twist in Chicago.',
  image = '/images/restaurant-hero.jpg',
  type = 'website'
}) {
  const location = useLocation();
  const siteUrl = 'https://littlelemon.com';
  const currentUrl = `${siteUrl}${location.pathname}`;

  useEffect(() => {
    document.title = title;

    updateMetaTag('description', description);

    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', `${siteUrl}${image}`, 'property');
    updateMetaTag('og:url', currentUrl, 'property');
    updateMetaTag('og:type', type, 'property');

    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', title, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', `${siteUrl}${image}`, 'name');

  }, [title, description, image, type, currentUrl, siteUrl]);

  return null;
}

function updateMetaTag(name, content, attribute = 'name') {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}

export default SEO;