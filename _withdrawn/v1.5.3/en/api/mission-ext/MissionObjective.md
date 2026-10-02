---
title: "MissionObjective"
description: "Auto-generated class reference for MissionObjective."
---
# MissionObjective

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionObjective `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjective.cs

## Overview

Auto-generated stub for `MissionObjective`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetCurrentProgress
`public virtual MissionObjectiveProgressInfo GetCurrentProgress()`

### SetObjectiveGiver
`public void SetObjectiveGiver(BasicCharacterObject objectiveGiver)`

### AddTarget
`public void AddTarget(MissionObjectiveTarget target)`

### RemoveTarget
`public void RemoveTarget(MissionObjectiveTarget target)`

### ClearTargets
`public void ClearTargets()`

### GetTargetsCopy
`public MBReadOnlyList<MissionObjectiveTarget> GetTargetsCopy()`

### IsActivationRequirementsMet
`protected virtual bool IsActivationRequirementsMet()`

### IsCompletionRequirementsMet
`protected virtual bool IsCompletionRequirementsMet()`

### OnStart
`protected virtual void OnStart()`

### OnComplete
`protected virtual void OnComplete()`

### OnTick
`protected virtual void OnTick(float dt)`

### OnTargetAdded
`protected virtual void OnTargetAdded(MissionObjectiveTarget target)`

### OnTargetRemoved
`protected virtual void OnTargetRemoved(MissionObjectiveTarget target)`

### OnTargetsCleared
`protected virtual void OnTargetsCleared()`

### CreateGenericObjectiveBuilder
`public static MissionObjective.GenericMissionObjectiveBuilder CreateGenericObjectiveBuilder(Mission mission,string id,TextObject name = null,TextObject description = null)`

## See Also

- [Section index](../)
