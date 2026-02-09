# Case Study Format Guide

## Overview

The case study system supports a flexible, narrative-driven format that works across five content types: **Events**, **Programs**, **Delivery**, **Concepts**, and **Leadership**.

## Frontmatter Structure

```yaml
---
title: string
type: "event" | "program" | "delivery" | "concept" | "leadership"
lede: string (1-3 sentences, the hook)
metadata:
  dates: string (optional, e.g. "2019-2023" or "March 2024")
  location: string (optional)
  role: string (optional)
  scale: string (optional, e.g. "400 attendees" or "12 agencies")
  status: string (optional, e.g. "Ongoing" or "Handed off")
links:
  - label: string
    url: string
tags: string[]
featured: boolean
order: number
draft: boolean (optional, default: false)
---
```

### Field Details

**Required fields:**
- `title`: The case study title
- `type`: One of five content types (event, program, delivery, concept, leadership)
- `lede`: A 1-3 sentence hook that appears prominently on the page and in featured cards

**Optional fields:**
- `metadata`: Object containing any combination of: dates, location, role, scale, status
- `links`: Array of related links with label and URL
- `tags`: Array of topic tags
- `featured`: If true, displays a larger card on the index with the full lede
- `order`: Controls sort order on the index page (lower numbers appear first)
- `draft`: If true, the case study won't be published

**All metadata fields are optional.** Only render the ones that have values.

## Content Body

The body is **freeform markdown/MDX**. No prescribed sections. The author writes what the piece needs.

### Writing Philosophy

- **Narrative-driven**: Tell the story in a way that makes sense for the content
- **No prescribed structure**: Avoid formulaic sections like "The Problem" / "My Role" / "Outcomes"
- **Let the content dictate structure**: Use headings and sections that fit the story you're telling

## Image Handling

Three layout modes are supported via custom components:

### 1. Inline Image

Stays within the text column (default):

```
::image{src="/images/example.png" layout="inline" caption="Optional caption"}
```

### 2. Full-Bleed Image

Breaks out to full viewport width:

```
::image{src="/images/example.png" layout="full-bleed" caption="Optional caption"}
```

### 3. Image Pair

Two images side by side (stacks on mobile):

```
::image-pair{src1="/images/a.png" src2="/images/b.png" caption="Optional caption for both"}
```

## File Format

- Use `.mdx` extension for files with custom image components
- Use `.md` extension for simple markdown files
- Both are supported by the content collection system

## Page Structure

The template automatically renders:

1. **Type badge** (uppercase, monospace)
2. **Title** (large heading)
3. **Lede** (emphasized text)
4. **Metadata line** (inline, only populated fields, separated by pipes)
5. **Body content** (your freeform markdown)
6. **Links section** (if any links defined)

## Index Card Behavior

On the work index page (`/`):

- **Featured items** (`featured: true`): Show larger cards with full lede and all metadata
- **Non-featured items**: Compact cards with title + type + first metadata field only

## Content Types

### Event
Conferences, talks, workshops, panels, etc.

**Example metadata:** dates, location, scale (attendees)

### Program
Ongoing initiatives, courses, long-running projects

**Example metadata:** dates, role, scale, status

### Delivery
Service design work, product delivery, implementation projects

**Example metadata:** dates, role, scale, status

### Concept
Frameworks, methods, research, thinking pieces

**Example metadata:** dates, status

### Leadership
Team leadership, organizational work, capability building

**Example metadata:** dates, role, scale, status

## Example Case Study

See `/src/content/work/18f-service-delivery-new.mdx` for a complete example demonstrating:
- Proper frontmatter structure
- Narrative-driven body content
- Use of image components
- Freeform section structure

## Migration Guide

To migrate an old case study to the new format:

1. Change file extension from `.md` to `.mdx`
2. Update frontmatter:
   - Change `itemType` → `type` (using new enum values)
   - Change `summary` → `lede`
   - Move fields like `role`, `timeline`, `venue`, `date` into `metadata` object
   - Remove old fields: `systemType`, `outcome`, `context`, `approach`, `impact`, `media`, `artifacts`
3. Rewrite content as freeform narrative (no prescribed sections)
4. Replace inline images with image components if needed
5. Add `links` array if the case study has external resources

## Tips for Writing

- **Start with the lede**: Make it compelling—it's the first thing people read
- **Use metadata strategically**: Only include fields that add context
- **Write naturally**: Don't force content into prescribed sections
- **Use images intentionally**: Choose the layout mode that best serves the content
- **Link generously**: Use the links section for related resources, artifacts, or outcomes
