---
title: "MarriageModel"
description: "MarriageModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<MarriageModel>；公开成员 10 个（方法 8、属性 2、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/MarriageModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MarriageModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class MarriageModel : MBGameModel<MarriageModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MarriageModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

MarriageModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/MarriageModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<MarriageModel>，继承链为 MarriageModel → MBGameModel → GameModel。public/protected 成员共 10 个：8 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MarriageModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 MarriageModel → MBGameModel → GameModel。成员构成以方法为主（方法 8/10，属性 2/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/MarriageModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsCoupleSuitableForMarriage` | `public abstract bool IsCoupleSuitableForMarriage(Hero firstHero, Hero secondHero);` | 方法 |
| `GetEffectiveRelationIncrease` | `public abstract int GetEffectiveRelationIncrease(Hero firstHero, Hero secondHero);` | 方法 |
| `GetClanAfterMarriage` | `public abstract Clan GetClanAfterMarriage(Hero firstHero, Hero secondHero);` | 方法 |
| `IsSuitableForMarriage` | `public abstract bool IsSuitableForMarriage(Hero hero);` | 方法 |
| `IsClanSuitableForMarriage` | `public abstract bool IsClanSuitableForMarriage(Clan clan);` | 方法 |
| `NpcCoupleMarriageChance` | `public abstract float NpcCoupleMarriageChance(Hero firstHero, Hero secondHero);` | 方法 |
| `ShouldNpcMarriageBetweenClansBeAllowed` | `public abstract bool ShouldNpcMarriageBetweenClansBeAllowed(Clan consideringClan, Clan targetClan);` | 方法 |
| `List` | `public abstract List<Hero>GetAdultChildrenSuitableForMarriage(Hero hero);` | 方法 |
| `MinimumMarriageAgeMale` | `public abstract int MinimumMarriageAgeMale` | 属性 |
| `MinimumMarriageAgeFemale` | `public abstract int MinimumMarriageAgeFemale` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
