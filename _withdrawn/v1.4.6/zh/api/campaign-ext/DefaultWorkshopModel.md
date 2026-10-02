---
title: "DefaultWorkshopModel"
description: "DefaultWorkshopModel：TaleWorlds.CampaignSystem.GameComponents 的 public 类，继承 WorkshopModel；公开成员 15 个（方法 8、属性 7、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultWorkshopModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultWorkshopModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultWorkshopModel : WorkshopModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultWorkshopModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## 概述

DefaultWorkshopModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultWorkshopModel.cs。它是一个 public 类，实现/继承 WorkshopModel，继承链为 DefaultWorkshopModel → WorkshopModel → MBGameModel → GameModel。public/protected 成员共 15 个：8 方法、7 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultWorkshopModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.GameComponents`），命名空间 `TaleWorlds.CampaignSystem.GameComponents`，继承链 DefaultWorkshopModel → WorkshopModel → MBGameModel → GameModel。成员构成以方法为主（方法 8/15，属性 7/15），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultWorkshopModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WarehouseCapacity` | `public override int WarehouseCapacity` | 属性 |
| `DaysForPlayerSaveWorkshopFromBankruptcy` | `public override int DaysForPlayerSaveWorkshopFromBankruptcy` | 属性 |
| `CapitalLowLimit` | `public override int CapitalLowLimit` | 属性 |
| `InitialCapital` | `public override int InitialCapital` | 属性 |
| `DailyExpense` | `public override int DailyExpense` | 属性 |
| `DefaultWorkshopCountInSettlement` | `public override int DefaultWorkshopCountInSettlement` | 属性 |
| `MaximumWorkshopsPlayerCanHave` | `public override int MaximumWorkshopsPlayerCanHave` | 属性 |
| `GetEffectiveConversionSpeedOfProduction` | `public override ExplainedNumber GetEffectiveConversionSpeedOfProduction(Workshop workshop, float speed, bool includeDescription)` | 方法 |
| `GetMaxWorkshopCountForClanTier` | `public override int GetMaxWorkshopCountForClanTier(int tier)` | 方法 |
| `GetCostForPlayer` | `public override int GetCostForPlayer(Workshop workshop)` | 方法 |
| `GetCostForNotable` | `public override int GetCostForNotable(Workshop workshop)` | 方法 |
| `GetNotableOwnerForWorkshop` | `public override Hero GetNotableOwnerForWorkshop(Workshop workshop)` | 方法 |
| `GetConvertProductionCost` | `public override int GetConvertProductionCost(WorkshopType workshopType)` | 方法 |
| `CanPlayerSellWorkshop` | `public override bool CanPlayerSellWorkshop(Workshop workshop, out TextObject explanation)` | 方法 |
| `GetTradeXpPerWarehouseProduction` | `public override float GetTradeXpPerWarehouseProduction(EquipmentElement production)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 WorkshopModel](../WorkshopModel/)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel/)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel/)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel/)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
