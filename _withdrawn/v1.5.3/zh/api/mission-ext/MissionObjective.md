---
title: "MissionObjective"
description: "MissionObjective 的自动生成类参考。"
---
# MissionObjective

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionObjective `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjective.cs

## 概述

`MissionObjective` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjective.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetCurrentProgress
`public virtual MissionObjectiveProgressInfo GetCurrentProgress() `

### SetObjectiveGiver
`public void SetObjectiveGiver(BasicCharacterObject objectiveGiver) `

### AddTarget
`public void AddTarget(MissionObjectiveTarget target) `

### RemoveTarget
`public void RemoveTarget(MissionObjectiveTarget target) `

### ClearTargets
`public void ClearTargets() `

### GetTargetsCopy
`public MBReadOnlyList<MissionObjectiveTarget> GetTargetsCopy() `

### IsActivationRequirementsMet
`protected virtual bool IsActivationRequirementsMet() `

### IsCompletionRequirementsMet
`protected virtual bool IsCompletionRequirementsMet() `

### OnStart
`protected virtual void OnStart() `

### OnComplete
`protected virtual void OnComplete() `

### OnTick
`protected virtual void OnTick(float dt) `

### OnTargetAdded
`protected virtual void OnTargetAdded(MissionObjectiveTarget target) `

### OnTargetRemoved
`protected virtual void OnTargetRemoved(MissionObjectiveTarget target) `

### OnTargetsCleared
`protected virtual void OnTargetsCleared() `

### CreateGenericObjectiveBuilder
`public static MissionObjective.GenericMissionObjectiveBuilder CreateGenericObjectiveBuilder(Mission mission,string id,TextObject name = null,TextObject description = null) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
