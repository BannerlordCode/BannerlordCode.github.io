---
title: "AllianceModel"
description: "AllianceModel 的自动生成类参考。"
---
# AllianceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class AllianceModel : MBGameModel<AllianceModel> `
**Base:** MBGameModel<AllianceModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/AllianceModel.cs

## 概述

`AllianceModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/AllianceModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetCallToWarCost
`public abstract int GetCallToWarCost(Kingdom callingKingdom,Kingdom calledKingdom,Kingdom kingdomToCallToWarAgainst)`

### GetScoreOfStartingAlliance
`public abstract ExplainedNumber GetScoreOfStartingAlliance(Kingdom kingdomDeclaresAlliance,Kingdom kingdomDeclaredAlliance,out TextObject explanation,bool includeDescription = false)`

### GetSupportScoreOfStartingAllianceForClan
`public abstract float GetSupportScoreOfStartingAllianceForClan(Kingdom kingdomDeclaresAlliance,Kingdom kingdomDeclaredAlliance,Clan evaluatingClan,out TextObject explanation,bool includeDescription = false)`

### GetScoreOfCallingToWar
`public abstract float GetScoreOfCallingToWar(Kingdom callingKingdom,Kingdom calledKingdom,Kingdom kingdomToCallToWarAgainst,IFaction evaluatingFaction,out TextObject reason)`

### GetScoreOfJoiningWar
`public abstract float GetScoreOfJoiningWar(Kingdom offeringKingdom,Kingdom kingdomToOfferToJoinWarWith,Kingdom kingdomToOfferToJoinWarAgainst,IFaction evaluatingFaction,out TextObject reason)`

### GetInfluenceCostOfProposingStartingAlliance
`public abstract int GetInfluenceCostOfProposingStartingAlliance(Clan proposingClan)`

### GetInfluenceCostOfCallingToWar
`public abstract int GetInfluenceCostOfCallingToWar(Clan proposingClan)`

### CanMakeAlliance
`public abstract bool CanMakeAlliance(Kingdom kingdom,Kingdom targetKingdom,IFaction evaluatingFaction,out TextObject reason,bool includeReason = false)`

### GetAllianceFactorForDeclaringWar
`public abstract float GetAllianceFactorForDeclaringWar(IFaction factionDeclaresWar,IFaction factionDeclaredWar)`

### GetAllianceFactorForDeclaringPeace
`public abstract float GetAllianceFactorForDeclaringPeace(IFaction factionDeclaresPeace,IFaction factionDeclaredPeace)`

### GetProposerClanForAllianceDecision
`public abstract Clan GetProposerClanForAllianceDecision(Kingdom proposerKingdom,Kingdom proposedKingdom)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
