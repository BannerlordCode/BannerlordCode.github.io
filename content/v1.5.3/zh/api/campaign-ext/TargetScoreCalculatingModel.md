---
title: "TargetScoreCalculatingModel"
description: "TargetScoreCalculatingModel 的自动生成类参考。"
---
# TargetScoreCalculatingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TargetScoreCalculatingModel : MBGameModel<TargetScoreCalculatingModel> `
**Base:** MBGameModel<TargetScoreCalculatingModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/TargetScoreCalculatingModel.cs

## 概述

`TargetScoreCalculatingModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/TargetScoreCalculatingModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

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

## 参见

- [本区域目录](../)
- [API 参考](../../)
