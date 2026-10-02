---
title: "DefaultPrisonerDonationModel"
description: "DefaultPrisonerDonationModel：TaleWorlds.CampaignSystem 的 public 类，继承 PrisonerDonationModel；公开成员 3 个（方法 3、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonerDonationModel.cs。"
---
# DefaultPrisonerDonationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPrisonerDonationModel : PrisonerDonationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonerDonationModel.cs`

## 概述

DefaultPrisonerDonationModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonerDonationModel.cs。它是一个 public 类，实现/继承 PrisonerDonationModel，继承链为 DefaultPrisonerDonationModel → PrisonerDonationModel → MBGameModel。public/protected 成员共 3 个：3 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultPrisonerDonationModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultPrisonerDonationModel → PrisonerDonationModel → MBGameModel。成员构成以方法为主（方法 3/3，属性 0/3），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonerDonationModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateRelationGainAfterHeroPrisonerDonate` | `public override float CalculateRelationGainAfterHeroPrisonerDonate(PartyBase donatingParty, Hero donatedHero, Settlement donatedSettlement)` | 方法 |
| `CalculateInfluenceGainAfterPrisonerDonation` | `public override float CalculateInfluenceGainAfterPrisonerDonation(PartyBase donatingParty, CharacterObject donatedPrisoner, Settlement donatedSettlement)` | 方法 |
| `CalculateInfluenceGainAfterTroopDonation` | `public override float CalculateInfluenceGainAfterTroopDonation(PartyBase donatingParty, CharacterObject donatedCharacter, Settlement donatedSettlement)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 PrisonerDonationModel](../PrisonerDonationModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
