import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface WorkItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  hero_image: string;
  tags: string[];
  year: number | null;
  client: string;
  published: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface MediaItem {
  id: string;
  title: string;
  description: string;
  media_type: 'podcast' | 'video' | 'article';
  embed_url: string;
  thumbnail_url: string;
  published_at: string;
  published: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}
