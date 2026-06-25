---
title: "CustomBattleSceneData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleSceneData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleSceneData

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct CustomBattleSceneData`
**Base:** none
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSceneData.cs`

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
var value = new CustomBattleSceneData();
```

## See Also

- [Complete Class Catalog](../catalog)