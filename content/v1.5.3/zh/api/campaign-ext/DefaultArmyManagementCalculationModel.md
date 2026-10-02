---
title: "DefaultArmyManagementCalculationModel"
description: "DefaultArmyManagementCalculationModel 的自动生成类参考。"
---
# DefaultArmyManagementCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultArmyManagementCalculationModel : ArmyManagementCalculationModel `
**Base:** ArmyManagementCalculationModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultArmyManagementCalculationModel.cs

## 概述

`DefaultArmyManagementCalculationModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/GameComponents/DefaultArmyManagementCalculationModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### DailyBeingAtArmyInfluenceAward
`public override float DailyBeingAtArmyInfluenceAward(MobileParty armyMemberParty) `

### CalculatePartyInfluenceCost
`public override int CalculatePartyInfluenceCost(MobileParty armyLeaderParty,MobileParty party) `

### CanLordCreateArmy
`public override bool CanLordCreateArmy(MobileParty mobileParty,out MBList<MobileParty> possibleArmyMembers) `

### CalculateTotalInfluenceCost
`public override int CalculateTotalInfluenceCost(Army army,float percentage) `

### GetPartySizeScore
`public override float GetPartySizeScore(MobileParty party) `

### CalculateDailyCohesionChange
`public override ExplainedNumber CalculateDailyCohesionChange(Army army,bool includeDescriptions = false) `

### CalculateNewCohesion
`public override int CalculateNewCohesion(Army army,PartyBase newParty,int calculatedCohesion,int sign) `

### GetCohesionBoostInfluenceCost
`public override int GetCohesionBoostInfluenceCost(Army army,int percentageToBoost = 100) `

### GetPartyRelation
`public override int GetPartyRelation(Hero hero) `

### CanPlayerCreateArmy
`public override bool CanPlayerCreateArmy(out TextObject disabledReason) `

### CheckPartyEligibility
`public override bool CheckPartyEligibility(MobileParty party,out TextObject explanation) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
