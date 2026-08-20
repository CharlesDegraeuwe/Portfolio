---
title: "Studo"
description: "A study platform for active recall and exam preparation."
date: "2025 to Present"
link: "/work/studo"
tags: ["NextJS", "NestJS", "Rust", "Astro", "Postgres"]
index: 1
preview: "https://beta.studo.study/en/welcome"
type: "project"
---


## Overview
Studo is a full-stack study platform I've been building since mid-2025, aimed at making studying more interactive and efficient than traditional flashcard or notes apps. The core idea is to let students upload their own study material: PDFs, lecture slides, notes and turn that content into structured, learnable formats automatically, rather than requiring manual flashcard creation.

Under the hood, uploaded documents go through a parsing pipeline built with Rust workers, using Redis streams for job processing and pgvector for semantic search over the parsed content. Files are stored on Cloudflare R2. This pipeline extracts and structures content so it can be turned into study material like flashcards or visual study sets.

The frontend is built with Next.js and includes multiple study modes, including a fast-paced "SpeedyMode" for quick review sessions and a slower, more thorough "learn mode" for deeper study. It also supports rich content rendering, including math notation via KaTeX, chemistry notation via mhchem and syntax-highlighted code via Shiki, so the platform works well for a wide range of subjects, from math and sciences to programming courses.

One of the bigger architectural pieces is the Flow system, which unifies several previously separate concepts, Studosets (flashcard sets), Visualsets (image-based study material using pinned points on an image), Classrooms and planning tools into a single coherent model called a flowcourse. This makes it possible to organize an entire course, its materials and study planning in one place rather than juggling disconnected tools.

Studo has gone through several full rebuilds as the product matured, from a simple HTML prototype to a Vite/React app and finally to its current form as a Next.js and NestJS monorepo managed with pnpm and Turborepo. Along the way I set up a full CI/CD pipeline with tag-based production deploys, Redis caching, rate limiting and automated security scanning.

I own the product end-to-end: architecture, backend, frontend, design and infrastructure. I'm currently targeting a v1.0.0 launch in September 2026, with a longer-term goal of pitching Studo at Start it @KBC in the April 2027 batch.

## Stack

**Frontend**
* Next.js
* Next Auth
* i18n
* Firebase
* Astro (marketing)
* SortableJS
* Tailwind
* TanStack React Query
* Zustand
* React Hook Form
* Vitest
* Turbo
* Expo
* NativeWind
* Radix
* KaTeX

**Backend**
* NestJS
* Drizzle
* Helmet
* Swagger
* Postgres
* Redis
* Resend
* PostHog
* Zod
* Polar
* Rust Workers
* Diesel
* pgvector
* AWS S3
* PDFium

**Hosting & deployment**
* Git
* Vercel
* Cloudflare R2
* Scaleway
* Railway
* GitHub Actions
* Aikido Security
* Devin
* Docker
* Docker Compose

## Links

- [studo.study](https://studo.study)
- [beta.studo.study](https://beta.studo.study)