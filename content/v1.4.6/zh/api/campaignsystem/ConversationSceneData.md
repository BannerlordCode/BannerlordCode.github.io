---
title: "ConversationSceneData"
description: "ConversationSceneData：TaleWorlds.CampaignSystem 的 public 结构体；公开成员 5 个（方法 0、属性 4、字段 0）。源文件 TaleWorlds.CampaignSystem/ConversationSceneData.cs。"
---
# ConversationSceneData

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public struct ConversationSceneData`
**File:** `TaleWorlds.CampaignSystem/ConversationSceneData.cs`

## 概述

ConversationSceneData 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ConversationSceneData.cs。它是一个 public 结构体，继承链为 ConversationSceneData。public/protected 成员共 5 个：4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ConversationSceneData 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录一致，继承链 ConversationSceneData。成员构成以属性为主（属性 4/5，方法 0/5），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ConversationSceneData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SceneID` | `public string SceneID` | 属性 |
| `Terrain` | `public TerrainType Terrain` | 属性 |
| `List` | `public List<TerrainType>TerrainTypes` | 属性 |
| `ForestDensity` | `public ForestDensity ForestDensity` | 属性 |
| `ConversationSceneData` | `public ConversationSceneData(string sceneID, TerrainType terrain, List<TerrainType>terrainTypes, ForestDensity forestDensity)` | 构造函数 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionNotes](../ActionNotes)
- [同命名空间 AIBehaviorData](../AIBehaviorData)
- [同命名空间 Army](../Army)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid)
