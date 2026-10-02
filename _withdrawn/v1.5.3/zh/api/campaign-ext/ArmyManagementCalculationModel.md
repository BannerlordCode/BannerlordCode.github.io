---
title: "ArmyManagementCalculationModel"
description: "ArmyManagementCalculationModel 的自动生成类参考。"
---
# ArmyManagementCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ArmyManagementCalculationModel : MBGameModel<ArmyManagementCalculationModel> `
**Base:** MBGameModel<ArmyManagementCalculationModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/ArmyManagementCalculationModel.cs

## 概述

`ArmyManagementCalculationModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/ArmyManagementCalculationModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

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

## 参见

- [本区域目录](../)
- [API 参考](../../)
