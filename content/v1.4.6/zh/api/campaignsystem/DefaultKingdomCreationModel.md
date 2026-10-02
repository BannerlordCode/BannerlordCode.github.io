---
title: "DefaultKingdomCreationModel"
description: "DefaultKingdomCreationModel：TaleWorlds.CampaignSystem 的 public 类，继承 KingdomCreationModel；公开成员 7 个（方法 3、属性 4、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomCreationModel.cs。"
---
# DefaultKingdomCreationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultKingdomCreationModel : KingdomCreationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomCreationModel.cs`

## 概述

DefaultKingdomCreationModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomCreationModel.cs。它是一个 public 类，实现/继承 KingdomCreationModel，继承链为 DefaultKingdomCreationModel → KingdomCreationModel → MBGameModel。public/protected 成员共 7 个：3 方法、4 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultKingdomCreationModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultKingdomCreationModel → KingdomCreationModel → MBGameModel。成员构成以属性为主（属性 4/7，方法 3/7），对外主要以状态读取接口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomCreationModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MinimumClanTierToCreateKingdom` | `public override int MinimumClanTierToCreateKingdom` | 属性 |
| `MinimumNumberOfSettlementsOwnedToCreateKingdom` | `public override int MinimumNumberOfSettlementsOwnedToCreateKingdom` | 属性 |
| `MinimumTroopCountToCreateKingdom` | `public override int MinimumTroopCountToCreateKingdom` | 属性 |
| `MaximumNumberOfInitialPolicies` | `public override int MaximumNumberOfInitialPolicies` | 属性 |
| `IsPlayerKingdomCreationPossible` | `public override bool IsPlayerKingdomCreationPossible(out List<TextObject>explanations)` | 方法 |
| `IsPlayerKingdomAbdicationPossible` | `public override bool IsPlayerKingdomAbdicationPossible(out List<TextObject>explanations)` | 方法 |
| `IEnumerable` | `public override IEnumerable<CultureObject>GetAvailablePlayerKingdomCultures()` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 KingdomCreationModel](../KingdomCreationModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
