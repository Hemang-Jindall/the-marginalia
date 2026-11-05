import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const annotation = z.object({
  anchor: z.string(),
  kind: z.string(),
  title: z.string(),
  body: z.string(),
  url: z.string().url().optional(),
});

const section = z.object({
  title: z.string(),
  anchor: z.string(),
});

const posts = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/posts",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(["Philosophy", "Fiction", "Reflections", "Poetry"]),
    pinned: z.boolean().default(false),
    draft: z.boolean().default(false),
    sections: z.array(section).default([]),
    annotations: z.array(annotation).default([]),
  }),
});

export const collections = { posts };
