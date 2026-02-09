---
title: "Benefits Determination & Appeals System"
summary: "Full-stack prototype modeling government benefits review and appeals processes."
itemType: "project"
systemType: "Benefits + eligibility systems"
outcome: "Interactive prototype demonstrating decision lifecycle"
order: 100
featured: false
tags: ["Prototype", "React", "Benefits", "AI"]
role: "Designer & Developer"
timeline: "2025"
---

## The problem

Government benefits applications move through complex review, decision, and appeals processes, but the full decision lifecycle—from initial intake through multi-tier appeals—is often opaque to both caseworkers and applicants. Understanding how determinations are made, who made them, and how they can be challenged requires navigating fragmented systems.

## What I built

A comprehensive full-stack prototype demonstrating how benefits applications move through review, decision, and appeals. The system models the complete lifecycle from initial application intake through a three-tier appeals mechanism.

The prototype simulates application intake, automated eligibility checks, caseworker review, and a three-tier appeals process. It distinguishes between AI-generated and human-made decisions, maintaining detailed records of overrides and appeal outcomes throughout each case's history.

## Technical approach

A distinctive feature is the data persistence methodology: the system uses **IPFS-style content addressing**, where each record is referenced by a unique identifier tied to a specific policy version. This approach enables transparent audit trails and version control across policy decisions.

**Stack:** React, TypeScript, Tailwind CSS, AI-assisted eligibility logic, IPFS-based content addressing, caseworker and appeals dashboards

## Key principle

The prototype prioritizes transparency by making the full decision history visible across the lifecycle of a case, allowing stakeholders to understand how determinations were reached and how appeals were handled.

## What this demonstrates

I can design and build systems that make complex government processes legible—not just to technologists, but to caseworkers and applicants navigating high-stakes decisions.
