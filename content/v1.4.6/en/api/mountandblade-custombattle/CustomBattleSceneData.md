---
title: "CustomBattleSceneData"
description: "CustomBattleSceneData: a public struct in TaleWorlds.MountAndBlade.CustomBattle; 10 exposed members (0 methods, 9 properties, 0 fields). Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSceneData.cs."
---
# CustomBattleSceneData

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public struct CustomBattleSceneData`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSceneData.cs`

## Overview

CustomBattleSceneData lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSceneData.cs. It is a public struct; the inheritance chain is CustomBattleSceneData. It exposes 10 public/protected members: 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleSceneData is a top-level type in TaleWorlds.MountAndBlade.CustomBattle, namespace matching the module directory; inheritance chain CustomBattleSceneData. The surface is property-led (properties 9/10, methods 0/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSceneData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SceneID` | `public string SceneID` | property |
| `Name` | `public TextObject Name` | property |
| `Terrain` | `public TerrainType Terrain` | property |
| `List` | `public List<TerrainType>TerrainTypes` | property |
| `ForestDensity` | `public ForestDensity ForestDensity` | property |
| `IsSiegeMap` | `public bool IsSiegeMap` | property |
| `IsVillageMap` | `public bool IsVillageMap` | property |
| `IsLordsHallMap` | `public bool IsLordsHallMap` | property |
| `ForcedSceneLevel` | `public string ForcedSceneLevel` | property |
| `CustomBattleSceneData` | `public CustomBattleSceneData(string sceneID, TextObject name, TerrainType terrain, List<TerrainType>terrainTypes, ForestDensity forestDensity, bool isSiegeMap, bool isVillageMap, bool isLordsHallMap, string forcedSceneLevel)` | constructor |

## See Also

- [↑ mountandblade-custombattle module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyCompositionGroupVM](../ArmyCompositionGroupVM)
- [same namespace ArmyCompositionItemVM](../ArmyCompositionItemVM)
- [same namespace CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic)
- [same namespace CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler)
