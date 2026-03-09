import { defineCollection, z } from 'astro:content';

const photoSequenceItem = z.object({
  photo: z.string(),
  layout: z.enum(['single', 'pair']).default('single'),
});

const photos = defineCollection({
  type: 'data',
  schema: z.object({
    image: z.string(),
    title: z.string().optional(),
    alt: z.string().optional().default(''),
    featured: z.boolean().default(false),
    date: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string(),
    description: z.string().optional(),
    cover: z.string(),
    order: z.number().default(99),
    published: z.boolean().default(true),
    photoSequence: z.array(photoSequenceItem).optional().default([]),
  }),
});

const galleries = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    cover: z.string(),
    published: z.boolean().default(true),
    photoSequence: z.array(photoSequenceItem).optional().default([]),
  }),
});

export const collections = { photos, projects, galleries };
