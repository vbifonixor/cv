import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const orgs = defineCollection({
  loader: glob({ pattern: ["[^_]*.mdx"], base: "./src/content/cv/orgs" }),
  schema: z.object({
    name: z.string(),
    link: z.string(),
  }),
});

const workExperiences = defineCollection({
  loader: glob({
    pattern: ["[^_]*.mdx"],
    base: "./src/content/cv/experiences",
  }),
  schema: z.object({
    org: reference("orgs"),
    name: z.string(),
    dateStart: z.date(),
    dateEnd: z.date().optional(),
    stack: z.array(z.string()).optional(),
    location: z.string(),
    role: z.string(),
  }),
});

export const collections = { workExperiences, orgs };
