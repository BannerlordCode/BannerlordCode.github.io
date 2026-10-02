---
title: "TeamAIComponent"
description: "Auto-generated class reference for TeamAIComponent."
---
# TeamAIComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class TeamAIComponent `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/TeamAIComponent.cs

## Overview

Auto-generated stub for `TeamAIComponent`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### AddStrategicArea
`public void AddStrategicArea(StrategicArea strategicArea)`

### RemoveStrategicArea
`public void RemoveStrategicArea(StrategicArea strategicArea)`

### RemoveAllStrategicAreas
`public void RemoveAllStrategicAreas()`

### AddTacticOption
`public void AddTacticOption(TacticComponent tacticOption)`

### RemoveTacticOption
`public void RemoveTacticOption(Type tacticType)`

### ClearTacticOptions
`public void ClearTacticOptions()`

### AssertTeam
`public void AssertTeam(Team team)`

### NotifyTacticalDecision
`public void NotifyTacticalDecision(in TacticalDecision decision)`

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

### OnFormationFrameChanged
`public virtual void OnFormationFrameChanged(Agent agent,bool isFrameEnabled,WorldPosition frame)`

### OnMissionEnded
`public virtual void OnMissionEnded()`

### ResetTacticalPositions
`public void ResetTacticalPositions()`

### ResetTactic
`public void ResetTactic(bool keepCurrentTactic = true)`

### Tick
`protected internal virtual void Tick(float dt)`

### CheckIsDefenseApplicable
`public void CheckIsDefenseApplicable()`

### OnTacticAppliedForFirstTime
`public void OnTacticAppliedForFirstTime()`

### TickOccasionally
`public virtual void TickOccasionally()`

### IsCurrentTactic
`public bool IsCurrentTactic(TacticComponent tactic)`

### DebugTick
`protected virtual void DebugTick(float dt)`

### OnUnitAddedToFormationForTheFirstTime
`public abstract void OnUnitAddedToFormationForTheFirstTime(Formation formation)`

### CreateMissionSpecificBehaviors
`protected internal virtual void CreateMissionSpecificBehaviors()`

### InitializeDetachments
`protected internal virtual void InitializeDetachments(Mission mission)`

### TacticalDecisionDelegate
`public delegate void TacticalDecisionDelegate(in TacticalDecision decision)`

## See Also

- [Section index](../)
