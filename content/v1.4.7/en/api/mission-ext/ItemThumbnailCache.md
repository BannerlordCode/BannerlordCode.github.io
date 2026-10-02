---
title: "ItemThumbnailCache"
description: "ItemThumbnailCache — class in TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# ItemThumbnailCache

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class ItemThumbnailCache : ThumbnailCache<ItemThumbnailCreationData>`  
**Base:** `ThumbnailCache`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ItemThumbnailCache.cs`

## Overview

`ItemThumbnailCache` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends ThumbnailCache, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ItemThumbnailCache`.
- **Instance members** (4): `OnInitialize`, `OnFinalize`, `OnCreateTexture`, `OnReleaseTexture`.
- **Extension points** (4): `OnInitialize`, `OnFinalize`, `OnCreateTexture`, `OnReleaseTexture`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnCreateTexture` | method (override) | Overrides the base member. Takes 1 argument: `ItemThumbnailCreationData thumbnailCreationData`. Returns `TextureCreationInfo`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnReleaseTexture` | method (override) | Overrides the base member. Takes 1 argument: `ItemThumbnailCreationData thumbnailCreationData`. Returns `bool`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ItemThumbnailCache` | ctor | Instance entry point. Takes 1 argument: `int capacity`. Returns ``. |

- Constructed as `public ItemThumbnailCache(int capacity)`.

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var itemThumbnailCache = new ItemThumbnailCache(capacity);
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ItemThumbnailCache.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Utilities](../../engine/Utilities/) — `TaleWorlds.Engine`.

Section: [api/mission-ext/](../) — the other types in this bucket.
