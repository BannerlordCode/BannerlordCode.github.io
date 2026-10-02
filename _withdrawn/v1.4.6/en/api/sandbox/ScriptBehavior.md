---
title: "ScriptBehavior"
description: "ScriptBehavior: a public class in SandBox.Missions.AgentBehaviors, inheriting AgentBehavior; 16 exposed members (12 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/AgentBehaviors/ScriptBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ScriptBehavior

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public class ScriptBehavior : AgentBehavior`
**File:** `SandBox/Missions/AgentBehaviors/ScriptBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

ScriptBehavior lives in the SandBox module, source file SandBox/Missions/AgentBehaviors/ScriptBehavior.cs. It is a public class, implementing/inheriting AgentBehavior; the inheritance chain is ScriptBehavior → AgentBehavior. It exposes 16 public/protected members: 12 methods, 1 constructors, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ScriptBehavior lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.AgentBehaviors`, inheritance chain ScriptBehavior → AgentBehavior. The surface is method-led (methods 12/16, properties 0/16), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/AgentBehaviors/ScriptBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ScriptBehavior` | `public ScriptBehavior(AgentBehaviorGroup behaviorGroup) : base(behaviorGroup)` | constructor |
| `AddUsableMachineTarget` | `public static void AddUsableMachineTarget(Agent ownerAgent, UsableMachine targetUsableMachine)` | method |
| `AddAgentTarget` | `public static void AddAgentTarget(Agent ownerAgent, Agent targetAgent)` | method |
| `AddWorldFrameTarget` | `public static void AddWorldFrameTarget(Agent ownerAgent, WorldFrame targetWorldFrame)` | method |
| `AddTargetWithDelegate` | `public static void AddTargetWithDelegate(Agent ownerAgent, ScriptBehavior.SelectTargetDelegate selectTargetDelegate, ScriptBehavior.OnTargetReachedWaitDelegate onTargetReachWaitDelegate, ScriptBehavior.OnTargetReachedDelegate onTargetReachedDelegate, float initialWaitInSeconds = 0f)` | method |
| `IsNearTarget` | `public bool IsNearTarget(Agent targetAgent)` | method |
| `Tick` | `public override void Tick(float dt, bool isSimulation)` | method |
| `GetAvailability` | `public override float GetAvailability(bool isSimulation)` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `GetDebugInfo` | `public override string GetDebugInfo()` | method |
| `SelectTargetDelegate` | `public delegate bool SelectTargetDelegate(Agent agent, ref Agent targetAgent, ref UsableMachine targetUsableMachine, ref WorldFrame targetFrame, ref float customTargetReachedRangeThreshold, ref float customTargetReachedRotationThreshold);` | method |
| `OnTargetReachedDelegate` | `public delegate bool OnTargetReachedDelegate(Agent agent, ref Agent targetAgent, ref UsableMachine targetUsableMachine, ref WorldFrame targetFrame);` | method |
| `OnTargetReachedWaitDelegate` | `public delegate void OnTargetReachedWaitDelegate(Agent agent, ref float waitTimeInSeconds);` | method |
| `SelectTargetDelegate` | `public delegate bool SelectTargetDelegate(Agent agent, ref Agent targetAgent, ref UsableMachine targetUsableMachine, ref WorldFrame targetFrame, ref float customTargetReachedRangeThreshold, ref float customTargetReachedRotationThreshold)` | nested type |
| `OnTargetReachedDelegate` | `public delegate bool OnTargetReachedDelegate(Agent agent, ref Agent targetAgent, ref UsableMachine targetUsableMachine, ref WorldFrame targetFrame)` | nested type |
| `OnTargetReachedWaitDelegate` | `public delegate void OnTargetReachedWaitDelegate(Agent agent, ref float waitTimeInSeconds)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AgentBehavior](../AgentBehavior/)
- [same namespace AgentBehavior](../AgentBehavior/)
- [same namespace AgentBehaviorGroup](../AgentBehaviorGroup/)
- [same namespace AlarmedBehaviorGroup](../AlarmedBehaviorGroup/)
- [same namespace BehaviorSets](../BehaviorSets/)
