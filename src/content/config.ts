import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Short description for card display
    summary: z.string(),
    // System type: what kind of problem this is (eligibility, appeals, intake, etc.)
    systemType: z.string(),
    // One-line outcome for the card
    outcome: z.string().optional(),
    // For ordering on homepage (lower = first)
    order: z.number().default(99),
    // Is this a featured case study?
    featured: z.boolean().default(false),
    // Tags for filtering/display
    tags: z.array(z.string()).default([]),
    // External link if this goes somewhere else
    externalUrl: z.string().url().optional(),
    // Cover image for the card
    cover: z.string().optional(),
    // Draft status
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
