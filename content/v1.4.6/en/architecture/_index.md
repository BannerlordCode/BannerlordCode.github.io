---
title: "Architecture / 架构总览"
description: "Entry point for v1.4.6 architecture: what module-map, sdk-overview and version-delta each answer, the reading order, and tree navigation."
---
# Architecture

> **Architecture is a transit map, not a parts list.** This page answers one question only: which page do you start from for the thing you are building, and where do you go afterwards. Every architecture page stands on its own and links back to the others.

## One-line map

```
bannerlord-1.4.6/<module dir>/          the code you are changing
        │  71 gameplay modules, dir name == assembly name
        ▼
SDK layers (sdk-overview)              first decide how long objects live
        │  Foundation / Campaign / Mission / UI / Save
        ▼
Module map (module-map)                then decide which directory owns it
        │
        ▼
API section /api/<module slug>/        look up a concrete class last
        │
        ▼
Version delta (version-delta)          only when you also support older builds
```

**90% of mods only touch the middle three layers**: module entry (`MBSubModuleBase`) → campaign/mission behaviour → save.

## What each of the three pages answers

| Page | The question it answers | Read it when |
| --- | --- | --- |
| [SDK layering overview](./sdk-overview) | Which layer does this code belong to, what does it depend on, and what is the entry class? | First page of every new mod |
| [Module map](./module-map) | Which module directories does 1.4.6 have, what does each own, and when does a mod touch it? | Once you know what you are building |
| [Version delta](./version-delta) | What did 1.4.6 add or remove relative to 1.4.5 and 1.3.15? | When you must also run on an older build |

## Recommended reading order

1. [SDK layering overview](./sdk-overview) — get the layering intuition, confirm the target layer.
2. [Module map](./module-map) — drop from a layer to a concrete 1.4.6 directory name.
3. [Version delta](./version-delta) — confirm the API you rely on exists in your target build.
4. Then enter the API sections and open the type page.

## Tree navigation

```
Bannerlord v1.4.6 / English
├── Version landing page (positioning + task table)   ← ../  en/_index.md
├── Architecture (this page)                          ← architecture/_index.md
│   ├── SDK layering overview
│   ├── Module map
│   └── Version delta
└── API reference                                     ← ../api/
```

## Navigation

- [↑ Up](../../) — version landing page
- ↔ Siblings: [API reference](../api/) · [中文](../../zh/architecture/) · [v1.4.5 architecture](../../../v1.4.5/en/architecture/) · [v1.3.15 architecture](../../../v1.3.15/en/architecture/)
- ↔ Cross-version: [per-class API comparison](../../../versions/)
- ⬆ Site: [home](../../../)