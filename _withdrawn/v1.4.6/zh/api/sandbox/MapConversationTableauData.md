---
title: "MapConversationTableauData"
description: "MapConversationTableauData：SandBox.View.Map 的 public 类；公开成员 10 个（方法 1、属性 9、字段 0）。canonical 桶 sandbox。源文件 SandBox.View/Map/MapConversationTableauData.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapConversationTableauData

**Namespace:** `SandBox.View.Map`
**Module:** `SandBox.View`
**Type:** `public class MapConversationTableauData`
**File:** `SandBox.View/Map/MapConversationTableauData.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MapConversationTableauData 位于 SandBox.View 模块，源文件 SandBox.View/Map/MapConversationTableauData.cs。它是一个 public 类，继承链为 MapConversationTableauData。public/protected 成员共 10 个：1 方法、9 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapConversationTableauData 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.View.Map`，继承链 MapConversationTableauData。成员构成以属性为主（属性 9/10，方法 1/10），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Map/MapConversationTableauData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerCharacterData` | `public ConversationCharacterData PlayerCharacterData` | 属性 |
| `ConversationPartnerData` | `public ConversationCharacterData ConversationPartnerData` | 属性 |
| `ConversationTerrainType` | `public TerrainType ConversationTerrainType` | 属性 |
| `TimeOfDay` | `public float TimeOfDay` | 属性 |
| `IsCurrentTerrainUnderSnow` | `public bool IsCurrentTerrainUnderSnow` | 属性 |
| `Settlement` | `public Settlement Settlement` | 属性 |
| `LocationId` | `public string LocationId` | 属性 |
| `IsSnowing` | `public bool IsSnowing` | 属性 |
| `IsRaining` | `public bool IsRaining` | 属性 |
| `CreateFrom` | `public static MapConversationTableauData CreateFrom(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData, TerrainType terrainType, float timeOfDay, bool isCurrentTerrainUnderSnow, Settlement settlement, string locationId, bool isRaining, bool isSnowing)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 BattleSimulationMapView](../BattleSimulationMapView/)
- [同命名空间 BlockadePositionScript](../BlockadePositionScript/)
- [同命名空间 CampaignEntityVisualComponent](../CampaignEntityVisualComponent/)
- [同命名空间 DefaultMapConversationDataProvider](../DefaultMapConversationDataProvider/)
