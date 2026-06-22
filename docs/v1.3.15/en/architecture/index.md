---
title: Architecture
description: Bannerlord SDK architecture hub — module map, loading flow, save internals, version delta
---

# Architecture

Start here to understand the overall structure and key subsystems of the Bannerlord SDK.

---

## ↑ Parent Navigation

- [🏠 Home](../../) — Version picker
- [📚 API Reference](../api/) — Full catalog of 4819 types

## 🌳 Tree Navigation

```
Bannerlord SDK v1.3.15
├── 🏗️ Architecture (this page)
│   ├── ⭐ SDK Overview — 54-module layered map
│   ├── 📦 Module System — MBSubModuleBase lifecycle
│   ├── 💾 Save System — SaveManager internals
│   └── 📊 Version Delta — 1.3.0→1.3.15→1.4.5 comparison
├── 📖 Guides
│   └── UI/Mission/Campaign/Save tutorials
├── 📚 API Reference
│   └── 4819 types, 12 area subdirectories
└── 🔀 Cross-Version Comparison
    └── Per-class API delta pages
```

## 🔀 Sibling Navigation

| Sibling page | Content |
|-------------|---------|
| [📖 Guides](../guide/) | UI/Mission/Campaign/Save practical tutorials |
| [📚 API Reference](../api/) | Full reference catalog of 4819 types |
| [🔀 Cross-Version](../../../versions/) | 1.3.0 → 1.3.15 → 1.4.5 per-class API deltas |

## ↓ Child Navigation — Architecture Docs

| Document | Covers | Key classes |
|----------|--------|-------------|
| [⭐ SDK Overview](./sdk-overview) | Layered map of all 54 modules, responsibilities, mod entry cheatsheet | `MBSubModuleBase`, `Module` |
| [📦 Module System](./module-system) | `MBSubModuleBase` lifecycle, module loading flow, SubModule.xml | `MBSubModuleBase`, `SubModule` |
| [💾 Save System](./save-system) | `SaveManager` / `SaveContext` / `LoadContext` internals and `[SaveableField]` usage | `SaveManager`, `SaveContext` |
| [📊 Version Delta](./version-delta) | v1.3.0 / v1.3.15 / v1.4.5 module comparison and migration advice | — |

## Layers at a Glance

```
Foundation Library → Systems base → Core data → Engine →
UI Gauntlet → SaveSystem → MountAndBlade → Campaign → Platform services
```

See [SDK Overview](./sdk-overview) for details.
