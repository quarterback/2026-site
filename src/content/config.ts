import { defineCollection, z } from 'astro:content';

const mediaItem = z.object({
  type: z.enum(['video', 'podcast', 'audio', 'image', 'article', 'artifact']),
  url: z.string(),
  title: z.string().optional(),
  caption: z.string().optional(),
  embedCode: z.string().optional(),
});

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['event', 'program', 'delivery', 'concept', 'leadership']),
    lede: z.string(),
    metadata: z.object({
      dates: z.string().optional(),
      location: z.string().optional(),
      role: z.string().optional(),
      scale: z.string().optional(),
      status: z.string().optional(),
    }).optional(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string().url(),
    })).default([]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

const essays = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, essays };
