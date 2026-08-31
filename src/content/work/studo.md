---
title: "Studo"
description: "A study platform for active recall and exam preparation."
date: "2025 to Present"
link: "/work/studo"
tags: ["NextJS", "NestJS", "Rust", "Astro", "Postgres"]
index: 1
preview: "https://studo.study"
types: ["project", "W.I.P."]
---


## Overview

Studo is a full-stack study platform I've been building since mid-2025. 
It started as a solution for a problem my brother had: studying anatomy. And afterwards I kept adding fixes for my own frustrations with existing study apps.
The main idea now is: students upload their own material, PDFs, lecture slides, notes, and Studo turns it into structured, learnable content automatically, instead of asking them to build flashcards by hand.
I've tried to divide studying into 3 parts: the preparatory aspect, effectively studying and the social aspect (sharing material) and tried to toggle each of these aspects in my solution.
I own it end-to-end: architecture, backend, frontend, design and infrastructure. That means most of the interesting problems here aren't which framework to pick, they're how the pieces fit together. Below is how the system is actually built and why.

## Ingestion pipeline

The hardest technical constraint is that turning a document into study material is slow and CPU-heavy: parsing PDFs, extracting structure, generating content. 
Doing that inside a request would block the API and time out.

Document processing initially ran inside the TypeScript API. 
That worked for some small files, but most course material at uni is easily +400 pages, not 3.

That's why ingestion is fully decoupled. When a file is uploaded it pases through a dedicated endpoint and lands in object storage (R2, because it's cheap), a record in Postgres is created and a job is pushed onto a 
**Redis stream**: a pool of **Rust workers** consumes those jobs independently of the API.
I first as said before, started writing the workers in plain TypeScript as a part of the API, but shifted away from these because of the huge CPU load. 
Rust was the most viable option for this job, plus a good excuse to shift away from the full JS stack.
So a fast, memory-safe worker tier keeps throughput high without dragging the Node API down.
The workers extract and structure content, embed it, and write the results back into the database.

For search and retrieval I use **pgvector** directly in Postgres rather than a separate vector database. 
Keeping embeddings next to the relational data means one source of truth and no extra system to sync or operate,
querying is also much easier, because Drizzle also supports vector rows
and I'm also a broke student, so running a separate Qdrant instance doesn't fit in the budget. 

## The Flow data model

The most important design decision wasn't infrastructure, 
it was the domain model. I found this quite hard, because every new idea had to fit in somewhere.
Studo actually started with several disconnected concepts: Studosets (flashcard sets), Visualsets (image-based study material with pinned points), Studygroups and planning tools. 
Each was its own slice, which made organizing a real course painful.

That's when I came up with the **Course system**, which unifies all of those into a single model: a *Studo Course*,
which represents an entire, real course: its documents, planning and studying in one place. Modeling it as one coherent domain instead of three loosely-related features simplified the data layer, the UI and every feature built on top of it since.

## Frontend & study experience

The frontend is a Next.js app with multiple study modes, studying groups and a Notion like course tool. 
Why choose Next and not just plain React? In the beginning this was purely to optimize SEO, but in the meantime the marketing site's framework has been shifted to Astro. 
Switching to NextJS of course has had several other advantages: it works seamless with Vercel, has a really easy routing system and ton of nice Next native api's.

A big challenge in the frontend was the diversity of the uploaded study material, which spans everything from math to chemistry to programming. That's why Studo renders **math (KaTeX)**, **chemistry (mhchem)** and **syntax-highlighted code (Shiki)** natively, so the platform isn't limited to one type of subject.

## Evolution & infrastructure

Studo has been rebuilt several times as it matured, from a plain HTML prototype, to a Vite/React app, to its current form: a **Next.js + NestJS monorepo** on pnpm and Turborepo. 
The monorepo was a response to real pain, sharing types and logic across the web app, mobile app and marketing site was getting fragile.
Putting everything in one repo with shared packages fixed exactly that.

On the infra side I run a full **CI/CD pipeline** with tag-based production deploys, plus Redis caching, rate limiting and automated security scanning, so shipping is a git tag rather than a manual process, super easy.

## Core stack

* **Frontend**: Next.js, TanStack Query, Zustand, Tailwind; Expo + NativeWind for mobile
* **Backend**: NestJS, Drizzle, Postgres + pgvector, Redis
* **Workers**: Rust (Diesel), PDFium, Redis streams
* **Infra**: Vercel, Cloudflare R2, GitHub Actions, Docker

## Engineering challenges

Studo is where most of my growth actually happened. Owning it end-to-end forced me to learn a bit of everything from scratch:

* End-to-end product ownership (architecture, backend, frontend, infra)
* Growing a 120k+ line codebase across web, mobile, backend and shared packages.
* Designing the ingestion pipeline
* Building semantic retrieval
* Evolving the monorepo
* Shipping and operating the system

## Links

- [studo.study](https://studo.study)