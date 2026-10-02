---
title: "NotablePowerModel"
description: "NotablePowerModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<NotablePowerModel>；公开成员 7 个（方法 5、属性 2、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/NotablePowerModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NotablePowerModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class NotablePowerModel : MBGameModel<NotablePowerModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/NotablePowerModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

NotablePowerModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/NotablePowerModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<NotablePowerModel>，继承链为 NotablePowerModel → MBGameModel → GameModel。public/protected 成员共 7 个：5 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NotablePowerModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 NotablePowerModel → MBGameModel → GameModel。成员构成以方法为主（方法 5/7，属性 2/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/NotablePowerModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegularNotableMaxPowerLevel` | `public abstract int RegularNotableMaxPowerLevel` | 属性 |
| `NotableDisappearPowerLimit` | `public abstract int NotableDisappearPowerLimit` | 属性 |
| `CalculateDailyPowerChangeForHero` | `public abstract ExplainedNumber CalculateDailyPowerChangeForHero(Hero hero, bool includeDescriptions = false);` | 方法 |
| `GetPowerRankName` | `public abstract TextObject GetPowerRankName(Hero hero);` | 方法 |
| `GetInfluenceBonusToClan` | `public abstract float GetInfluenceBonusToClan(Hero hero);` | 方法 |
| `GetInitialPower` | `public abstract int GetInitialPower(Hero hero);` | 方法 |
| `GetInitialNotableSupporterCost` | `public abstract int GetInitialNotableSupporterCost(Hero hero);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
