---
title: "DefaultAllianceModel"
description: "DefaultAllianceModel：TaleWorlds.CampaignSystem 的 public 类，继承 AllianceModel；公开成员 15 个（方法 11、属性 4、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultAllianceModel.cs。"
---
# DefaultAllianceModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultAllianceModel : AllianceModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAllianceModel.cs`

## 概述

DefaultAllianceModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultAllianceModel.cs。它是一个 public 类，实现/继承 AllianceModel，继承链为 DefaultAllianceModel → AllianceModel → MBGameModel。public/protected 成员共 15 个：11 方法、4 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultAllianceModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultAllianceModel → AllianceModel → MBGameModel。成员构成以方法为主（方法 11/15，属性 4/15），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultAllianceModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaxDurationOfAlliance` | `public override CampaignTime MaxDurationOfAlliance` | 属性 |
| `MaxDurationOfWarParticipation` | `public override CampaignTime MaxDurationOfWarParticipation` | 属性 |
| `MaxNumberOfAlliances` | `public override int MaxNumberOfAlliances` | 属性 |
| `DurationForOffers` | `public override CampaignTime DurationForOffers` | 属性 |
| `GetCallToWarCost` | `public override int GetCallToWarCost(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)` | 方法 |
| `GetScoreOfStartingAlliance` | `public override ExplainedNumber GetScoreOfStartingAlliance(Kingdom querierKingdom, Kingdom queriedKingdom, out TextObject explanationText, bool includeDescription = false)` | 方法 |
| `GetSupportScoreOfStartingAllianceForClan` | `public override float GetSupportScoreOfStartingAllianceForClan(Kingdom querierKingdom, Kingdom queriedKingdom, Clan evaluatingClan, out TextObject explanationText, bool includeDescriptions = false)` | 方法 |
| `CanMakeAlliance` | `public override bool CanMakeAlliance(Kingdom kingdom, Kingdom targetKingdom, IFaction evaluatingFaction, out TextObject reason, bool includeReason = false)` | 方法 |
| `GetInfluenceCostOfProposingStartingAlliance` | `public override int GetInfluenceCostOfProposingStartingAlliance(Clan proposingClan)` | 方法 |
| `GetScoreOfCallingToWar` | `public override float GetScoreOfCallingToWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)` | 方法 |
| `GetScoreOfJoiningWar` | `public override float GetScoreOfJoiningWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)` | 方法 |
| `GetInfluenceCostOfCallingToWar` | `public override int GetInfluenceCostOfCallingToWar(Clan proposingClan)` | 方法 |
| `GetAllianceFactorForDeclaringWar` | `public override float GetAllianceFactorForDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar)` | 方法 |
| `GetAllianceFactorForDeclaringPeace` | `public override float GetAllianceFactorForDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)` | 方法 |
| `GetProposerClanForAllianceDecision` | `public override Clan GetProposerClanForAllianceDecision(Kingdom proposerKingdom, Kingdom proposedKingdom)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 AllianceModel](../AllianceModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
- [同命名空间 DefaultBanditDensityModel](../DefaultBanditDensityModel)
