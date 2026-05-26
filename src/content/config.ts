import { defineCollection, z } from 'astro:content';

const site = defineCollection({
  type: 'data',
  schema: z.object({
    siteName: z.string(),
    name: z.string(),
    title: z.string(),
    tagline: z.string(),
    heroDescription: z.string(),
    email: z.string(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
    shortscutUrl: z.string().optional(),
  }),
});

const about = defineCollection({
  type: 'data',
  schema: z.object({
    heading: z.string(),
    headingItalic: z.string(),
    paragraphs: z.array(z.string()),
    certification: z.string().optional(),
    photoUrl: z.string().optional(),
  }),
});

const skills = defineCollection({
  type: 'data',
  schema: z.object({
    items: z.array(z.object({
      icon: z.string(),
      title: z.string(),
      description: z.string(),
    })),
  }),
});

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    items: z.array(z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      url: z.string().optional(),
      featured: z.boolean().optional(),
    })),
  }),
});

export const collections = { site, about, skills, projects };
