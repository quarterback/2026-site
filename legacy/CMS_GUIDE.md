# Content Workflow Guide

This guide shows you how to quickly create case studies and content for your site using Notion's visual editor and export to markdown.

## Why Notion + Markdown?

- Write in a visual editor with formatting, images, and structure
- Export to markdown with one click
- Keep your sophisticated markdown-based workflow
- No database complexity, pure static files

## Quick Start Workflow

### 1. Write in Notion

1. Create a new page in Notion for your case study
2. Use Notion's rich text editor:
   - Add headings, paragraphs, lists
   - Drag & drop images
   - Create callout boxes
   - Format text with bold, italic, etc.

### 2. Export to Markdown

1. Click the `...` menu in Notion (top right)
2. Select `Export`
3. Choose `Markdown & CSV`
4. Click `Export`
5. Unzip the downloaded file

### 3. Add to Your Site

1. Copy the `.md` file to `src/content/work/`
2. Rename it to match your URL slug (e.g., `my-project.md`)
3. Add frontmatter at the top:

```markdown
---
title: "Your Project Title"
summary: "Brief one-sentence description"
systemType: "Civic Tech"
outcome: "Impact statement"
tags: ["design", "research", "policy"]
order: 1
featured: true
draft: false
---

[Your Notion content appears here]
```

### 4. Handle Images

**Option A: Use the Image Upload Tool**

Visit `/upload` on your local site:
1. Login/create account
2. Drag & drop all your images
3. Copy the markdown snippets
4. Replace Notion image paths in your markdown

**Option B: Use Image URLs**

If your images are already hosted somewhere, just use those URLs in your markdown.

## Image Upload Tool (`/upload`)

A simple page where you can:
- Drag & drop multiple images
- Get instant markdown code for each image
- Copy URLs for use in markdown files
- All images stored in Supabase Storage

**Access:** Visit `/upload` (requires creating an account)

## File Structure

```
src/content/work/
├── 18f-service-delivery.md
├── consequence-design.md
└── your-new-project.md
```

Each markdown file becomes a case study page at `/work/your-file-name`

## Frontmatter Fields

Required fields:
- `title` - Case study title
- `summary` - Short description
- `systemType` - Type of system or project category
- `order` - Display order (lower numbers first)

Optional fields:
- `outcome` - Impact or result statement
- `tags` - Array of tag strings
- `role` - Your role on the project
- `timeline` - Project timeline
- `context` - Additional context paragraph
- `featured` - Set to `true` to feature on homepage
- `draft` - Set to `true` to hide from site
- `externalUrl` - Link to external case study instead
- `approach` - Array of approach points
- `impact` - Array of impact points

## Tips

1. **Write freely in Notion** - Don't worry about markdown syntax, just write
2. **Export often** - Notion exports are fast, export drafts to preview
3. **Images first** - Upload all images at once using `/upload`, then add them to your markdown
4. **Use templates** - Copy an existing `.md` file as a starting point
5. **Preview locally** - Run `npm run dev` to see changes immediately

## Advanced: Notion Template

Create a Notion template with this structure:

```
# [Project Title]

## Context
[Background information]

## Approach
- Key point 1
- Key point 2
- Key point 3

## Impact
- Result 1
- Result 2
- Result 3

## Images
[Add all images here]
```

This maps nicely to your site's case study layout.

## Deploy Your Site

Once you've added your content:

1. **Push to GitHub**
2. **Deploy to Netlify/Vercel/Cloudflare**
3. **Your site builds automatically from markdown files**

No database, no complex CMS, just markdown files that build into a fast static site.
