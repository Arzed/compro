export type Category = 'All' | 'Web' | 'Mobile' | 'AI' | 'Cloud'

export const projects = [
  { title: 'Finova Trading Suite', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop', tags: ['Web', 'React', 'Fintech'], category: 'Web' as Category },
  { title: 'Helios Ops Dashboard', image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop', tags: ['Cloud', 'SRE', 'Grafana'], category: 'Cloud' as Category },
  { title: 'Volt Labs Mobile', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop', tags: ['Mobile', 'React Native'], category: 'Mobile' as Category },
  { title: 'NorthPeak Insights', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop', tags: ['Web', 'Next.js'], category: 'Web' as Category },
  { title: 'Cloudia IaC Toolkit', image: 'https://images.unsplash.com/photo-1556767576-5ec41e2b3f87?q=80&w=1200&auto=format&fit=crop', tags: ['Cloud', 'Terraform'], category: 'Cloud' as Category },
  { title: 'Orion Vision AI', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop', tags: ['AI', 'Vision'], category: 'AI' as Category },
  { title: 'Helios Risk Engine', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop', tags: ['AI', 'ML'], category: 'AI' as Category },
  { title: 'NorthPeak CRM', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop', tags: ['Web', 'CRM'], category: 'Web' as Category },
  { title: 'Cloudia Observability', image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop', tags: ['Cloud', 'Metrics'], category: 'Cloud' as Category },
]