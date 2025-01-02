// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";
import { Schema } from "astro:schema";

// 3. Define your collection(s)
const tours = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    imgSrc: z.string(),
    imgAlt: z.string(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    imgSrc: z.string(),
    imgAlt: z?.string(),
    description: z.string(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { tours, blog };
