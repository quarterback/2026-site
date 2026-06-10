# Case Study Organization & Display Strategy

## Current State

You currently have 15+ case studies across different project types, with a mix of:
- **Featured work** (shown on homepage)
- **Archive work** (Tumblr-migrated, higher order numbers)
- **Different types**: delivery, program, event, concept, leadership
- **Various tags**: Federal, Service Design, Civic Tech, Mobile, etc.

## Problem Statement

With a growing portfolio, displaying all case studies equally creates:
- **Cognitive overload** for visitors trying to understand your focus
- **Dilution of key work** among older/smaller projects
- **Limited ability** to surface relevant work based on visitor needs

## Proposed Solutions

### Option 1: Curated Featured + Categorized Archive (Recommended)

**Homepage**: Show 3-6 featured case studies (current approach)
**Work Archive Page**: Add filtering/sorting capabilities

#### Implementation:
- **Category filters** based on project type:
  - All Work (default)
  - Service Delivery
  - Program Strategy
  - Community Engagement
  - Research & Frameworks
  - Leadership

- **Tag-based filtering** for cross-cutting themes:
  - Federal Government
  - Civic Technology
  - Municipal Services
  - Decision Systems
  - Data & Analytics
  - AI & Automation

- **Sort options**:
  - Most Recent (default)
  - Featured First
  - Type
  - A-Z

#### UI Pattern:
```
[All Work ▾] [Filter by Tags ▾] [Sort: Recent ▾]

┌─────────┬─────────┬─────────┐
│  Card   │  Card   │  Card   │
│         │         │         │
└─────────┴─────────┴─────────┘
```

**Pros:**
- Balances curation with discoverability
- Visitors can self-select based on interests
- Scales well as portfolio grows
- No work gets hidden completely

**Cons:**
- Requires JavaScript for interactive filtering
- More complex to implement

---

### Option 2: Three-Tier Display System

**Tier 1**: Featured Work (homepage) - 3-6 projects
**Tier 2**: Recent Work (work page, top section) - 6-8 projects
**Tier 3**: Archive (work page, collapsible section) - older projects

#### Implementation:
- Split work page into distinct sections
- Recent work shown by default (order < 10)
- Archive section starts collapsed with "View Archive (8 more)" button
- No filtering needed initially

**Pros:**
- Simple to implement (no JavaScript required)
- Clear hierarchy of importance
- Still accessible but de-emphasized

**Cons:**
- Less flexibility for visitors to browse
- Older work feels "lesser" by default
- Doesn't help visitors find relevant work by theme

---

### Option 3: Domain-Based Landing Pages

Create specialized landing pages for different audiences:

- **/work/federal** - Federal government projects
- **/work/civic-tech** - Community & municipal work
- **/work/decision-systems** - AI, algorithms, decision infrastructure
- **/work/leadership** - Organizational leadership case studies

#### Implementation:
- Main `/work` page shows featured + recent
- Domain pages show filtered views with context
- Each domain page includes intro text explaining focus area

**Pros:**
- Serves different visitor needs (agency recruiter vs. civic tech org)
- Provides narrative context for each focus area
- Can be shared directly for specific contexts

**Cons:**
- High maintenance (requires manual curation)
- Work appears in multiple places
- Adds page count / complexity

---

### Option 4: Smart Featured + "Explore More" Grid

**Homepage**: 3-6 featured projects (hand-picked best work)
**Work Page**: Show ALL work but with visual hierarchy

#### Implementation:
- Featured work shown larger (full cards with images)
- Other work shown in compact grid below
- Simple "Show more" pagination after 12 items
- Optional: "Jump to: Federal | Civic Tech | Leadership" anchor links

**Pros:**
- Simple, progressive disclosure
- Everything is accessible
- Low maintenance
- Works without JavaScript

**Cons:**
- Limited filtering
- Relies on good ordering/grouping in data

---

## Recommended Approach: Hybrid of Options 1 & 4

