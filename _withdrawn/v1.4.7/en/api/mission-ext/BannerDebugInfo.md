---
title: "BannerDebugInfo"
description: "BannerDebugInfo — struct in TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails. 7 public members (2 static)."
---

<!-- v147-skeleton -->
# BannerDebugInfo

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public struct BannerDebugInfo`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerDebugInfo.cs`

## Overview

`BannerDebugInfo` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Static entry points** (2): `CreateManual`, `CreateWidget`.
- **Instance members** (3): `CreateName`, `ToString`, `SourceTypes`.
- **Extension points** (1): `ToString`.
- **Data and constants** (2): `SourceType`, `SourceName`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateManual` | method (static) | Static entry point. Takes 1 argument: `string sourceName`. Returns `BannerDebugInfo`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateWidget` | method (static) | Static entry point. Takes 1 argument: `string sourceName`. Returns `BannerDebugInfo`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `ToString` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. |
| `CreateName` | method | Instance entry point. Takes no arguments. Returns `string`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `SourceTypes` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `SourceName` | field | Instance entry point `string` field — direct storage with no validation or notification. |
| `SourceType` | field | Instance entry point `BannerDebugInfo.SourceTypes` field — direct storage with no validation or notification. |

## Usage Example

```csharp
var data = new BannerDebugInfo
{
    SourceType = default,
    SourceName = "",
    SourceTypes = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerDebugInfo.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
