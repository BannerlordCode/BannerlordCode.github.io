---
title: "CaravanModel"
description: "CaravanModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<CaravanModel>；公开成员 7 个（方法 6、属性 1、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/CaravanModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CaravanModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CaravanModel : MBGameModel<CaravanModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CaravanModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

CaravanModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/CaravanModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<CaravanModel>，继承链为 CaravanModel → MBGameModel → GameModel。public/protected 成员共 7 个：6 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CaravanModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 CaravanModel → MBGameModel → GameModel。成员构成以方法为主（方法 6/7，属性 1/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/CaravanModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaxNumberOfItemsToBuyFromSingleCategory` | `public abstract int MaxNumberOfItemsToBuyFromSingleCategory` | 属性 |
| `GetMaxGoldToSpendOnOneItemCategory` | `public abstract int GetMaxGoldToSpendOnOneItemCategory(MobileParty caravan, ItemCategory itemCategory);` | 方法 |
| `GetInitialTradeGold` | `public abstract int GetInitialTradeGold(Hero owner, bool isNavalCaravan, bool eliteCaravan);` | 方法 |
| `GetCaravanFormingCost` | `public abstract int GetCaravanFormingCost(bool eliteCaravan, bool navalCaravan);` | 方法 |
| `GetPowerChangeAfterCaravanCreation` | `public abstract int GetPowerChangeAfterCaravanCreation(Hero hero, MobileParty caravanParty);` | 方法 |
| `CanHeroCreateCaravan` | `public abstract bool CanHeroCreateCaravan(Hero hero);` | 方法 |
| `GetEliteCaravanSpawnChance` | `public abstract float GetEliteCaravanSpawnChance(Hero hero);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
