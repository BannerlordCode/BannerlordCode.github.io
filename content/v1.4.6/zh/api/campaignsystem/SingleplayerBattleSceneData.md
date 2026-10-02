---
title: "SingleplayerBattleSceneData"
description: "SingleplayerBattleSceneData：TaleWorlds.CampaignSystem 的 public 结构体；公开成员 7 个（方法 0、属性 6、字段 0）。源文件 TaleWorlds.CampaignSystem/SingleplayerBattleSceneData.cs。"
---
# SingleplayerBattleSceneData

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public struct SingleplayerBattleSceneData`
**File:** `TaleWorlds.CampaignSystem/SingleplayerBattleSceneData.cs`

## 概述

SingleplayerBattleSceneData 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/SingleplayerBattleSceneData.cs。它是一个 public 结构体，继承链为 SingleplayerBattleSceneData。public/protected 成员共 7 个：6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SingleplayerBattleSceneData 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录一致，继承链 SingleplayerBattleSceneData。成员构成以属性为主（属性 6/7，方法 0/7），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/SingleplayerBattleSceneData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SceneID` | `public string SceneID` | 属性 |
| `Terrain` | `public TerrainType Terrain` | 属性 |
| `List` | `public List<TerrainType>TerrainTypes` | 属性 |
| `ForestDensity` | `public ForestDensity ForestDensity` | 属性 |
| `List` | `public List<int>MapIndices` | 属性 |
| `IsNaval` | `public bool IsNaval` | 属性 |
| `SingleplayerBattleSceneData` | `public SingleplayerBattleSceneData(string sceneID, TerrainType terrain, List<TerrainType>terrainTypes, ForestDensity forestDensity, List<int>mapIndices, bool isNaval)` | 构造函数 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionNotes](../ActionNotes)
- [同命名空间 AIBehaviorData](../AIBehaviorData)
- [同命名空间 Army](../Army)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid)
