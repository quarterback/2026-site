---
title: "Occupant — AI Compute Benchmarks"
type: "delivery"
lede: "Public data infrastructure for AI model pricing, compute deflation tracking, and market intelligence."
summary: "Static benchmark dashboard publishing daily-updated indices for AI compute pricing (CPI), economic activity (AEAI), and market intelligence—built to support procurement and strategic planning."
itemType: "project"
systemType: "Data infrastructure + public goods"
outcome: "Daily-updated public benchmarks tracking 2,300+ AI models across providers"
order: 107
featured: true
tags: ["AT Protocol", "Data Infrastructure", "Open Data", "AI Economics"]
role: "Designer, Developer"
timeline: "2024 - Present"
externalUrl: "https://occupant.ee"
parent: "atproto-projects"
hero:
  image: "/img/occupant.png"
---

## Models & Artifacts

Occupant produces several public benchmark models:

### 1. Compute CPI (Consumer Price Index)
A price deflation index tracking how fast AI compute costs are falling across capability tiers. Answers: "Is compute getting cheaper? How fast?"

### 2. AI Economic Activity Index (AEAI)
Market activity proxy measuring economic growth in AI usage. Tracks volume, diversity, and market structure changes.

### 3. Market Intelligence Dashboard
Sabermetrics-style analytics showing:
- Model rankings and performance tiers
- Premiumization vs. commoditization signals
- Provider market share and pricing strategies
- Price volatility and discrepancy alerts

### 4. Government Procurement Benchmarks
Fair market price ranges and vendor evaluation questions specifically for public-sector buyers. Includes procurement worksheet templates.

### 5. Cost Calculator
Interactive estimator for budgeting AI spend based on usage patterns and provider pricing.

---

## The Problem

AI model pricing is volatile and fragmented across providers, resellers, and model routers. Buyers can't easily answer:
- What's the fair market price per token for a given capability?
- Is our vendor giving us a competitive rate?
- Should we budget for continued deflation or stabilization?
- What procurement questions should we ask?

---

## The Solution: Public Data Infrastructure

A static website that aggregates pricing from multiple sources (OpenRouter, LiteLLM, Chatbot Arena, etc.), computes indices daily via GitHub Actions, and publishes JSON datasets + interactive dashboards.

**Key design decisions:**

### Static Site + Daily Regeneration
No database. No server. Just:
- Daily cron job fetches pricing data
- Python scripts compute CPI, AEAI, market intel
- Regenerates JSON files committed to repo
- GitHub Pages deploys updated static site

### Client-Side Rendering
Calculator and dashboards use vanilla JavaScript + Fetch API. No framework bloat. Progressive Web App (PWA) with service worker for offline access.

### Zero Tracking
- No analytics
- No cookies (except localStorage for theme)
- No user data collection
- Short-retention server logs only

---

## Data Sources & Credibility

Aggregates from multiple public sources with cross-checking:
- OpenRouter Rankings (Weekly)
- Chatbot Arena (Weekly)
- LiteLLM pricing feeds (Daily)
- pricepertoken.com (Daily)

Price discrepancies exceeding 10% trigger manual review before publication.

Full transparency disclosure published at `/tardigrade.html` covering data sources, AI usage, and privacy posture.

---

## Technical Architecture

**Backend (Python + GitHub Actions):**
- `src/data_collector.py` - Fetches pricing from all sources
- `src/calculate_cpi.py` - Computes CPI baskets and deflation rates
- `src/calculate_aeai.py` - Computes activity index
- `src/market_intel.py` - Generates rankings and signals
- `src/scrape_rankings.py` - Pulls OpenRouter/Arena data

**Frontend (Static HTML + Vanilla JS):**
- `index.html` - Landing page with live index values
- `cpi-data.html` - CPI dashboard + historical data
- `aeai.html` - AEAI dashboard
- `sabermetrics.html` - Market intelligence
- `calculator.html` - Interactive cost estimator
- `gov.html` + `gov-worksheet.html` - Procurement tools
- `glossary.html` - Metric definitions
- `tardigrade.html` - Transparency disclosure

**Data Artifacts:**
All datasets published as JSON under `/data/` for programmatic access.

---

## User Journeys

**Procurement / Finance User:**
1. Checks CPI/AEAI headline numbers on index
2. Opens gov benchmark page for "fair deal" ranges
3. Uses calculator to estimate spend
4. Downloads worksheet for vendor evaluation

**Research / Market Watcher:**
1. Reviews CPI time series for deflation trends
2. Opens market intel for structure analysis
3. References glossary for metric definitions
4. Accesses JSON API for analysis

**Developer / Analyst:**
1. Fetches JSON datasets directly
2. Integrates into internal dashboards
3. Uses data for budgeting models

---

## Why It's Built This Way

1. **Static = resilient, cheap, fast**
   - No server to crash or scale
   - GitHub Pages hosting (free)
   - Cacheable, works offline (PWA)

2. **Daily regeneration = fresh data without live queries**
   - Compute happens in CI, not at request time
   - Users get instant page loads
   - No API rate limits to worry about

3. **Public data infrastructure**
   - No login required
   - No tracking or paywalls
   - Transparent methodology
   - Downloadable datasets

---

## Part of the AT Protocol Suite

Occupant is one of several interconnected projects exploring decentralized data infrastructure and public goods. See also:
- [AT Protocol Projects](/work/atproto-projects) (Parent project)
- [Glowrm](/work/glowrm) (Related)
- [Leafroll](/work/leafroll) (Related)

---

## What This Demonstrates

- **Public data infrastructure design**: Building credible benchmarks that serve procurement, research, and strategic planning
- **Static architecture patterns**: Proving you don't need a database/server for daily-updated data products
- **Transparency posture**: Publishing methodology, sources, and AI usage disclosure
- **Progressive enhancement**: PWA features for offline access without JavaScript requirements
- **Government-focused UX**: Procurement worksheet and "fair deal" benchmarks tailored to public sector needs
