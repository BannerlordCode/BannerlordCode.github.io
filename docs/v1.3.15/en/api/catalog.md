---
title: Complete Class Catalog
sidebar: auto
---

# Complete Class Catalog (v1.3.15)

## Mental Model

Treat `Complete Class Catalog` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

All **4819** modder-facing public types in the 1.3.15 source (codegen / 3rd-party / network protocol excluded), grouped by area. This page is the top-level inventory: some entries land on current-version deep docs, while others land on adjacent area pages or cross-version references when that is the most useful reading path.

| Area | Types | Purpose |
|------|------|------|
| [Campaign System](./catalog-campaign) | 1829 | Parties, clans, kingdoms, issues, settlements, and campaign flow |
| [Mount & Blade](./catalog-mountandblade) | 1644 | Agents, missions, formations, combat logic, and interaction objects |
| [Core](./catalog-core) | 321 | Base object system, equipment, character templates, and shared data |
| [Engine](./catalog-engine) | 154 | Scene, entity, texture, shader, skeleton, and native bridge types |
| [Library](./catalog-library) | 201 | Math, containers, events, serialization, and runtime utilities |
| [Gauntlet UI](./catalog-ui) | 265 | Widgets, brushes, screen layers, and UI behavior |
| [Save System](./catalog-save) | 56 | SaveManager, contexts, serializers, drivers, and definitions |
| [Network & Platform](./catalog-system) | 246 | Network, DotNet, Diamond, and platform service types |
| [Gameplay (SandBox/StoryMode)](./catalog-gameplay) | 1 | SandBox / StoryMode gameplay-side entry points |
| [Localization](./catalog-localization) | 21 | TextObject, text processing, and localized string flow |
| [Input System](./catalog-input) | 19 | Input state, key bindings, and controller abstractions |
| [Other](./catalog-other) | 62 | Helper and edge-domain types that do not belong to the major stacks |
| **Total** | **4819** | **Source-scanned inventory** |

::: tip Regenerate
After source updates, run from repo root: `node BannerlordCode.github.io/tools/gen-class-catalog.mjs`
:::
## How to Use

1. Start from the area that matches your subsystem.
2. Narrow to the namespace and type name you need.
3. Open the deep-reference page for method- and example-level guidance.
4. Jump to `/versions/*` only when you need migration or compatibility context.
