import type { MetadataRoute } from 'next'

const SITE_URL = 'https://www.sequoiadrone.ca'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = [
    { path: '/',             priority: 1.0, changeFrequency: 'weekly' as const  },
    { path: '/services',     priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/hardware',     priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/industries',   priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/case-studies', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/about',        priority: 0.6, changeFrequency: 'yearly' as const  },
    { path: '/contact',      priority: 0.7, changeFrequency: 'yearly' as const  },
    { path: '/privacy',      priority: 0.3, changeFrequency: 'yearly' as const  },
    { path: '/terms',        priority: 0.3, changeFrequency: 'yearly' as const  },
    { path: '/refund',       priority: 0.3, changeFrequency: 'yearly' as const  },
  ]

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
