---
title: "ArmyManagementCalculationModel"
description: "Auto-generated class reference for ArmyManagementCalculationModel."
---
# ArmyManagementCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ArmyManagementCalculationModel : MBGameModel<ArmyManagementCalculationModel> `
**Base:** MBGameModel<ArmyManagementCalculationModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/ArmyManagementCalculationModel.cs

## Overview

Auto-generated stub for `ArmyManagementCalculationModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CanPlayerCreateArmy
`public abstract bool CanPlayerCreateArmy(out TextObject disabledReason)`

### CalculatePartyInfluenceCost
`public abstract int CalculatePartyInfluenceCost(MobileParty armyLeaderParty,MobileParty party)`

### DailyBeingAtArmyInfluenceAward
`public abstract float DailyBeingAtArmyInfluenceAward(MobileParty armyMemberParty)`

### CanLordCreateArmy
`public abstract bool CanLordCreateArmy(MobileParty leaderParty,out MBList<MobileParty> possibleArmyMembers)`

### CalculateTotalInfluenceCost
`public abstract int CalculateTotalInfluenceCost(Army army,float percentage)`

### GetPartySizeScore
`public abstract float GetPartySizeScore(MobileParty party)`

### CheckPartyEligibility
`public abstract bool CheckPartyEligibility(MobileParty party,out TextObject explanation)`

### GetPartyRelation
`public abstract int GetPartyRelation(Hero hero)`

### CalculateDailyCohesionChange
`public abstract ExplainedNumber CalculateDailyCohesionChange(Army army,bool includeDescriptions = false)`

### CalculateNewCohesion
`public abstract int CalculateNewCohesion(Army army,PartyBase newParty,int calculatedCohesion,int sign)`

### GetCohesionBoostInfluenceCost
`public abstract int GetCohesionBoostInfluenceCost(Army army,int percentageToBoost = 100)`

## See Also

- [Section index](../)
