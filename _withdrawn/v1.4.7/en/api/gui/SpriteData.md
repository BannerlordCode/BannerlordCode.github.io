---
title: "SpriteData"
description: "SpriteData — class in TaleWorlds.TwoDimension. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# SpriteData

**Namespace:** `TaleWorlds.TwoDimension`  
**Module:** `TaleWorlds.TwoDimension`  
**Type:** `public class SpriteData`  
**Source:** `TaleWorlds.TwoDimension/SpriteData.cs`

## Overview

`SpriteData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `SpriteData`.
- **Instance members** (5): `Name`, `GetSprite`, `SpriteExists`, `Load`, `Reload`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetSprite` | method | Instance entry point. Takes 1 argument: `string name`. Returns `Sprite`. Read path: prefer it over reaching for the backing store. |
| `Load` | method | Instance entry point. Takes 1 argument: `ResourceDepot resourceDepot`. |
| `Name` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Reload` | method | Instance entry point. Takes 2 arguments: `ResourceDepot resourceDepot`, `ITwoDimensionResourceContext resourceContext`. |
| `SpriteExists` | method | Instance entry point. Takes 1 argument: `string spriteName`. Returns `bool`. |
| `SpriteData` | ctor | Instance entry point. Takes 1 argument: `string name`. Returns ``. |

- Constructed as `public SpriteData(string name)`.

## Usage Example

```csharp
var data = new SpriteData
{
    Name = "",
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.TwoDimension/SpriteData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [SpriteCategory](../SpriteCategory/) — `TaleWorlds.TwoDimension`.
- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.

Section: [api/gui/](../) — the other types in this bucket.
