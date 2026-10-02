---
title: "LocatableSearchData"
description: "LocatableSearchData — struct in TaleWorlds.CampaignSystem.Map. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# LocatableSearchData

**Namespace:** `TaleWorlds.CampaignSystem.Map`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public struct LocatableSearchData<T>`  
**Source:** `TaleWorlds.CampaignSystem/Map/LocatableSearchData.cs`

## Overview

`LocatableSearchData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `LocatableSearchData`.
- **Data and constants** (7): `Position`, `RadiusSquared`, `MinY`, `MaxXInclusive`, `MaxYInclusive`, `CurrentX`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `LocatableSearchData` | ctor | Instance entry point. Takes 6 arguments: `Vec2 position`, `float radius`, `int minX`, `int minY`, …. Returns ``. |
| `CurrentX` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `CurrentY` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `MaxXInclusive` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `MaxYInclusive` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `MinY` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `Position` | field | Instance entry point `Vec2` field — direct storage with no validation or notification. |
| `RadiusSquared` | field | Instance entry point `float` field — direct storage with no validation or notification. |

- Constructed as `public LocatableSearchData(Vec2 position, float radius, int minX, int minY, int maxX, int maxY)`.

## Usage Example

```csharp
var data = new LocatableSearchData
{
    Position = default,
    RadiusSquared = 0,
    MinY = 0,
    MaxXInclusive = 0,
    MaxYInclusive = 0,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.CampaignSystem/Map/LocatableSearchData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ILocatable](../ILocatable/) — `TaleWorlds.CampaignSystem.Map`.

Section: [api/campaign/](../) — the other types in this bucket.
