---
title: "ScriptBehavior"
description: "ScriptBehavior 的自动生成类参考。"
---
# ScriptBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox
**Type:** `public class ScriptBehavior : AgentBehavior `
**Base:** AgentBehavior
**Source:** SandBox/Missions/AgentBehaviors/ScriptBehavior.cs

## 概述

`ScriptBehavior` 的自动生成类参考页面。声明来自 `SandBox/Missions/AgentBehaviors/ScriptBehavior.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### AddUsableMachineTarget
`public static void AddUsableMachineTarget(Agent ownerAgent,UsableMachine targetUsableMachine) `

### AddAgentTarget
`public static void AddAgentTarget(Agent ownerAgent,Agent targetAgent) `

### AddWorldFrameTarget
`public static void AddWorldFrameTarget(Agent ownerAgent,WorldFrame targetWorldFrame) `

### AddTargetWithDelegate
`public static void AddTargetWithDelegate(Agent ownerAgent,ScriptBehavior.SelectTargetDelegate selectTargetDelegate,ScriptBehavior.OnTargetReachedWaitDelegate onTargetReachWaitDelegate,ScriptBehavior.OnTargetReachedDelegate onTargetReachedDelegate,float initialWaitInSeconds = 0f) `

### IsNearTarget
`public bool IsNearTarget(Agent targetAgent) `

### Tick
`public override void Tick(float dt,bool isSimulation) `

### GetAvailability
`public override float GetAvailability(bool isSimulation) `

### OnDeactivate
`protected override void OnDeactivate() `

### GetDebugInfo
`public override string GetDebugInfo() `

### SelectTargetDelegate
`public delegate bool SelectTargetDelegate(Agent agent,ref Agent targetAgent,ref UsableMachine targetUsableMachine,ref WorldFrame targetFrame,ref float customTargetReachedRangeThreshold,ref float customTargetReachedRotationThreshold)`

### OnTargetReachedDelegate
`public delegate bool OnTargetReachedDelegate(Agent agent,ref Agent targetAgent,ref UsableMachine targetUsableMachine,ref WorldFrame targetFrame)`

### OnTargetReachedWaitDelegate
`public delegate void OnTargetReachedWaitDelegate(Agent agent,ref float waitTimeInSeconds)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
