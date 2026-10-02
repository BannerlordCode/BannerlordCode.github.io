---
title: "TeamAIComponent"
description: "TeamAIComponent 的自动生成类参考。"
---
# TeamAIComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class TeamAIComponent `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/TeamAIComponent.cs

## 概述

`TeamAIComponent` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/TeamAIComponent.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### AddStrategicArea
`public void AddStrategicArea(StrategicArea strategicArea) `

### RemoveStrategicArea
`public void RemoveStrategicArea(StrategicArea strategicArea) `

### RemoveAllStrategicAreas
`public void RemoveAllStrategicAreas() `

### AddTacticOption
`public void AddTacticOption(TacticComponent tacticOption) `

### RemoveTacticOption
`public void RemoveTacticOption(Type tacticType) `

### ClearTacticOptions
`public void ClearTacticOptions() `

### AssertTeam
`public void AssertTeam(Team team) `

### NotifyTacticalDecision
`public void NotifyTacticalDecision(in TacticalDecision decision) `

### OnDeploymentFinished
`public virtual void OnDeploymentFinished() `

### OnFormationFrameChanged
`public virtual void OnFormationFrameChanged(Agent agent,bool isFrameEnabled,WorldPosition frame) `

### OnMissionEnded
`public virtual void OnMissionEnded() `

### ResetTacticalPositions
`public void ResetTacticalPositions() `

### ResetTactic
`public void ResetTactic(bool keepCurrentTactic = true) `

### Tick
`protected internal virtual void Tick(float dt) `

### CheckIsDefenseApplicable
`public void CheckIsDefenseApplicable() `

### OnTacticAppliedForFirstTime
`public void OnTacticAppliedForFirstTime() `

### TickOccasionally
`public virtual void TickOccasionally() `

### IsCurrentTactic
`public bool IsCurrentTactic(TacticComponent tactic) `

### DebugTick
`protected virtual void DebugTick(float dt) `

### OnUnitAddedToFormationForTheFirstTime
`public abstract void OnUnitAddedToFormationForTheFirstTime(Formation formation)`

### CreateMissionSpecificBehaviors
`protected internal virtual void CreateMissionSpecificBehaviors() `

### InitializeDetachments
`protected internal virtual void InitializeDetachments(Mission mission) `

### TacticalDecisionDelegate
`public delegate void TacticalDecisionDelegate(in TacticalDecision decision)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
