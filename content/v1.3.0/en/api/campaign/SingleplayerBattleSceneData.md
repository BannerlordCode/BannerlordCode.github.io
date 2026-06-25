---
title: "SingleplayerBattleSceneData"
description: "Auto-generated class reference for SingleplayerBattleSceneData."
---
# SingleplayerBattleSceneData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct SingleplayerBattleSceneData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/SingleplayerBattleSceneData.cs`

## Overview

`SingleplayerBattleSceneData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `SingleplayerBattleSceneData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SceneID` | `public string SceneID { get; }` |
| `Terrain` | `public TerrainType Terrain { get; }` |
| `TerrainTypes` | `public List<TerrainType> TerrainTypes { get; }` |
| `ForestDensity` | `public ForestDensity ForestDensity { get; }` |
| `MapIndices` | `public List<int> MapIndices { get; }` |
| `IsNaval` | `public bool IsNaval { get; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
SingleplayerBattleSceneData entry = ...;
```

## See Also

- [Area Index](../)