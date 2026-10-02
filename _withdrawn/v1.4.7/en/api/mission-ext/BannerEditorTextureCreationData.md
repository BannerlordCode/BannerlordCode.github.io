---
title: "BannerEditorTextureCreationData"
description: "BannerEditorTextureCreationData — class in TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# BannerEditorTextureCreationData

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class BannerEditorTextureCreationData : BannerThumbnailCreationBaseData`  
**Base:** `BannerThumbnailCreationBaseData`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerEditorTextureCreationData.cs`

## Overview

`BannerEditorTextureCreationData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends BannerThumbnailCreationBaseData, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BannerEditorTextureCreationData`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `BannerEditorTextureCreationData` | ctor | Instance entry point. Takes 6 arguments: `Banner banner`, `Action<Texture> setAction`, `Action cancelAction`, `BannerDebugInfo debugInfo`, …. Returns ``. |

- Constructed as `public BannerEditorTextureCreationData(Banner banner, Action<Texture> setAction, Action cancelAction, BannerDebugInfo debugInfo, bool isTableauOrNineGrid, bool isLarge)`.

## Usage Example

```csharp
// BannerEditorTextureCreationData declares no public members.
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerEditorTextureCreationData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BannerThumbnailCreationBaseData](../BannerThumbnailCreationBaseData/) — `TaleWorlds.MountAndBlade.View.Tableaus`.
- [BannerDebugInfo](../BannerDebugInfo/) — `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`.

Section: [api/mission-ext/](../) — the other types in this bucket.
