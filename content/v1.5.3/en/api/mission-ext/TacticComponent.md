---
title: "TacticComponent"
description: "Auto-generated class reference for TacticComponent."
---
# TacticComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class TacticComponent `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/TacticComponent.cs

## Overview

Auto-generated stub for `TacticComponent`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnCancel
`protected internal virtual void OnCancel()`

### OnApply
`protected internal virtual void OnApply()`

### TickOccasionally
`public virtual void TickOccasionally()`

### GetFormationGroupEffectivenessOverOrder
`protected static float GetFormationGroupEffectivenessOverOrder(IEnumerable<Formation> formationGroup,OrderType orderType,IOrderable targetObject = null)`

### GetFormationEffectivenessOverOrder
`protected static float GetFormationEffectivenessOverOrder(Formation formation,OrderType orderType,IOrderable targetObject = null)`

### DebugTick
`protected internal virtual void DebugTick(float dt)`

### ConsolidateFormations
`protected List<Formation> ConsolidateFormations(List<Formation> formationsToBeConsolidated,int neededCount)`

### CalculateNotEngagingTacticalAdvantage
`protected static float CalculateNotEngagingTacticalAdvantage(TeamQuerySystem team)`

### SplitFormationClassIntoGivenNumber
`protected void SplitFormationClassIntoGivenNumber(Func<Formation,bool> formationClass,int count)`

### CheckAndSetAvailableFormationsChanged
`protected virtual bool CheckAndSetAvailableFormationsChanged()`

### ResetTactic
`public void ResetTactic()`

### AssignTacticFormations1121
`protected void AssignTacticFormations1121()`

### ChooseAndSortByPriority
`protected static List<Formation> ChooseAndSortByPriority(IEnumerable<Formation> formations,Func<Formation,bool> isEligible,Func<Formation,bool> isPrioritized,Func<Formation,float> score)`

### ManageFormationCounts
`protected virtual void ManageFormationCounts()`

### StopUsingAllMachines
`protected virtual void StopUsingAllMachines()`

### StopUsingAllRangedSiegeWeapons
`protected void StopUsingAllRangedSiegeWeapons()`

### SoundTacticalHorn
`protected void SoundTacticalHorn(int soundCode)`

### SetDefaultBehaviorWeights
`public static void SetDefaultBehaviorWeights(Formation f)`

### GetTacticWeight
`protected internal virtual float GetTacticWeight()`

### CheckAndDetermineFormation
`protected bool CheckAndDetermineFormation(ref Formation formation,Func<Formation,bool> isEligible)`

### ResetTacticalPositions
`protected internal virtual bool ResetTacticalPositions()`

## See Also

- [Section index](../)
