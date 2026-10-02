---
title: "DefaultTroopSupplierProbabilityModel"
description: "DefaultTroopSupplierProbabilityModel：TaleWorlds.CampaignSystem.GameComponents 的 public 类，继承 TroopSupplierProbabilityModel；公开成员 1 个（方法 1、属性 0、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultTroopSupplierProbabilityModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultTroopSupplierProbabilityModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultTroopSupplierProbabilityModel : TroopSupplierProbabilityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTroopSupplierProbabilityModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## 概述

DefaultTroopSupplierProbabilityModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultTroopSupplierProbabilityModel.cs。它是一个 public 类，实现/继承 TroopSupplierProbabilityModel，继承链为 DefaultTroopSupplierProbabilityModel → TroopSupplierProbabilityModel → MBGameModel → GameModel。public/protected 成员共 1 个：1 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultTroopSupplierProbabilityModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.GameComponents`），命名空间 `TaleWorlds.CampaignSystem.GameComponents`，继承链 DefaultTroopSupplierProbabilityModel → TroopSupplierProbabilityModel → MBGameModel → GameModel。成员构成以方法为主（方法 1/1，属性 0/1），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultTroopSupplierProbabilityModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization` | `public override void EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(MapEventParty battleParty, FlattenedTroopRoster priorityTroops, bool includePlayer, int sizeOfSide, bool forcePriorityTroops, List<ValueTuple<FlattenedTroopRosterElement, MapEventParty, float>>priorityList)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 TroopSupplierProbabilityModel](../TroopSupplierProbabilityModel/)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel/)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel/)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel/)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
