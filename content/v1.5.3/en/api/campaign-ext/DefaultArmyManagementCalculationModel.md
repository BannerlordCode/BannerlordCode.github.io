---
title: "DefaultArmyManagementCalculationModel"
description: "Auto-generated class reference for DefaultArmyManagementCalculationModel."
---
# DefaultArmyManagementCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultArmyManagementCalculationModel : ArmyManagementCalculationModel `
**Base:** ArmyManagementCalculationModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultArmyManagementCalculationModel.cs

## Overview

Auto-generated stub for `DefaultArmyManagementCalculationModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### DailyBeingAtArmyInfluenceAward
`public override float DailyBeingAtArmyInfluenceAward(MobileParty armyMemberParty)`

### CalculatePartyInfluenceCost
`public override int CalculatePartyInfluenceCost(MobileParty armyLeaderParty,MobileParty party)`

### CanLordCreateArmy
`public override bool CanLordCreateArmy(MobileParty mobileParty,out MBList<MobileParty> possibleArmyMembers)`

### CalculateTotalInfluenceCost
`public override int CalculateTotalInfluenceCost(Army army,float percentage)`

### GetPartySizeScore
`public override float GetPartySizeScore(MobileParty party)`

### CalculateDailyCohesionChange
`public override ExplainedNumber CalculateDailyCohesionChange(Army army,bool includeDescriptions = false)`

### CalculateNewCohesion
`public override int CalculateNewCohesion(Army army,PartyBase newParty,int calculatedCohesion,int sign)`

### GetCohesionBoostInfluenceCost
`public override int GetCohesionBoostInfluenceCost(Army army,int percentageToBoost = 100)`

### GetPartyRelation
`public override int GetPartyRelation(Hero hero)`

### CanPlayerCreateArmy
`public override bool CanPlayerCreateArmy(out TextObject disabledReason)`

### CheckPartyEligibility
`public override bool CheckPartyEligibility(MobileParty party,out TextObject explanation)`

## See Also

- [Section index](../)
