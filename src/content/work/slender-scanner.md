---
title: "Slender Scanner"
description: "ERP scanning tool for warehouses."
date: "2026 to Present"
link: "/work/slender-scanner"
tags: ["NextJS", "Kotlin", "Astro", "Fastify"]
index: 3
preview: ""
types: ["project", "w.i.p."]
---

![Overview of the slenderscanner loginpage](/work/slenderscanner.png "login page")

## Overview

Slender Scanner is a B2B mobile scanning and order-taking application built with a partner, aimed at warehouses and businesses that want to digitize how they scan, track and order stock without ripping out their existing ERP setup. Instead of building a standalone system, Slender Scanner connects directly into a company's existing ERP, starting with Microsoft Dynamics 365 Business Central, so scanned data flows straight into the systems teams already use.

On the technical side, this meant designing a multi-tenant architecture from the ground up, since every customer has their own Business Central environment and Microsoft Entra ID tenant. Onboarding a new customer means walking through an OAuth admin consent flow, capturing their tenant details and securely storing and refreshing their access tokens, all scoped per tenant in the database.

The mobile app is where warehouse staff scan items and place orders, the admin dashboard is where businesses manage their integration, users and see synced data and the API layer in between handles authentication, tenant management and the sync logic with Business Central's API.

## Stack
**Frontend**
* NextJS
* Zustand
* React Query
* Kotlin
* Zebra
* SQLDelight
* Jetpack Compose
* CameraX
* Swift UI (coming soon)
* Astro (marketing)

**Backend**
* Fastify
* Drizzle
* Swagger
* Fastify MCP
* PostgreSQL

## Gained Skills

*\*Slender Scanner was largely about applying what I'd learned on Studo and Jurimesh to a new domain. The genuinely new ground for me was:*

* Designing multi-tenant architecture with per-tenant isolation
* OAuth 2.0 & admin consent flows (Microsoft Entra ID)
* Secure per-tenant token storage & refresh handling
* Integrating with third-party ERP APIs (Dynamics 365 Business Central)
* Native Android development (Kotlin, Jetpack Compose)
* Hardware barcode/camera scanning integration (Zebra, CameraX)
