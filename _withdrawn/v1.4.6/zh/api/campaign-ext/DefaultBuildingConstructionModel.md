---
title: "DefaultBuildingConstructionModel"
description: "DefaultBuildingConstructionModel：TaleWorlds.CampaignSystem.GameComponents 的 public 类，继承 BuildingConstructionModel；公开成员 8 个（方法 4、属性 4、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingConstructionModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultBuildingConstructionModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultBuildingConstructionModel : BuildingConstructionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingConstructionModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## 概述

DefaultBuildingConstructionModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingConstructionModel.cs。它是一个 public 类，实现/继承 BuildingConstructionModel，继承链为 DefaultBuildingConstructionModel → BuildingConstructionModel → MBGameModel → GameModel。public/protected 成员共 8 个：4 方法、4 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultBuildingConstructionModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.GameComponents`），命名空间 `TaleWorlds.CampaignSystem.GameComponents`，继承链 DefaultBuildingConstructionModel → BuildingConstructionModel → MBGameModel → GameModel。成员构成以方法为主（方法 4/8，属性 4/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingConstructionModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TownBoostCost` | `public override int TownBoostCost` | 属性 |
| `TownBoostBonus` | `public override int TownBoostBonus` | 属性 |
| `CastleBoostCost` | `public override int CastleBoostCost` | 属性 |
| `CastleBoostBonus` | `public override int CastleBoostBonus` | 属性 |
| `CalculateDailyConstructionPower` | `public override ExplainedNumber CalculateDailyConstructionPower(Town town, bool includeDescriptions = false)` | 方法 |
| `CalculateDailyConstructionPowerWithoutBoost` | `public override int CalculateDailyConstructionPowerWithoutBoost(Town town)` | 方法 |
| `GetBoostAmount` | `public override int GetBoostAmount(Town town)` | 方法 |
| `GetBoostCost` | `public override int GetBoostCost(Town town)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 BuildingConstructionModel](../BuildingConstructionModel/)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel/)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel/)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel/)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
