---
title: "TargetScoreCalculatingModel"
description: "Auto-generated class reference for TargetScoreCalculatingModel."
---
# TargetScoreCalculatingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TargetScoreCalculatingModel : MBGameModel<TargetScoreCalculatingModel> `
**Base:** MBGameModel<TargetScoreCalculatingModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/TargetScoreCalculatingModel.cs

## Overview

Auto-generated stub for `TargetScoreCalculatingModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetDefensivePatrollingFactor
`public abstract float GetDefensivePatrollingFactor(bool isNavalPatrolling)`

### GetOffensivePatrollingFactor
`public abstract float GetOffensivePatrollingFactor(bool isNavalPatrolling)`

### GetTargetScoreForFaction
`public abstract float GetTargetScoreForFaction(Settlement targetSettlement,Army.ArmyTypes missionType,MobileParty mobileParty,float ourStrength)`

### CalculateDefensivePatrollingScoreForSettlement
`public abstract float CalculateDefensivePatrollingScoreForSettlement(Settlement settlement,bool isTargetingPort,MobileParty mobileParty)`

### CalculateOffensivePatrollingScoreForSettlement
`public abstract float CalculateOffensivePatrollingScoreForSettlement(Settlement settlement,bool isTargetingPort,MobileParty mobileParty)`

### CurrentObjectiveValue
`public abstract float CurrentObjectiveValue(MobileParty mobileParty)`

## See Also

- [Section index](../)
