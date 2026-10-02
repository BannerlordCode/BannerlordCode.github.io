---
title: "ScriptBehavior"
description: "Auto-generated class reference for ScriptBehavior."
---
# ScriptBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox
**Type:** `public class ScriptBehavior : AgentBehavior `
**Base:** AgentBehavior
**Source:** SandBox/Missions/AgentBehaviors/ScriptBehavior.cs

## Overview

Auto-generated stub for `ScriptBehavior`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### AddUsableMachineTarget
`public static void AddUsableMachineTarget(Agent ownerAgent,UsableMachine targetUsableMachine)`

### AddAgentTarget
`public static void AddAgentTarget(Agent ownerAgent,Agent targetAgent)`

### AddWorldFrameTarget
`public static void AddWorldFrameTarget(Agent ownerAgent,WorldFrame targetWorldFrame)`

### AddTargetWithDelegate
`public static void AddTargetWithDelegate(Agent ownerAgent,ScriptBehavior.SelectTargetDelegate selectTargetDelegate,ScriptBehavior.OnTargetReachedWaitDelegate onTargetReachWaitDelegate,ScriptBehavior.OnTargetReachedDelegate onTargetReachedDelegate,float initialWaitInSeconds = 0f)`

### IsNearTarget
`public bool IsNearTarget(Agent targetAgent)`

### Tick
`public override void Tick(float dt,bool isSimulation)`

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

### OnDeactivate
`protected override void OnDeactivate()`

### GetDebugInfo
`public override string GetDebugInfo()`

### SelectTargetDelegate
`public delegate bool SelectTargetDelegate(Agent agent,ref Agent targetAgent,ref UsableMachine targetUsableMachine,ref WorldFrame targetFrame,ref float customTargetReachedRangeThreshold,ref float customTargetReachedRotationThreshold)`

### OnTargetReachedDelegate
`public delegate bool OnTargetReachedDelegate(Agent agent,ref Agent targetAgent,ref UsableMachine targetUsableMachine,ref WorldFrame targetFrame)`

### OnTargetReachedWaitDelegate
`public delegate void OnTargetReachedWaitDelegate(Agent agent,ref float waitTimeInSeconds)`

## See Also

- [Section index](../)
