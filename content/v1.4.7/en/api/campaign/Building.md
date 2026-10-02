---
title: "Building"
description: "Building — class in TaleWorlds.CampaignSystem.Settlements.Buildings. 13 public members (0 static)."
---

<!-- v147-skeleton -->
# Building

**Namespace:** `TaleWorlds.CampaignSystem.Settlements.Buildings`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class Building`  
**Source:** `TaleWorlds.CampaignSystem/Settlements/Buildings/Building.cs`

## Overview

`Building` is a named type in the TaleWorlds.CampaignSystem.Settlements.Buildings namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `Building`.
- **Instance members** (11): `Name`, `Explanation`, `BuildingType`, `CurrentLevel`, `GetHashCode`, `GetConstructionCost`, ….
- **Extension points** (1): `GetHashCode`.
- **Data and constants** (1): `MaxHitpoints`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetHashCode` | method (override) | Overrides the base member. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `AddEffectOfBuilding` | method | Instance entry point. Takes 2 arguments: `BuildingEffectEnum buildingEffect`, `ref ExplainedNumber result`. Adds to the collection or relation this type owns. |
| `BuildingType` | property | Instance entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentLevel` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Explanation` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `GetBonusExplanation` | method | Instance entry point. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetConstructionCost` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `HitPointChanged` | method | Instance entry point. Takes 1 argument: `float change`. |
| `LevelDown` | method | Instance entry point. Takes no arguments. |
| `LevelUp` | method | Instance entry point. Takes no arguments. |
| `Name` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `MaxHitpoints` | const | Instance entry point. Takes no arguments. Returns `float`. |
| `Building` | ctor | Instance entry point. Takes 4 arguments: `BuildingType buildingType`, `Town town`, `float buildingProgress`, `int currentLevel`. Returns ``. |

- Constructed as `public Building(BuildingType buildingType, Town town, float buildingProgress = 0f, int currentLevel = 0)`.

## Usage Example

```csharp
var building = new Building(buildingType, town, buildingProgress, currentLevel);
building.GetHashCode();
// Read current state through building.Name.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Settlements/Buildings/Building.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Town](../Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [BuildingType](../BuildingType/) — `TaleWorlds.CampaignSystem.Settlements.Buildings`.
- [BuildingEffectEnum](../BuildingEffectEnum/) — `TaleWorlds.CampaignSystem.Settlements.Buildings`.
- [ExplainedNumber](../ExplainedNumber/) — `TaleWorlds.CampaignSystem`.
- [BuildingEffectIncrementType](../BuildingEffectIncrementType/) — `TaleWorlds.CampaignSystem.Settlements.Buildings`.

Section: [api/campaign/](../) — the other types in this bucket.
