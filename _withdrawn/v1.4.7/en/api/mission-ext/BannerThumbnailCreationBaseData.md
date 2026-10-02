---
title: "BannerThumbnailCreationBaseData"
description: "BannerThumbnailCreationBaseData — class in TaleWorlds.MountAndBlade.View.Tableaus. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# BannerThumbnailCreationBaseData

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public abstract class BannerThumbnailCreationBaseData : ThumbnailCreationData`  
**Base:** `ThumbnailCreationData`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BannerThumbnailCreationBaseData.cs`

## Overview

`BannerThumbnailCreationBaseData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends ThumbnailCreationData, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BannerThumbnailCreationBaseData`.
- **Instance members** (4): `Banner`, `DebugInfo`, `IsTableauOrNineGrid`, `IsLarge`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Banner` | property | Instance entry point `Banner` property. Read it for current state; a declared setter writes that state in place. |
| `DebugInfo` | property | Instance entry point `BannerDebugInfo` property. Read it for current state; a declared setter writes that state in place. |
| `IsLarge` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsTableauOrNineGrid` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `BannerThumbnailCreationBaseData` | ctor | Instance entry point. Takes 6 arguments: `Banner banner`, `Action<Texture> setAction`, `Action cancelAction`, `BannerDebugInfo debugInfo`, …. Returns ``. |

- Constructed as `public BannerThumbnailCreationBaseData(Banner banner, Action<Texture> setAction, Action cancelAction, BannerDebugInfo debugInfo, bool isTableauOrNineGrid, bool isLarge)`.

## Usage Example

```csharp
var data = new BannerThumbnailCreationBaseData
{
    Banner = default,
    DebugInfo = default,
    IsTableauOrNineGrid = false,
    IsLarge = false,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BannerThumbnailCreationBaseData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BannerDebugInfo](../BannerDebugInfo/) — `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`.

Section: [api/mission-ext/](../) — the other types in this bucket.
