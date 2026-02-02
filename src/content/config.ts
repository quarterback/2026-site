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
    summary: z.string(),
    systemType: z.string(),
    outcome: z.string().optional(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    externalUrl: z.string().url().optional(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),

    role: z.string().optional(),
    timeline: z.string().optional(),
    context: z.string().optional(),

    media: z.array(mediaItem).optional(),
    artifacts: z.array(z.object({
      title: z.string(),
      description: z.string().optional(),
      image: z.string().optional(),
      link: z.string().optional(),
    })).optional(),

    impact: z.array(z.string()).optional(),
    approach: z.array(z.string()).optional(),
  }),
});

export const collections = { work };
