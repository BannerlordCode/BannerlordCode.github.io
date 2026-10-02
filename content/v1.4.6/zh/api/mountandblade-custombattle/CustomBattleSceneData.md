---
title: "CustomBattleSceneData"
description: "CustomBattleSceneData：TaleWorlds.MountAndBlade.CustomBattle 的 public 结构体；公开成员 10 个（方法 0、属性 9、字段 0）。源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSceneData.cs。"
---
# CustomBattleSceneData

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public struct CustomBattleSceneData`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSceneData.cs`

## 概述

CustomBattleSceneData 位于 TaleWorlds.MountAndBlade.CustomBattle 模块，源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSceneData.cs。它是一个 public 结构体，继承链为 CustomBattleSceneData。public/protected 成员共 10 个：9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CustomBattleSceneData 是 TaleWorlds.MountAndBlade.CustomBattle 的顶层类型，命名空间与模块目录一致，继承链 CustomBattleSceneData。成员构成以属性为主（属性 9/10，方法 0/10），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSceneData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SceneID` | `public string SceneID` | 属性 |
| `Name` | `public TextObject Name` | 属性 |
| `Terrain` | `public TerrainType Terrain` | 属性 |
| `List` | `public List<TerrainType>TerrainTypes` | 属性 |
| `ForestDensity` | `public ForestDensity ForestDensity` | 属性 |
| `IsSiegeMap` | `public bool IsSiegeMap` | 属性 |
| `IsVillageMap` | `public bool IsVillageMap` | 属性 |
| `IsLordsHallMap` | `public bool IsLordsHallMap` | 属性 |
| `ForcedSceneLevel` | `public string ForcedSceneLevel` | 属性 |
| `CustomBattleSceneData` | `public CustomBattleSceneData(string sceneID, TextObject name, TerrainType terrain, List<TerrainType>terrainTypes, ForestDensity forestDensity, bool isSiegeMap, bool isVillageMap, bool isLordsHallMap, string forcedSceneLevel)` | 构造函数 |

## 参见

- [↑ mountandblade-custombattle 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ArmyCompositionGroupVM](../ArmyCompositionGroupVM)
- [同命名空间 ArmyCompositionItemVM](../ArmyCompositionItemVM)
- [同命名空间 CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic)
- [同命名空间 CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler)
