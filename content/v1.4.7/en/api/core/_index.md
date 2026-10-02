---
title: "Core — the module-loading entry classes, and nothing else"
description: "Two classes live here: MBSubModuleBase and Module. 2 pages in the Chinese tree, 1 in this one."
---
# Core — the module-loading entry classes, and nothing else

Two classes live in this directory, and they were picked by name rather than by any namespace rule: `MBSubModuleBase` and `Module`. A mod subclasses `MBSubModuleBase`; the game finds it, constructs it and calls its lifecycle callbacks. `Module` is the host — a sealed singleton that owns the submodule list and decides load order. You do not inherit it.

The bucket exists so that "I want my mod to load" is one click from one place. It sits next to [core-extra](../core-extra/), the catch-all bucket, but the two do different jobs: this one is about startup, that one is about the runtime you then build on.

`Game` used to appear in both `core/` and `core-extra/` in the 1.4.5 tree. v1.4.7 keeps only the `core-extra/` copy, because `Game`'s namespace is `TaleWorlds.Core`. There is no `Game` page here.

## Pages in this area (1)

| Page | What it covers |
| --- | --- |
| [MBSubModuleBase](./MBSubModuleBase) | the abstract class a mod subclasses to get loaded at all |

`Module` is documented in the Chinese tree at [zh/api/core/Module](../../../zh/api/core/Module). It has no page in this tree.

## Not yet written

Nothing is missing here by rule — this bucket is defined as those two classes, and both have pages, one of them on the other side of the language boundary. What is missing is the page that puts the two together: how a `Module` ends up calling your `MBSubModuleBase`, and in what order. That is [Module System](../../architecture/module-system) instead.

## Sibling areas

[core-extra](../core-extra/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [sandbox](../sandbox/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

There is no `save-system/` directory in this tree. Its three pages are Chinese-tree-only; start at [zh/api/save-system/SaveManager](../../../zh/api/save-system/SaveManager).

## See also

- ↑ [Version home](../../)
- ↑ [API reference](../)
- ↔ [Architecture overview](../../architecture/)
- ↘ [Module System](../../architecture/module-system)