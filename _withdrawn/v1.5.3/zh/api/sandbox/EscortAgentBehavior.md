---
title: "EscortAgentBehavior"
description: "EscortAgentBehavior 的自动生成类参考。"
---
# EscortAgentBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox
**Type:** `public class EscortAgentBehavior : AgentBehavior `
**Base:** AgentBehavior
**Source:** SandBox/Missions/AgentBehaviors/EscortAgentBehavior.cs

## 概述

`EscortAgentBehavior` 的自动生成类参考页面。声明来自 `SandBox/Missions/AgentBehaviors/EscortAgentBehavior.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Initialize
`public void Initialize(Agent escortedAgent,Agent targetAgent,EscortAgentBehavior.OnTargetReachedDelegate onTargetReached = null) `
`public void Initialize(Agent escortedAgent,UsableMachine targetMachine,EscortAgentBehavior.OnTargetReachedDelegate onTargetReached = null) `
`public void Initialize(Agent escortedAgent,Vec3? targetPosition,EscortAgentBehavior.OnTargetReachedDelegate onTargetReached = null) `

### Tick
`public override void Tick(float dt,bool isSimulation) `

### IsEscortFinished
`public bool IsEscortFinished() `

### GetAvailability
`public override float GetAvailability(bool isSimulation) `

### OnDeactivate
`protected override void OnDeactivate() `

### GetDebugInfo
`public override string GetDebugInfo() `

### AddEscortAgentBehavior
`public static void AddEscortAgentBehavior(Agent ownerAgent,Agent targetAgent,EscortAgentBehavior.OnTargetReachedDelegate onTargetReached) `

### RemoveEscortBehaviorOfAgent
`public static void RemoveEscortBehaviorOfAgent(Agent ownerAgent) `

### CheckIfAgentIsEscortedBy
`public static bool CheckIfAgentIsEscortedBy(Agent ownerAgent,Agent escortedAgent) `

### OnTargetReachedDelegate
`public delegate bool OnTargetReachedDelegate(Agent agent,ref Agent escortedAgent,ref Agent targetAgent,ref UsableMachine targetMachine,ref Vec3? targetPosition)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
