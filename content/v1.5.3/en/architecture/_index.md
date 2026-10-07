---
title: Architecture
description: "Bannerlord v1.5.3 architecture hub — the layered mental model, the assembly module map, and the source-measured 1.4.5 migration guide."
---

# Architecture

The v1.5.3 architecture pages answer three questions in order: **get the big picture** (the layered
model) → **find the boundaries** (which assembly belongs to which bucket) → **price the upgrade**
(what actually changed between 1.4.5 and 1.5.3).

These three pages are prose and tables only — they hold no type pages. The 27 hand-written type pages
that do exist live in Chinese under `zh/api/`, listed with their source paths on the
[version home](../).

> **There are no bucket index pages in this tree.** `api/mission-ext/`, `api/sandbox/`,
> `api/viewmodel/` and the rest have no `_index.md`, so the pages below name buckets as plain slugs
> rather than linking into directories that do not exist. For the full picture of what is written and
> what is not, see the coverage table on the [version home](../).

<!-- BEGIN SECTION INDEX -->
> 共 3 个子页

## ↑ Up

- [Version Home](../) — including the per-bucket coverage table

## ↓ Down

- [SDK Overview](./sdk-overview) — the five-band dependency model and reading order
- [Module Map](./module-map) — all 68 `TaleWorlds.*` assemblies and which bucket each one lands in
- [Migrating from 1.4.5](./migration-from-1.4.5) — what was removed / changed / added, with confidence tiers

## ↔ Sideways

- [Chinese type pages: `zh/api/`](../../zh/) — the only per-type documentation in this version
- [API Class Reference](../api/) — English hub for those type pages and the per-bucket gaps
- [Cross-Version Class Comparison](../../../versions/) — per-class API deltas

<!-- END SECTION INDEX -->