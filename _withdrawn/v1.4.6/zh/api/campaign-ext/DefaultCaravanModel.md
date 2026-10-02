---
title: "DefaultCaravanModel"
description: "DefaultCaravanModel：TaleWorlds.CampaignSystem.GameComponents 的 public 类，继承 CaravanModel；公开成员 7 个（方法 6、属性 1、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultCaravanModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultCaravanModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultCaravanModel : CaravanModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCaravanModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## 概述

DefaultCaravanModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultCaravanModel.cs。它是一个 public 类，实现/继承 CaravanModel，继承链为 DefaultCaravanModel → CaravanModel → MBGameModel → GameModel。public/protected 成员共 7 个：6 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultCaravanModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.GameComponents`），命名空间 `TaleWorlds.CampaignSystem.GameComponents`，继承链 DefaultCaravanModel → CaravanModel → MBGameModel → GameModel。成员构成以方法为主（方法 6/7，属性 1/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultCaravanModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaxNumberOfItemsToBuyFromSingleCategory` | `public override int MaxNumberOfItemsToBuyFromSingleCategory` | 属性 |
| `GetEliteCaravanSpawnChance` | `public override float GetEliteCaravanSpawnChance(Hero hero)` | 方法 |
| `GetPowerChangeAfterCaravanCreation` | `public override int GetPowerChangeAfterCaravanCreation(Hero hero, MobileParty caravanParty)` | 方法 |
| `CanHeroCreateCaravan` | `public override bool CanHeroCreateCaravan(Hero hero)` | 方法 |
| `GetCaravanFormingCost` | `public override int GetCaravanFormingCost(bool largerCaravan, bool navalCaravan)` | 方法 |
| `GetInitialTradeGold` | `public override int GetInitialTradeGold(Hero owner, bool navalCaravan, bool largeCaravan)` | 方法 |
| `GetMaxGoldToSpendOnOneItemCategory` | `public override int GetMaxGoldToSpendOnOneItemCategory(MobileParty caravan, ItemCategory itemCategory)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 CaravanModel](../CaravanModel/)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel/)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel/)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel/)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
