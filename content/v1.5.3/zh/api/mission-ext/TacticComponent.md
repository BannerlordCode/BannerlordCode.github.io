---
title: "TacticComponent"
description: "TacticComponent 的自动生成类参考。"
---
# TacticComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class TacticComponent `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/TacticComponent.cs

## 概述

`TacticComponent` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/TacticComponent.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnCancel
`protected internal virtual void OnCancel() `

### OnApply
`protected internal virtual void OnApply() `

### TickOccasionally
`public virtual void TickOccasionally() `

### GetFormationGroupEffectivenessOverOrder
`protected static float GetFormationGroupEffectivenessOverOrder(IEnumerable<Formation> formationGroup,OrderType orderType,IOrderable targetObject = null) `

### GetFormationEffectivenessOverOrder
`protected static float GetFormationEffectivenessOverOrder(Formation formation,OrderType orderType,IOrderable targetObject = null) `

### DebugTick
`protected internal virtual void DebugTick(float dt) `

### ConsolidateFormations
`protected List<Formation> ConsolidateFormations(List<Formation> formationsToBeConsolidated,int neededCount) `

### CalculateNotEngagingTacticalAdvantage
`protected static float CalculateNotEngagingTacticalAdvantage(TeamQuerySystem team) `

### SplitFormationClassIntoGivenNumber
`protected void SplitFormationClassIntoGivenNumber(Func<Formation,bool> formationClass,int count) `

### CheckAndSetAvailableFormationsChanged
`protected virtual bool CheckAndSetAvailableFormationsChanged() `

### ResetTactic
`public void ResetTactic() `

### AssignTacticFormations1121
`protected void AssignTacticFormations1121() `

### ChooseAndSortByPriority
`protected static List<Formation> ChooseAndSortByPriority(IEnumerable<Formation> formations,Func<Formation,bool> isEligible,Func<Formation,bool> isPrioritized,Func<Formation,float> score) `

### ManageFormationCounts
`protected virtual void ManageFormationCounts() `
`protected void ManageFormationCounts(int infantryCount,int rangedCount,int cavalryCount,int rangedCavalryCount) `

### StopUsingAllMachines
`protected virtual void StopUsingAllMachines() `

### StopUsingAllRangedSiegeWeapons
`protected void StopUsingAllRangedSiegeWeapons() `

### SoundTacticalHorn
`protected void SoundTacticalHorn(int soundCode) `

### SetDefaultBehaviorWeights
`public static void SetDefaultBehaviorWeights(Formation f) `

### GetTacticWeight
`protected internal virtual float GetTacticWeight() `

### CheckAndDetermineFormation
`protected bool CheckAndDetermineFormation(ref Formation formation,Func<Formation,bool> isEligible) `

### ResetTacticalPositions
`protected internal virtual bool ResetTacticalPositions() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
