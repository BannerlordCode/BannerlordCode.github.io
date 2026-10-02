---
title: "WorkshopModel"
description: "WorkshopModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<WorkshopModel>；公开成员 15 个（方法 8、属性 7、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/WorkshopModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WorkshopModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class WorkshopModel : MBGameModel<WorkshopModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/WorkshopModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

WorkshopModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/WorkshopModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<WorkshopModel>，继承链为 WorkshopModel → MBGameModel → GameModel。public/protected 成员共 15 个：8 方法、7 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WorkshopModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 WorkshopModel → MBGameModel → GameModel。成员构成以方法为主（方法 8/15，属性 7/15），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/WorkshopModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DaysForPlayerSaveWorkshopFromBankruptcy` | `public abstract int DaysForPlayerSaveWorkshopFromBankruptcy` | 属性 |
| `CapitalLowLimit` | `public abstract int CapitalLowLimit` | 属性 |
| `InitialCapital` | `public abstract int InitialCapital` | 属性 |
| `GetMaxWorkshopCountForClanTier` | `public abstract int GetMaxWorkshopCountForClanTier(int tier);` | 方法 |
| `GetCostForPlayer` | `public abstract int GetCostForPlayer(Workshop workshop);` | 方法 |
| `DailyExpense` | `public abstract int DailyExpense` | 属性 |
| `GetCostForNotable` | `public abstract int GetCostForNotable(Workshop workshop);` | 方法 |
| `WarehouseCapacity` | `public abstract int WarehouseCapacity` | 属性 |
| `DefaultWorkshopCountInSettlement` | `public abstract int DefaultWorkshopCountInSettlement` | 属性 |
| `MaximumWorkshopsPlayerCanHave` | `public abstract int MaximumWorkshopsPlayerCanHave` | 属性 |
| `GetNotableOwnerForWorkshop` | `public abstract Hero GetNotableOwnerForWorkshop(Workshop workshop);` | 方法 |
| `GetEffectiveConversionSpeedOfProduction` | `public abstract ExplainedNumber GetEffectiveConversionSpeedOfProduction(Workshop workshop, float speed, bool includeDescriptions);` | 方法 |
| `GetConvertProductionCost` | `public abstract int GetConvertProductionCost(WorkshopType workshopType);` | 方法 |
| `CanPlayerSellWorkshop` | `public abstract bool CanPlayerSellWorkshop(Workshop workshop, out TextObject explanation);` | 方法 |
| `GetTradeXpPerWarehouseProduction` | `public abstract float GetTradeXpPerWarehouseProduction(EquipmentElement production);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
