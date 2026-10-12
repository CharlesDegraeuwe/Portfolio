---
title: "Alice Law"
description: "Allround legal AI tool for lawyers."
date: "August 2026 - present"
link: "/work/alice"
preview: "https://www.alice.law"
tags: ["WXT", "React", "Express", "Python"]
index: 3
types: ["freelance"]
---
## Overview

>Alice Law is a legal tech company building tools for legal teams that work with large volumes of documents.
>
Just-on-Web is a legal platform where lawyers find the documents they need for a case. Getting those documents into Alice meant downloading them one by one and uploading them again by hand, which is slow and easy to get wrong.

I was hired as a freelance developer to remove that step entirely. I built a browser extension that lets users select documents on Just-on-Web and import them into Alice in bulk, up to 200 documents at once, without ever leaving the page.

I owned the project from end to end: scoping it with the client, designing the architecture, building the extension and the backend and shipping it.

## How it works

* The extension runs on top of Just-on-Web and collects the selected documents
* Documents are downloaded in bulk, up to 200 per run
* A backend service processes them and pulls them into Alice
* The whole flow works in multiple languages, matching how Alice is used across markets

## Stack

* WXT
* React
* Express
* Python

## Engineering challenges

* Building a cross-browser extension with WXT
* Reliably downloading large batches of documents from a third party platform
* Handling up to 200 documents per run without freezing the page or losing files
* Supporting multiple languages in the extension UI
* Connecting an extension, a backend and an existing product into one smooth flow
* Scoping and owning a freelance project from first requirements to delivery

## Links

- [Alice.law](https://www.alice.law)