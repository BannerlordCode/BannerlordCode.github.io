---
title: "MinorFactionsModel"
description: "MinorFactionsModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<MinorFactionsModel>；公开成员 3 个（方法 1、属性 2、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/MinorFactionsModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MinorFactionsModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class MinorFactionsModel : MBGameModel<MinorFactionsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MinorFactionsModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

MinorFactionsModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/MinorFactionsModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<MinorFactionsModel>，继承链为 MinorFactionsModel → MBGameModel → GameModel。public/protected 成员共 3 个：1 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MinorFactionsModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 MinorFactionsModel → MBGameModel → GameModel。成员构成以属性为主（属性 2/3，方法 1/3），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/MinorFactionsModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DailyMinorFactionHeroSpawnChance` | `public abstract float DailyMinorFactionHeroSpawnChance` | 属性 |
| `MinorFactionHeroLimit` | `public abstract int MinorFactionHeroLimit` | 属性 |
| `GetMercenaryAwardFactorToJoinKingdom` | `public abstract int GetMercenaryAwardFactorToJoinKingdom(Clan mercenaryClan, Kingdom kingdom, bool neededAmountForClanToJoinCalculation = false);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
