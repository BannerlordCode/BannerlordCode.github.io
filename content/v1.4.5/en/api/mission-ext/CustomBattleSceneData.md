---
title: "CustomBattleSceneData"
description: "Auto-generated class reference for CustomBattleSceneData."
---
# CustomBattleSceneData

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct CustomBattleSceneData`
**Base:** none
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSceneData.cs`

## Overview

`CustomBattleSceneData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `CustomBattleSceneData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SceneID` | `public string SceneID { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `Terrain` | `public TerrainType Terrain { get; }` |
| `TerrainTypes` | `public List<TerrainType> TerrainTypes { get; }` |
| `ForestDensity` | `public ForestDensity ForestDensity { get; }` |
| `IsSiegeMap` | `public bool IsSiegeMap { get; }` |
| `IsVillageMap` | `public bool IsVillageMap { get; }` |
| `IsLordsHallMap` | `public bool IsLordsHallMap { get; }` |
| `ForcedSceneLevel` | `public string ForcedSceneLevel { get; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
CustomBattleSceneData entry = ...;
```

## See Also

- [Area Index](../)