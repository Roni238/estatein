import { LocaleMessageDictionary } from 'vue-i18n';

export type Messages = {
  [key: string]: LocaleMessageDictionary<LocaleMessages>
};

export interface LocaleMessages {
  locale: string
  header: {
    banner:{
        title: string
        link: string
    },
    'nav-links':{
        home: string
        about: string
        properties: string
        services: string
        contact: string
    }
  },
  ui: {
    'input placeholder': {
        'enter your email': string
    }
  },
  prepositions: {
    of: string
  },
  footer: {
    'start explore properties': {
        title: string
        discription: string
        'cta title': string
    },
    lists: {
        home: {
            title: string
            "hero section": string
            features: string,
            properties: string,
            testimonials: string,
            faqs: string
        },
        "about us":{
          "title": string,
          "our story": string,
          "our works": string,
          "how it works": string,
          "our team": string,
          "our clients": string
        },
        properties: {
          title: string,
          portfolio: string,
          categories: string
        },
        services: {
          title: string,
          "valuation mastery": string,
          "strategic marketing": string,
          "negotiation wizardry": string,
          "closing success": string,
          "property management": string
        },
        "contact us": {
          title: string,
          "contact Form": string,
          "our offices": string
        }
    },
    copywriting: string
    terms: string
  },
  pages:{
    home:{
        introduction:{
          title : string,
          description: string,
          buttons:{
            "learn more": string,
            "browse properties": string
          },
          stats:{
            "happy customers" : string,
            "properties for clients": string,
            "years of experience": string
          }
        },
        services:{
          "find your dream home": string,
          "unlock property value": string,
          "effortless property management": string,
          "smart investments, informed decisions": string
        },
        products:{
          title: string,
          discription: string,
          "link-title": string
        },
        reviews:{
          title: string,
          discription: string,
          "link-title": string
        },
        faqs:{
          title: string,
          discription: string,
          "link-title": string
        }
    }
  }
}