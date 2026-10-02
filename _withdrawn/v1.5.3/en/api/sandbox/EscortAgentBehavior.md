---
title: "EscortAgentBehavior"
description: "Auto-generated class reference for EscortAgentBehavior."
---
# EscortAgentBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox
**Type:** `public class EscortAgentBehavior : AgentBehavior `
**Base:** AgentBehavior
**Source:** SandBox/Missions/AgentBehaviors/EscortAgentBehavior.cs

## Overview

Auto-generated stub for `EscortAgentBehavior`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### Initialize
`public void Initialize(Agent escortedAgent,Agent targetAgent,EscortAgentBehavior.OnTargetReachedDelegate onTargetReached = null)`

### Tick
`public override void Tick(float dt,bool isSimulation)`

### IsEscortFinished
`public bool IsEscortFinished()`

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

### OnDeactivate
`protected override void OnDeactivate()`

### GetDebugInfo
`public override string GetDebugInfo()`

### AddEscortAgentBehavior
`public static void AddEscortAgentBehavior(Agent ownerAgent,Agent targetAgent,EscortAgentBehavior.OnTargetReachedDelegate onTargetReached)`

### RemoveEscortBehaviorOfAgent
`public static void RemoveEscortBehaviorOfAgent(Agent ownerAgent)`

### CheckIfAgentIsEscortedBy
`public static bool CheckIfAgentIsEscortedBy(Agent ownerAgent,Agent escortedAgent)`

### OnTargetReachedDelegate
`public delegate bool OnTargetReachedDelegate(Agent agent,ref Agent escortedAgent,ref Agent targetAgent,ref UsableMachine targetMachine,ref Vec3? targetPosition)`

## See Also

- [Section index](../)
