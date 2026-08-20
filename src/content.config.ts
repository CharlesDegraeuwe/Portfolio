import {defineCollection, z} from 'astro:content';
import {glob} from 'astro/loaders';

const work = defineCollection({
    loader: glob({pattern: '**/*.md', base: './src/content/work'}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        link: z.string(),
        preview: z.string().optional(),
        tags: z.string().array(),
        index: z.number(),
        types: z.string().array().optional(),
    }),
});

const about = defineCollection({
    loader: glob({pattern: '**/*.md', base: './src/content/about'}),
});

export const collections = {work, about};