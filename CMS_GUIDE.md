# Visual CMS Guide

Your site now has a visual content management system! You can edit case studies and media items without touching code.

## Getting Started

### 1. Access the Admin Panel

Visit `/admin` on your site to access the CMS dashboard.

### 2. Create Your Admin Account

The first time you visit, click "Sign up" to create your admin account. Use any email and password you'll remember.

### 3. Manage Content

Once logged in, you'll see two sections:

#### Case Studies
- Click "Add New" to create a case study
- Fill in the title, description, and full content
- Upload images directly or paste image URLs
- Use the "Published" checkbox to make it live on your site
- Save and your changes appear immediately

#### Media Items
- Add podcasts, videos, or articles
- Paste embed URLs from YouTube, Spotify, etc.
- Set publish dates and descriptions
- Toggle published status to show/hide

## Image Upload

You can upload images in two ways:

1. **Direct Upload**: Click "Upload Image" and select a file from your computer
2. **URL**: Paste any image URL in the "Hero Image URL" field

Uploaded images are stored in Supabase Storage and automatically get a public URL.

## Content Formatting

The content field supports both HTML and Markdown:

- Use `<h2>` or `##` for headings
- Use `<p>` or plain text for paragraphs
- Use `<ul><li>` or `-` for lists
- Paste image URLs as `<img src="url">` or `![](url)`

## Free Hosting Options

Deploy your site for free to:

### Netlify (Recommended)
1. Push your code to GitHub
2. Connect your repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variables from your `.env` file

### Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Cloudflare Pages
1. Push code to GitHub
2. Create new Pages project
3. Set build command and output directory
4. Add environment variables

## Environment Variables

Your hosting provider needs these variables (from `.env`):
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Tips

- Use the "Display Order" field to control the order items appear (lower numbers first)
- Keep case study descriptions short (1-2 sentences) for best display
- Tags are comma-separated: `civic-tech, design, strategy`
- The first published case study shows as "Featured" on your homepage
- Changes to published items require rebuilding the site (Netlify/Vercel do this automatically)

## Automatic Deployments

Set up automatic deployments so when you update content in the CMS, your site rebuilds:

1. In Netlify/Vercel, add a Build Hook URL
2. In Supabase Dashboard, create a Database Webhook
3. Trigger on `work_items` and `media_items` INSERT/UPDATE
4. Point to your Build Hook URL

Now when you save changes in the CMS, your site automatically rebuilds!
