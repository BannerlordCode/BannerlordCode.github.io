---
title: "Bannerlord v1.4.7 Documentation"
description: "Bannerlord 1.4.7 modding documentation rebuilt for full namespace coverage: 19 API subsystem directories, five architecture pages, and a measured version delta."
---
# Bannerlord v1.4.7 Documentation

## What this is

v1.4.7 is a small incremental release in the 1.4 line. For mod authors it is **almost entirely additive** versus 1.4.5: at the API level nothing was deleted (measured: across the 361 namespaces both dumps cover, the removed count is 0), and more than 80% of the added types are `System.*`-style noise.

What actually changed is **how the documentation is organised**. The v1.4.7 tree is rebuilt into 19 subsystem directories derived from namespace rules, with one type belonging to exactly one directory. The 1.4.5 tree had 2,199 duplicated type names and 171 of 513 namespaces split across directories — which is why clicking through it felt like being sent somewhere random with no way back. That was a structural problem, not a content problem.

## How this differs from 1.4.5 and 1.3.15

| | 1.3.15 | 1.4.5 | 1.4.7 |
| --- | --- | --- | --- |
| Source `.cs` files | 5,196 | 8,583 (dump incomplete) | 11,387 |
| Breaking removals for mods | — | — | 1.3.15 → 1.4.7 removes 9 types; `EquipmentFlags` and `MissionAgentSpawnLogic` are the ones to check |
| Doc directories | A–Z type list | 22 hand-written dirs that overlap | 19 dirs generated from namespace rules |
| Same type at two URLs | none | **2,199 duplicated type names** | **0** (hard invariant) |

For the full numbers, the measurement method and the four known URL breaks, see [Version Delta](./architecture/version-delta).

## Where a mod author starts

| I want to | Read first | Then |
| --- | --- | --- |
| get my mod loaded | [Module System](./architecture/module-system) | [Core](./api/core/) |
| hook campaign behaviour | [Module System](./architecture/module-system) | [Campaign-Ext](./api/campaign-ext/) |
| change gold, relations, parties | [Campaign-Ext](./api/campaign-ext/) | [Campaign](./api/campaign/) |
| build a screen | [UI Stack](./architecture/ui-stack) | [GUI](./api/gui/) |
| store my own data | [Save System](./architecture/save-system) | [Save System](./api/save-system/) |
| work out which assembly to reference | [SDK Overview](./architecture/sdk-overview) | [API Reference](./api/) |
| debug an upgrade break | [Version Delta](./architecture/version-delta) | [Cross-version compare](../../versions/) |

## The navigation here is a real tree

Every page can walk back to the root and then down to any other page:

```text
type page -> same-directory index -> 19 subsystem directories -> API reference -> version home -> site home
```

Every hop is a real relative link. Every directory has its own `_index.md`, and each index links back to its parent and sideways to its siblings. Being unable to get back out is therefore structurally excluded here rather than left to chance.

## All sections

### Architecture

- [Architecture hub](./architecture/) — the entry to five diagrams
- [SDK Overview](./architecture/sdk-overview) — assembly layering and reference map
- [Module System](./architecture/module-system) — Module and MBSubModuleBase
- [Save System](./architecture/save-system) — SaveManager and type registration
- [UI Stack](./architecture/ui-stack) — ScreenSystem / Gauntlet / ViewModel
- [Version Delta](./architecture/version-delta) — 1.4.7 vs 1.4.5 vs 1.3.15

### API Reference

- [API Reference](./api/) — the 19-directory entry table
- [core](./api/core/) — 0 pages
- [core-extra](./api/core-extra/) — 54 pages
- [mission](./api/mission/) — 0 pages
- [mission-ext](./api/mission-ext/) — 518 pages
- [campaign](./api/campaign/) — 189 pages
- [campaign-ext](./api/campaign-ext/) — 71 pages
- [gui](./api/gui/) — 72 pages
- [save-system](./api/save-system/) — 25 pages
- [viewmodel](./api/viewmodel/) — 357 pages
- [localization](./api/localization/) — 24 pages
- [engine](./api/engine/) — 41 pages
- [system](./api/system/) — 6 pages
- [custombattle](./api/custombattle/) — 21 pages
- [modulemanager](./api/modulemanager/) — 6 pages
- [network](./api/network/) — 6 pages
- [sandbox](./api/sandbox/) — 321 pages
- [storymode](./api/storymode/) — 74 pages
- [activitysystem](./api/activitysystem/) — 6 pages
- [achievementsystem](./api/achievementsystem/) — 4 pages

## See also

- ↔ [中文](../zh/)
- ↘ [Cross-Version Class Comparison](../../versions/)
- ↘ [v1.4.5 docs](../../v1.4.5/) · [v1.3.15 docs](../../v1.3.15/) · [v1.3.0 docs](../../v1.3.0/)