### Phase 1 (Immediate - Low Complexity)
1. **Homepage**: Keep 3-6 featured case studies
2. **Work Archive**: Show all work with clear visual hierarchy
   - Featured work: Large cards with descriptions
   - Other work: Compact cards
   - Organized by `order` field
3. Add category labels to cards (already done via type)
4. Group similar work visually (optional CSS grid spanning)

### Phase 2 (Future Enhancement - Add Interactivity)
1. Add client-side filtering by type/category
2. Add tag-based filtering
3. Add sort controls
4. Consider separate domain landing pages if portfolio continues growing

## Metadata Structure Recommendations

To support any of these approaches, ensure each case study has:

```yaml
title: "Project Name"
type: "delivery" | "program" | "event" | "concept" | "leadership"
lede: "1-2 sentence description (shown on cards)"
metadata:
  dates: "2019-2023"
  role: "Design Lead"
  scale: "Scale indicator"
  status: "Live | Launched | Prototype | Archived"
tags: ["Federal", "Service Design", "Decision Systems"]  # 2-5 tags
featured: true | false
order: 1-99  # Lower = higher priority
draft: false  # Hide from public
```

## Tag Taxonomy Proposal

Establish consistent tags across these categories:

**Sector:**
- Federal Government
- Municipal Services
- Civic Technology
- Private Sector

**Domain:**
- Service Design
- Decision Systems
- AI & Automation
- Data & Analytics
- Content Strategy

**Scale:**
- Individual Tool
- Program/Initiative
- Organizational Transformation

**Format:**
- Research
- Prototype
- Production System
- Framework/Methodology

## Implementation Checklist

### Immediate Actions:
- [x] Create Oregon Tennis case study
- [x] Uncomment work section on homepage
- [x] Fix work archive page props to match WorkCard component
- [ ] Review all case studies for consistent metadata
- [ ] Establish tag taxonomy and retag all work
- [ ] Update work archive page intro text

### Future Enhancements:
- [ ] Add category filter dropdown
- [ ] Add tag filter multiselect
- [ ] Add sort controls
- [ ] Consider pagination vs. infinite scroll
- [ ] Add search functionality
- [ ] Create domain-specific landing pages (if needed)

## Example Tag Application

**Oregon Tennis Rankings:**
- Tags: ["Civic Technology", "Data & Analytics", "Sports", "Decision Systems"]
- Type: "delivery"

**18F Service Delivery:**
- Tags: ["Federal Government", "Service Design", "Systems Thinking"]
- Type: "delivery"

**Bloomington Website:**
- Tags: ["Municipal Services", "Service Design", "Content Strategy"]
- Type: "delivery"

**Nautilus Staffing:**
- Tags: ["Prototype", "Team Operations", "React"]
- Type: "concept"

---

## Questions to Consider

1. **Primary Use Case**: Are most visitors:
   - Recruiters/hiring managers looking for relevant experience?
   - Peers wanting to learn from your approach?
   - Potential clients evaluating capabilities?

2. **Growth Plans**: How many case studies do you plan to add per year?
   - 1-3: Simple hierarchy works
   - 4-10: Filtering becomes valuable
   - 10+: Need robust organization system

3. **Maintenance Tolerance**: How much time do you want to spend curating?
   - Low: Automated sorting by metadata
   - Medium: Periodic review of featured status
   - High: Custom landing pages and narratives

4. **Technical Preferences**:
   - Prefer static/no-JS solutions?
   - Open to interactive filtering?
   - Want search functionality?

## My Recommendation

Start with **Phase 1** (simple hierarchy) because:
1. You have ~15 case studies now - manageable without filters
2. Featured status already provides curation
3. Can enhance later with filters as portfolio grows
4. Lower maintenance burden
5. Works without JavaScript

Add **filtering** when you have 20+ case studies or notice visitors can't find relevant work easily.

Consider **domain landing pages** only if you're actively marketing to distinct audiences (federal vs. civic tech vs. private sector).
