---
title: "Modulemanager — module metadata and dependency resolution"
description: "Where TaleWorlds.ModuleManager lives: 8 .cs files. Reading module info and resolving dependencies. No pages."
---
# Modulemanager — module metadata and dependency resolution

`TaleWorlds.ModuleManager`, 8 `.cs` files. It answers one question: what does this mod need, what is already here, and does anything conflict.

First, a clarification that is easy to get wrong: **no version of the game has a class called `ModuleManager`**. The directory is named after the namespace. What is in it: `ModuleInfo`, `SubModuleInfo`, `DependedModule`, `ModuleCategory`, `ModuleType`, `ModuleHelper`, `Extensions` and `IPlatformModuleExtension`.

A mod author rarely calls into this layer directly, but its data decides load time: the dependencies you declare in your `SubModuleInfo` are checked here against what is already loaded, and the result determines whether you load at all and in what order. The dependency-check step of the flow described in [Module System](../../architecture/module-system) lands in this bucket.

`IPlatformModuleExtension` is the platform hook — a module can declare extra behaviour per platform, and it is the only type here you touch when doing multi-platform work.

## Pages in this area (0)

There are no pages in this bucket.

## Not yet written

All 8 types: `ModuleInfo` (one module's metadata), `SubModuleInfo` (a submodule's metadata — the thing you fill in), `DependedModule` (a declared dependency), `ModuleCategory`, `ModuleType`, `ModuleHelper` (lookup helpers), `Extensions` and `IPlatformModuleExtension`.

The bucket is small — about 6 documented types — but at zero pages "how does dependency resolution actually decide, and what happens if I get it wrong" has no answer in this documentation.

## Sibling areas

[core](../core/) · [core-extra](../core-extra/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [sandbox](../sandbox/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

There is no `save-system/` directory in this tree; its pages are Chinese-tree-only — [zh/api/save-system/SaveManager](../../../zh/api/save-system/SaveManager).

## See also

- ↑ [Version home](../../)
- ↑ [API reference](../)
- ↔ [Architecture overview](../../architecture/)
- ↘ [Module System](../../architecture/module-system)