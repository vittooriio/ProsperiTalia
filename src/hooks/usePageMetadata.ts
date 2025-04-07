import { useEffect } from 'react';

interface PageMetadata {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImageUrl?: string;
  ogType?: string;
  jsonLd?: Record<string, any>; // Oggetto JSON-LD
}

// Funzione helper per creare o aggiornare un meta tag
const setMetaTag = (name: string, content: string, isProperty: boolean = false) => {
  let element = document.querySelector(isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    if (isProperty) {
      element.setAttribute('property', name);
    } else {
      element.setAttribute('name', name);
    }
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
  return element; // Ritorna l'elemento per poterlo rimuovere nel cleanup
};

// Funzione helper per creare o aggiornare il link canonico
const setCanonicalLink = (href: string) => {
   let element = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
   if (!element) {
       element = document.createElement('link');
       element.setAttribute('rel', 'canonical');
       document.head.appendChild(element);
   }
   element.setAttribute('href', href);
   return element;
};

// Funzione helper per creare o aggiornare lo script JSON-LD
const setJsonLdScript = (jsonData: Record<string, any> | null) => {
    const scriptId = 'json-ld-structured-data';
    let element = document.getElementById(scriptId);

    // Rimuovi script esistente se presente
    if (element) {
        element.remove();
    }

    // Se ci sono nuovi dati, crea e aggiungi lo script
    if (jsonData) {
        element = document.createElement('script');
        element.id = scriptId;
        (element as HTMLScriptElement).type = 'application/ld+json';
        element.innerHTML = JSON.stringify(jsonData);
        document.head.appendChild(element);
        return element; // Ritorna l'elemento per poterlo rimuovere nel cleanup
    }
    return null; // Nessuno script da rimuovere nel cleanup se jsonData è null
};


export function usePageMetadata({
  title,
  description,
  canonicalUrl,
  ogImageUrl,
  ogType = 'website',
  jsonLd,
}: PageMetadata) {
  useEffect(() => {
    const siteName = "ProsperItalia"; // Metti il nome del tuo sito
    const fullTitle = `${title} | ${siteName}`;
    const originalTitle = document.title;

    // Aggiorna titolo
    document.title = fullTitle;

    // Lista dei tag gestiti per il cleanup
    const managedElements: (Element | null)[] = [];

    // Aggiorna/Crea meta description
    managedElements.push(setMetaTag('description', description));

    // Aggiorna/Crea link canonical
    if (canonicalUrl) {
      managedElements.push(setCanonicalLink(canonicalUrl));
    } else {
        // Rimuovi se non fornito
        const canonicalElement = document.querySelector('link[rel="canonical"]');
        if (canonicalElement) canonicalElement.remove();
    }

    // Aggiorna/Crea Open Graph tags
    managedElements.push(setMetaTag('og:title', fullTitle, true));
    managedElements.push(setMetaTag('og:description', description, true));
    managedElements.push(setMetaTag('og:type', ogType, true));
    managedElements.push(setMetaTag('og:site_name', siteName, true));
    if (canonicalUrl) {
       managedElements.push(setMetaTag('og:url', canonicalUrl, true));
    }
    if (ogImageUrl) {
      managedElements.push(setMetaTag('og:image', ogImageUrl, true));
    }

    // Aggiorna/Crea Twitter Card tags (base)
    managedElements.push(setMetaTag('twitter:card', 'summary_large_image'));
    managedElements.push(setMetaTag('twitter:title', fullTitle));
    managedElements.push(setMetaTag('twitter:description', description));
    if (ogImageUrl) {
      managedElements.push(setMetaTag('twitter:image', ogImageUrl));
    }

    // Aggiorna/Crea JSON-LD
    const jsonLdElement = setJsonLdScript(jsonLd || null);
    if (jsonLdElement) {
        managedElements.push(jsonLdElement);
    }


    // Funzione di Cleanup: viene eseguita quando il componente viene smontato
    return () => {
      // Ripristina titolo originale (o imposta un default)
      document.title = originalTitle || siteName;

      // Qui potresti rimuovere i tag specifici aggiunti da questa pagina,
      // ma è spesso sufficiente che la pagina successiva li sovrascriva.
      // Se una pagina non definisce un tag (es. og:image), potresti volerlo rimuovere esplicitamente.
      // Per semplicità, qui ci affidiamo alla sovrascrittura dalla pagina successiva.
      // Rimuoviamo solo JSON-LD per sicurezza, dato che ha un ID
       const existingJsonLd = document.getElementById('json-ld-structured-data');
       if (existingJsonLd) existingJsonLd.remove();

       // Potresti implementare una rimozione più robusta se necessario, ad es.:
       // managedElements.forEach(el => el?.remove());
    };
  }, [title, description, canonicalUrl, ogImageUrl, ogType, jsonLd]); // riesegui se i dati cambiano
}