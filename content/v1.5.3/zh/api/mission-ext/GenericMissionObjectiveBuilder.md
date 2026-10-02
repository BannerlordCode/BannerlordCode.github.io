---
title: "GenericMissionObjectiveBuilder"
description: "GenericMissionObjectiveBuilder 的自动生成类参考。"
---
# GenericMissionObjectiveBuilder

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct GenericMissionObjectiveBuilder `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjective.cs

## 概述

`GenericMissionObjectiveBuilder` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjective.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### SetName
`public MissionObjective.GenericMissionObjectiveBuilder SetName(TextObject name) `

### SetDescription
`public MissionObjective.GenericMissionObjectiveBuilder SetDescription(TextObject description) `

### SetObjectiveGiver
`public MissionObjective.GenericMissionObjectiveBuilder SetObjectiveGiver(BasicCharacterObject objectiveGiver) `

### SetInitialTargets
`public MissionObjective.GenericMissionObjectiveBuilder SetInitialTargets(params MissionObjectiveTarget[] targets) `

### SetIsActivationRequirementsMetCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetIsActivationRequirementsMetCallback(Func<MissionObjective,bool> callback) `

### SetIsCompletionRequirementsMetCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetIsCompletionRequirementsMetCallback(Func<MissionObjective,bool> callback) `

### SetOnStartCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetOnStartCallback(Action<MissionObjective> callback) `

### SetOnCompleteCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetOnCompleteCallback(Action<MissionObjective> callback) `

### SetOnTickCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetOnTickCallback(Action<MissionObjective,float> callback) `

### SetProgressCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetProgressCallback(Func<MissionObjective,MissionObjectiveProgressInfo> callback) `

### Build
`public MissionObjective Build() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
