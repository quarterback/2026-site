/*
  # Create CMS Tables for Visual Content Management

  1. New Tables
    - `work_items`
      - `id` (uuid, primary key)
      - `title` (text) - Case study title
      - `slug` (text, unique) - URL-friendly identifier
      - `description` (text) - Short description/tagline
      - `content` (text) - Full HTML/markdown content
      - `hero_image` (text) - Image URL
      - `tags` (text array) - Category tags
      - `year` (integer) - Project year
      - `client` (text) - Client name
      - `published` (boolean) - Publish status
      - `display_order` (integer) - Sort order
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      
    - `media_items`
      - `id` (uuid, primary key)
      - `title` (text) - Media title
      - `description` (text) - Description
      - `media_type` (text) - Type: podcast, video, article
      - `embed_url` (text) - Embed URL or link
      - `thumbnail_url` (text) - Thumbnail image
      - `published_at` (date) - Publication date
      - `published` (boolean) - Publish status
      - `display_order` (integer) - Sort order
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public read access for published items
    - Authenticated users can manage all content (admin access)

  3. Storage
    - Create public bucket for images
*/

-- Create work_items table
CREATE TABLE IF NOT EXISTS work_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL DEFAULT '',
  content text NOT NULL DEFAULT '',
  hero_image text DEFAULT '',
  tags text[] DEFAULT '{}',
  year integer,
  client text DEFAULT '',
  published boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create media_items table
CREATE TABLE IF NOT EXISTS media_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT '',
  media_type text NOT NULL DEFAULT 'article',
  embed_url text NOT NULL,
  thumbnail_url text DEFAULT '',
  published_at date DEFAULT CURRENT_DATE,
  published boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE work_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_items ENABLE ROW LEVEL SECURITY;

-- Public can view published items
CREATE POLICY "Anyone can view published work items"
  ON work_items FOR SELECT
  USING (published = true);

CREATE POLICY "Anyone can view published media items"
  ON media_items FOR SELECT
  USING (published = true);

-- Authenticated users can do everything (admin access)
CREATE POLICY "Authenticated users can view all work items"
  ON work_items FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert work items"
  ON work_items FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update work items"
  ON work_items FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete work items"
  ON work_items FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can view all media items"
  ON media_items FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert media items"
  ON media_items FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update media items"
  ON media_items FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete media items"
  ON media_items FOR DELETE
  TO authenticated
  USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers for updated_at
DROP TRIGGER IF EXISTS update_work_items_updated_at ON work_items;
CREATE TRIGGER update_work_items_updated_at
  BEFORE UPDATE ON work_items
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_media_items_updated_at ON media_items;
CREATE TRIGGER update_media_items_updated_at
  BEFORE UPDATE ON media_items
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create storage bucket for images
INSERT INTO storage.buckets (id, name, public)
VALUES ('content-images', 'content-images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for content-images bucket
CREATE POLICY "Public can view content images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'content-images');

CREATE POLICY "Authenticated users can upload content images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'content-images');

CREATE POLICY "Authenticated users can update content images"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'content-images')
  WITH CHECK (bucket_id = 'content-images');

CREATE POLICY "Authenticated users can delete content images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'content-images');