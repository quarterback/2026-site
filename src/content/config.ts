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
    hero: z.object({
      image: z.string().optional(),
      layout: z.enum(['full-bleed', 'contained', 'devices']).default('contained'),
    }).optional(),
    metadata: z.union([
      // New flexible array format
      z.array(z.object({
        label: z.string(),
        value: z.string(),
      })),
      // Old object format for backwards compatibility
      z.object({
        dates: z.string().optional(),
        duration: z.string().optional(),
        location: z.string().optional(),
        role: z.string().optional(),
        team: z.string().optional(),
        scale: z.string().optional(),
        skills: z.string().optional(),
        status: z.string().optional(),
      }),
    ]).optional(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string().url(),
    })).default([]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    toc: z.boolean().default(false),
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
