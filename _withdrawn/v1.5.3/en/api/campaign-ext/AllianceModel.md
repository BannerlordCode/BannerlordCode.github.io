---
title: "AllianceModel"
description: "Auto-generated class reference for AllianceModel."
---
# AllianceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class AllianceModel : MBGameModel<AllianceModel> `
**Base:** MBGameModel<AllianceModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/AllianceModel.cs

## Overview

Auto-generated stub for `AllianceModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

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

## See Also

- [Section index](../)
