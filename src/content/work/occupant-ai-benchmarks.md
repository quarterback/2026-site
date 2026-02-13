---
title: "Occupant — AI Compute Benchmarks"
type: "concept"
lede: "Compute intelligence infrastructure for AI procurement—decision-layer instrumentation that makes market dynamics visible and governable."
summary: "Applied decision-layer infrastructure providing compute intelligence for organizations operating AI-dependent systems. Publishes daily-updated benchmarks, procurement frameworks, and market intelligence that instrument the economic layer of AI governance."
itemType: "project"
systemType: "Decision-layer infrastructure + compute intelligence"
outcome: "Production infrastructure tracking 2,300+ AI models—operational compute intelligence for strategic planning and procurement oversight"
order: 107
featured: true
tags: ["Decision Infrastructure", "Compute Intelligence", "AI Governance", "Trust Instrumentation"]
role: "Founder, Architect"
timeline: "2024 - Present"
externalUrl: "https://occupant.ee"
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

## The Governance Problem

Organizations deploying AI-dependent systems lack visibility into the economic layer of their decision infrastructure. Procurement happens without instruments to assess fair value, track cost dynamics, or evaluate vendor positioning. This opacity creates governance risk: institutions need tools to determine whether their AI spending is rational, sustainable, and strategically sound.

Public benchmarks for compute economics—visible, contestable, and governable—provide this instrumentation layer.

---

## Decision-Layer Infrastructure

Occupant builds the instrumentation that makes AI compute economics legible to institutions. The trust infrastructure allows organizations to operate confidently in AI-dependent environments by making market dynamics visible and auditable.

The system aggregates pricing from multiple sources (OpenRouter, LiteLLM, Chatbot Arena), computes indices daily via automated infrastructure, and publishes benchmarks as public goods—creating the transparency layer for accountable AI procurement.

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

## What This Demonstrates

- **Decision-layer instrumentation**: Infrastructure that makes automated systems' economic foundations visible and governable
- **Compute intelligence**: Benchmarks and frameworks enabling organizations to assess strategic positioning in AI-dependent environments
- **Trust infrastructure as public goods**: Transparency layers enabling accountable procurement and oversight
- **Governance primitives in production**: Institutions operating confidently with visibility into the systems they depend on
- **Applied architecture at scale**: Operational infrastructure serving strategic planning, procurement oversight, and market intelligence
