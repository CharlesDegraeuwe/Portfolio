import {defineCollection, z} from 'astro:content';
import {glob} from 'astro/loaders';

const work = defineCollection({
    loader: glob({pattern: '**/*.md', base: './src/content/work'}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        link: z.string(),
        tags: z.string().array(),
        index: z.number()
    }),
});

export const collections = {work};