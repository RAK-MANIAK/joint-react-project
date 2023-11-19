import { z } from 'zod';
import { colors } from '@/constants';

export const noteSchema = z.object({
  id: z.number().default(Math.random() * 100000),
  title: z.string().min(1).max(50),
  body: z.string().min(1).max(500),
  color: z.enum(colors).default(colors[0]),
  isFavorite: z.boolean().default(false),
});

export type TNoteSchema = z.infer<typeof noteSchema>;
