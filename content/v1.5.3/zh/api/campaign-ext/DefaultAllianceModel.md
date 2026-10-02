---
title: "DefaultAllianceModel"
description: "DefaultAllianceModel 的自动生成类参考。"
---
# DefaultAllianceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultAllianceModel : AllianceModel `
**Base:** AllianceModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultAllianceModel.cs

## 概述

`DefaultAllianceModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/GameComponents/DefaultAllianceModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetCallToWarCost
`public override int GetCallToWarCost(Kingdom callingKingdom,Kingdom calledKingdom,Kingdom kingdomToCallToWarAgainst) `

### GetScoreOfStartingAlliance
`public override ExplainedNumber GetScoreOfStartingAlliance(Kingdom querierKingdom,Kingdom queriedKingdom,out TextObject explanationText,bool includeDescription = false) `

### GetSupportScoreOfStartingAllianceForClan
`public override float GetSupportScoreOfStartingAllianceForClan(Kingdom querierKingdom,Kingdom queriedKingdom,Clan evaluatingClan,out TextObject explanationText,bool includeDescriptions = false) `

### CanMakeAlliance
`public override bool CanMakeAlliance(Kingdom kingdom,Kingdom targetKingdom,IFaction evaluatingFaction,out TextObject reason,bool includeReason = false) `

### GetInfluenceCostOfProposingStartingAlliance
`public override int GetInfluenceCostOfProposingStartingAlliance(Clan proposingClan) `

### GetScoreOfCallingToWar
`public override float GetScoreOfCallingToWar(Kingdom callingKingdom,Kingdom calledKingdom,Kingdom kingdomToCallToWarAgainst,IFaction evaluatingFaction,out TextObject reason) `

### GetScoreOfJoiningWar
`public override float GetScoreOfJoiningWar(Kingdom callingKingdom,Kingdom calledKingdom,Kingdom kingdomToCallToWarAgainst,IFaction evaluatingFaction,out TextObject reason) `

### GetInfluenceCostOfCallingToWar
`public override int GetInfluenceCostOfCallingToWar(Clan proposingClan) `

### GetAllianceFactorForDeclaringWar
`public override float GetAllianceFactorForDeclaringWar(IFaction factionDeclaresWar,IFaction factionDeclaredWar) `

### GetAllianceFactorForDeclaringPeace
`public override float GetAllianceFactorForDeclaringPeace(IFaction factionDeclaresPeace,IFaction factionDeclaredPeace) `

### GetProposerClanForAllianceDecision
`public override Clan GetProposerClanForAllianceDecision(Kingdom proposerKingdom,Kingdom proposedKingdom) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
