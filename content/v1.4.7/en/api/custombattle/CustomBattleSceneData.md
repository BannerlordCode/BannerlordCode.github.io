---
title: "CustomBattleSceneData"
description: "CustomBattleSceneData — struct in TaleWorlds.MountAndBlade.CustomBattle. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# CustomBattleSceneData

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`  
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`  
**Type:** `public struct CustomBattleSceneData`  
**Source:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSceneData.cs`

## Overview

`CustomBattleSceneData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CustomBattleSceneData`.
- **Instance members** (9): `SceneID`, `Name`, `Terrain`, `TerrainTypes`, `ForestDensity`, `IsSiegeMap`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ForcedSceneLevel` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `ForestDensity` | property | Instance entry point `ForestDensity` property. Read it for current state; a declared setter writes that state in place. |
| `IsLordsHallMap` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsSiegeMap` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsVillageMap` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Name` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `SceneID` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Terrain` | property | Instance entry point `TerrainType` property. Read it for current state; a declared setter writes that state in place. |
| `TerrainTypes` | property | Instance entry point `List<TerrainType>` property. Read it for current state; a declared setter writes that state in place. |
| `CustomBattleSceneData` | ctor | Instance entry point. Takes 9 arguments: `string sceneID`, `TextObject name`, `TerrainType terrain`, `List<TerrainType> terrainTypes`, …. Returns ``. |

- Constructed as `public CustomBattleSceneData(string sceneID, TextObject name, TerrainType terrain, List<TerrainType> terrainTypes, ForestDensity forestDensity, bool isSiegeMap, bool isVillageMap, bool isLordsHallMap, string forcedSceneLevel)`.

## Usage Example

```csharp
var data = new CustomBattleSceneData
{
    SceneID = "",
    Name = default,
    Terrain = default,
    TerrainTypes = default,
    ForestDensity = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSceneData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/custombattle/](../) — the other types in this bucket.
