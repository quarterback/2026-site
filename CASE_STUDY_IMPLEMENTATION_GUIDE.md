# Case Study Implementation Guide

This document explains the header structure and metadata patterns used in the migrated Tumblr case studies, for implementation on the production site.

## 1. Metadata Structure (Frontmatter)

All migrated case studies use this frontmatter pattern:

```yaml
---
title: "Project Name"
summary: "One-sentence description for card views"
itemType: "project" | "event"
systemType: "Category description (e.g., 'Benefits + eligibility systems')"
outcome: "Brief outcome statement"
order: 100-108  # Higher numbers for archived items
featured: false  # Controls homepage visibility
tags: ["Tag1", "Tag2", "Tag3"]
role: "Your role on the project"
timeline: "Duration or year"
context: "Optional additional context"
externalUrl: "https://..." # Optional external link
venue: "Location" # For events
---
```

### Key Metadata Fields Explained

- **`featured: false`** - These items don't appear on homepage (only on /work archive)
- **`order: 100+`** - Higher order numbers push items down in sorting
- **`systemType`** - Categorizes the work (shows on cards). Examples:
  - "Benefits + eligibility systems"
  - "Field operations + logistics"
  - "Federal procurement + funding"
  - "AI + decision systems"
  - "Municipal websites + service delivery"
  - "Community organizing + civic tech"
- **`role`** - Your specific role (shows context beyond just "designer")
- **`timeline`** - Provides temporal context without exact dates
- **`context`** - Additional framing (e.g., "Partnership between 18F and CMS")

## 2. Content Header Structure

The migrated case studies use a **consistent section header pattern** that differs from the existing work:

### Standard Section Flow

```markdown
## The problem

[Clear problem statement - why this work mattered]

## What I built / What I did

[Your specific contribution and approach]

## Key features / Research & methods

[Concrete details about the work - could be features, methods, or approach]

## Technical approach / Technical stack

[Technology and implementation details - often includes a **Stack:** line]

**Stack:** Technology, Frameworks, Tools, Specific approaches

## Outcomes / What this demonstrates

[Impact and what this work shows about your capabilities]
```

### Header Pattern Variations by Project Type

**For prototypes/builds:**
- The problem
- What I built
- Key features
- Technical approach/stack
- What this demonstrates

**For client/consulting work:**
- The problem
- What I did
- Research & methods
- Approach
- Outcomes
- What this demonstrates

**For community/organizing work:**
- The catalyst / The vision
- What we did
- Community impact
- What this demonstrates

### Key Differences from Existing Work

**Existing format** (e.g., `18f-service-delivery.md`):
- Uses more detailed sections: Snapshot, The problem, Constraints, My role, What I did, Key decisions, Artifacts, Outcomes
- Very thorough, longer form
- Includes image placeholders

**New migrated format:**
- More concise, scannable sections
- Clearer "what this demonstrates" closing that ties to portfolio value
- Inline **Stack:** callouts for technical details
- Focused on readability and quick comprehension

## 3. Writing Style Patterns

### Clarity over comprehensiveness
- Lead with the problem, not the context
- Use bold for key terms: **offline-first**, **IPFS-style content addressing**
- Keep paragraphs short (2-4 sentences max)

### Concrete specifics
- "50+ volunteers" not "many volunteers"
- "93% bounce rate reduction" not "significantly improved"
- "Three-tier appeals process" not "appeals system"

### Closing with purpose
Every case study ends with "What this demonstrates" that explicitly states what capability this work proves:

> "I can design and build systems that make complex government processes legible—not just to technologists, but to caseworkers and applicants navigating high-stakes decisions."

## 4. Technical Stack Presentation

Use inline **Stack:** callouts rather than separate sections:

```markdown
**Stack:** React, TypeScript, Tailwind CSS, Supabase backend, AI-assisted development
```

This keeps technical details visible but doesn't break reading flow.

## 5. Implementation Recommendations

To apply this pattern to your current site:

1. **Keep existing detailed case studies as-is** (they showcase depth)
2. **Use new pattern for future/archived work** (better scanning)
3. **Update homepage to filter by `featured: true`**
4. **Create `/work` archive page** showing all items
5. **Ensure metadata includes:**
   - `featured` boolean for homepage control
   - `systemType` for categorization
   - `role` and `timeline` for context
   - Clear `summary` for card views (one sentence max)

## 6. Archive vs Featured Strategy

**Featured items** (homepage):
- Current, most representative work
- `featured: true`
- `order: 1-10`

**Archived items** (/work page):
- Complete portfolio history
- `featured: false`
- `order: 100+`
- Still searchable and linkable
- Maintains professional record

This approach keeps your homepage focused while preserving the full body of work for those who want to explore further.
