---
title: "DefaultAllianceModel"
description: "Auto-generated class reference for DefaultAllianceModel."
---
# DefaultAllianceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultAllianceModel : AllianceModel `
**Base:** AllianceModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultAllianceModel.cs

## Overview

Auto-generated stub for `DefaultAllianceModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetCallToWarCost
`public override int GetCallToWarCost(Kingdom callingKingdom,Kingdom calledKingdom,Kingdom kingdomToCallToWarAgainst)`

### GetScoreOfStartingAlliance
`public override ExplainedNumber GetScoreOfStartingAlliance(Kingdom querierKingdom,Kingdom queriedKingdom,out TextObject explanationText,bool includeDescription = false)`

### GetSupportScoreOfStartingAllianceForClan
`public override float GetSupportScoreOfStartingAllianceForClan(Kingdom querierKingdom,Kingdom queriedKingdom,Clan evaluatingClan,out TextObject explanationText,bool includeDescriptions = false)`

### CanMakeAlliance
`public override bool CanMakeAlliance(Kingdom kingdom,Kingdom targetKingdom,IFaction evaluatingFaction,out TextObject reason,bool includeReason = false)`

### GetInfluenceCostOfProposingStartingAlliance
`public override int GetInfluenceCostOfProposingStartingAlliance(Clan proposingClan)`

### GetScoreOfCallingToWar
`public override float GetScoreOfCallingToWar(Kingdom callingKingdom,Kingdom calledKingdom,Kingdom kingdomToCallToWarAgainst,IFaction evaluatingFaction,out TextObject reason)`

### GetScoreOfJoiningWar
`public override float GetScoreOfJoiningWar(Kingdom callingKingdom,Kingdom calledKingdom,Kingdom kingdomToCallToWarAgainst,IFaction evaluatingFaction,out TextObject reason)`

### GetInfluenceCostOfCallingToWar
`public override int GetInfluenceCostOfCallingToWar(Clan proposingClan)`

### GetAllianceFactorForDeclaringWar
`public override float GetAllianceFactorForDeclaringWar(IFaction factionDeclaresWar,IFaction factionDeclaredWar)`

### GetAllianceFactorForDeclaringPeace
`public override float GetAllianceFactorForDeclaringPeace(IFaction factionDeclaresPeace,IFaction factionDeclaredPeace)`

### GetProposerClanForAllianceDecision
`public override Clan GetProposerClanForAllianceDecision(Kingdom proposerKingdom,Kingdom proposedKingdom)`

## See Also

- [Section index](../)
