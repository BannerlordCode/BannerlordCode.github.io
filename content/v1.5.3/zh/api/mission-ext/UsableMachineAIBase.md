---
title: "UsableMachineAIBase"
description: "UsableMachineAIBase 的自动生成类参考。"
---
# UsableMachineAIBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UsableMachineAIBase `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/UsableMachineAIBase.cs

## 概述

`UsableMachineAIBase` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/UsableMachineAIBase.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetScriptedFrameFlags
`protected internal virtual Agent.AIScriptedFrameFlags GetScriptedFrameFlags(Agent agent) `

### Tick
`public void Tick(Agent agentToCompareTo,Formation formationToCompareTo,Team potentialUsersTeam,float dt) `

### OnTick
`protected virtual void OnTick(Agent agentToCompareTo,Formation formationToCompareTo,Team potentialUsersTeam,float dt) `

### GetSuitableAgentForStandingPoint
`public static Agent GetSuitableAgentForStandingPoint(UsableMachine usableMachine,StandingPoint standingPoint,IEnumerable<Agent> agents,List<Agent> usedAgents) `
`public static Agent GetSuitableAgentForStandingPoint(UsableMachine usableMachine,StandingPoint standingPoint,List<ValueTuple<Agent,float>> agents,List<Agent> usedAgents,float weight) `

### TeleportUserAgentsToMachine
`public virtual void TeleportUserAgentsToMachine(List<Agent> agentList) `

### StopUsingStandingPoint
`public void StopUsingStandingPoint(StandingPoint standingPoint) `

### GetStopUsingStandingPointFlags
`protected Agent.StopUsingGameObjectFlags GetStopUsingStandingPointFlags(Agent agent,StandingPoint standingPoint) `

### HandleAgentStopUsingStandingPoint
`protected virtual void HandleAgentStopUsingStandingPoint(Agent agent,StandingPoint standingPoint) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
