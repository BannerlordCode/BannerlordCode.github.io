---
title: "EscortAgentBehavior"
description: "EscortAgentBehavior: a public class in SandBox.Missions.AgentBehaviors, inheriting AgentBehavior; 16 exposed members (12 methods, 2 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/AgentBehaviors/EscortAgentBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EscortAgentBehavior

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public class EscortAgentBehavior : AgentBehavior`
**File:** `SandBox/Missions/AgentBehaviors/EscortAgentBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

EscortAgentBehavior lives in the SandBox module, source file SandBox/Missions/AgentBehaviors/EscortAgentBehavior.cs. It is a public class, implementing/inheriting AgentBehavior; the inheritance chain is EscortAgentBehavior → AgentBehavior. It exposes 16 public/protected members: 12 methods, 2 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EscortAgentBehavior lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.AgentBehaviors`, inheritance chain EscortAgentBehavior → AgentBehavior. The surface is method-led (methods 12/16, properties 2/16), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/AgentBehaviors/EscortAgentBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EscortedAgent` | `public Agent EscortedAgent` | property |
| `TargetAgent` | `public Agent TargetAgent` | property |
| `EscortAgentBehavior` | `public EscortAgentBehavior(AgentBehaviorGroup behaviorGroup) : base(behaviorGroup)` | constructor |
| `Initialize` | `public void Initialize(Agent escortedAgent, Agent targetAgent, EscortAgentBehavior.OnTargetReachedDelegate onTargetReached = null)` | method |
| `Initialize` | `public void Initialize(Agent escortedAgent, UsableMachine targetMachine, EscortAgentBehavior.OnTargetReachedDelegate onTargetReached = null)` | method |
| `Initialize` | `public void Initialize(Agent escortedAgent, Vec3? targetPosition, EscortAgentBehavior.OnTargetReachedDelegate onTargetReached = null)` | method |
| `Tick` | `public override void Tick(float dt, bool isSimulation)` | method |
| `IsEscortFinished` | `public bool IsEscortFinished()` | method |
| `GetAvailability` | `public override float GetAvailability(bool isSimulation)` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `GetDebugInfo` | `public override string GetDebugInfo()` | method |
| `AddEscortAgentBehavior` | `public static void AddEscortAgentBehavior(Agent ownerAgent, Agent targetAgent, EscortAgentBehavior.OnTargetReachedDelegate onTargetReached)` | method |
| `RemoveEscortBehaviorOfAgent` | `public static void RemoveEscortBehaviorOfAgent(Agent ownerAgent)` | method |
| `CheckIfAgentIsEscortedBy` | `public static bool CheckIfAgentIsEscortedBy(Agent ownerAgent, Agent escortedAgent)` | method |
| `OnTargetReachedDelegate` | `public delegate bool OnTargetReachedDelegate(Agent agent, ref Agent escortedAgent, ref Agent targetAgent, ref UsableMachine targetMachine, ref Vec3? targetPosition);` | method |
| `OnTargetReachedDelegate` | `public delegate bool OnTargetReachedDelegate(Agent agent, ref Agent escortedAgent, ref Agent targetAgent, ref UsableMachine targetMachine, ref Vec3? targetPosition)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AgentBehavior](../AgentBehavior/)
- [same namespace AgentBehavior](../AgentBehavior/)
- [same namespace AgentBehaviorGroup](../AgentBehaviorGroup/)
- [same namespace AlarmedBehaviorGroup](../AlarmedBehaviorGroup/)
- [same namespace BehaviorSets](../BehaviorSets/)
