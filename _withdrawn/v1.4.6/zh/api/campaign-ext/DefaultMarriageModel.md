---
title: "DefaultMarriageModel"
description: "DefaultMarriageModel：TaleWorlds.CampaignSystem.GameComponents 的 public 类，继承 MarriageModel；公开成员 10 个（方法 8、属性 2、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultMarriageModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultMarriageModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultMarriageModel : MarriageModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMarriageModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## 概述

DefaultMarriageModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultMarriageModel.cs。它是一个 public 类，实现/继承 MarriageModel，继承链为 DefaultMarriageModel → MarriageModel → MBGameModel → GameModel。public/protected 成员共 10 个：8 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultMarriageModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.GameComponents`），命名空间 `TaleWorlds.CampaignSystem.GameComponents`，继承链 DefaultMarriageModel → MarriageModel → MBGameModel → GameModel。成员构成以方法为主（方法 8/10，属性 2/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultMarriageModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MinimumMarriageAgeMale` | `public override int MinimumMarriageAgeMale` | 属性 |
| `MinimumMarriageAgeFemale` | `public override int MinimumMarriageAgeFemale` | 属性 |
| `IsCoupleSuitableForMarriage` | `public override bool IsCoupleSuitableForMarriage(Hero firstHero, Hero secondHero)` | 方法 |
| `IsClanSuitableForMarriage` | `public override bool IsClanSuitableForMarriage(Clan clan)` | 方法 |
| `NpcCoupleMarriageChance` | `public override float NpcCoupleMarriageChance(Hero firstHero, Hero secondHero)` | 方法 |
| `ShouldNpcMarriageBetweenClansBeAllowed` | `public override bool ShouldNpcMarriageBetweenClansBeAllowed(Clan consideringClan, Clan targetClan)` | 方法 |
| `List` | `public override List<Hero>GetAdultChildrenSuitableForMarriage(Hero hero)` | 方法 |
| `GetEffectiveRelationIncrease` | `public override int GetEffectiveRelationIncrease(Hero firstHero, Hero secondHero)` | 方法 |
| `IsSuitableForMarriage` | `public override bool IsSuitableForMarriage(Hero maidenOrSuitor)` | 方法 |
| `GetClanAfterMarriage` | `public override Clan GetClanAfterMarriage(Hero firstHero, Hero secondHero)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MarriageModel](../MarriageModel/)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel/)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel/)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel/)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
