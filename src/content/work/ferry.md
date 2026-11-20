---
title: "Ferry"
description: "Master-data migrations from legacy ERPs to Business Central."
date: "November 2026 - present"
link: "/work/ferry"
preview: "https://www.getferry.eu"
tags: ["React", "Vite", "Hono", "PostgreSQL", "Python", "Pydantic", "Drizzle", "OpenAPI", "Docker", "Turborepo"]
index: 0
types: ["co-founder", "CTO"]
---

## Overview

>Ferry speeds up master-data migrations from a legacy ERP to Microsoft Dynamics 365 Business Central.
>
A consultant uploads the exports of the old system (customers, vendors, items) and Ferry reads them, repairs what's broken, profiles every column and shows what needs a human look, before anything reaches Business Central.

As CTO and co-founder I'm building it from the monorepo and CI up to the UI. The goal: do the boring, mechanical 90% deterministically, and put a person on the doubtful cases only.

## Ingestion pipeline

Real exports are messy in very predictable ways: encodings and delimiters that differ per file, print layouts with page headers and total lines, columns shifted by a stray `;`, leading zeros eaten by Excel, EANs in scientific notation.

The obvious approach is to throw an LLM at the file. I didn't, because "usually right" is exactly the problem in a migration. So ingest is fully deterministic: it sniffs file type, encoding, delimiter and header, strips print noise, repairs shifted rows and writes an all-text Parquet file. Profiling then runs per column (empty and distinct counts, patterns, type hints like phone, VAT or IBAN, and flags like lost zeros or mixed types), still without any AI.

The worker is a separate Python process. It doesn't know about users or sessions: it claims jobs from a jobs table, does the work and writes results back.

## Postgres as the queue

I didn't want Redis just for a job queue. PostgreSQL is already there, so jobs are rows, and a database trigger fires `LISTEN/NOTIFY` when a dataset changes. The API forwards that to the browser over Server-Sent Events, so the UI updates by itself while files are processed. Two of the migrations are handwritten because they create those triggers.

## Mapping with an LLM

Once the target Business Central tables are known, Ferry proposes a field for every column, with a confidence. A person approves, changes, combines or leaves out each one, and a person's decision is never overwritten by a new run.

Deterministic matching goes first. The model only sees columns that aren't sure yet, and every call goes through one gateway with a daily budget and a log of each request. On a second run of the same file, the model gets zero calls. On synthetic data, 94.7% of the customer columns get the right field first on the tuning set and 88.0% on blind sets, and Ferry never said "sure" when it was wrong.

## Contracts, not conventions

Three rules keep the structure together, and CI enforces them. The API is the only door to application data. Everything is contract-first: the API is described in OpenAPI from Zod routes, and job payloads and profile shapes are Pydantic models exported to JSON Schema and TypeScript. Generated files are committed and CI fails when they drift. And a test fails if frontend code imports the database or server-side auth.

The frontend is a Vite + React app with Tailwind 4 and Radix, translated into English, Dutch, French and German.

## Stack

* Frontend: React, Vite, React Router, Tailwind CSS 4, Radix UI, use-intl, TanStack Query
* Backend: Hono, Zod, Better Auth, Drizzle
* Worker: Python 3.14, Pydantic, Parquet
* Infra: PostgreSQL 18, MinIO / S3, Docker Compose, Turborepo, pnpm + uv
* Quality: Vitest, pytest, ruff, mypy (strict), knip, Prettier, Husky, GitHub Actions

## Engineering challenges

* Keeping two toolchains (pnpm and uv) in one repo, with the same lint, typecheck and test commands
* Trusting an LLM only where a wrong answer is cheap and checkable
* Making a long-running pipeline feel live in the UI
* Evaluating mapping quality with synthetic data, since real customer data can't go into git

Not built yet: transforming the values, validation, review of changes and export. The Business Central package format is also still an assumption, because I haven't checked it against a real export.

## Links

- [getferry.eu](https://www.getferry.eu)
