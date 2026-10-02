---
title: "AgentBehavior"
description: "AgentBehavior: a public class in SandBox.Missions.AgentBehaviors; 16 exposed members (10 methods, 4 properties, 1 fields). Canonical bucket sandbox. Source: SandBox/Missions/AgentBehaviors/AgentBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentBehavior

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public abstract class AgentBehavior`
**File:** `SandBox/Missions/AgentBehaviors/AgentBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

AgentBehavior lives in the SandBox module, source file SandBox/Missions/AgentBehaviors/AgentBehavior.cs. It is a public class (abstract); the inheritance chain is AgentBehavior. It exposes 16 public/protected members: 10 methods, 4 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentBehavior lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.AgentBehaviors`, inheritance chain AgentBehavior. The surface is method-led (methods 10/16, properties 4/16), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/AgentBehaviors/AgentBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Navigator` | `public AgentNavigator Navigator` | property |
| `IsActive` | `public bool IsActive` | property |
| `OwnerAgent` | `public Agent OwnerAgent` | property |
| `Mission` | `public Mission Mission` | property |
| `AgentBehavior` | `protected AgentBehavior(AgentBehaviorGroup behaviorGroup)` | constructor |
| `GetAvailability` | `public virtual float GetAvailability(bool isSimulation)` | method |
| `Tick` | `public virtual void Tick(float dt, bool isSimulation)` | method |
| `ConversationTick` | `public virtual void ConversationTick()` | method |
| `OnActivate` | `protected virtual void OnActivate()` | method |
| `OnDeactivate` | `protected virtual void OnDeactivate()` | method |
| `CheckStartWithBehavior` | `public virtual bool CheckStartWithBehavior()` | method |
| `OnSpecialTargetChanged` | `public virtual void OnSpecialTargetChanged()` | method |
| `SetCustomWanderTarget` | `public virtual void SetCustomWanderTarget(UsableMachine customUsableMachine)` | method |
| `OnAgentRemoved` | `public virtual void OnAgentRemoved(Agent agent)` | method |
| `GetDebugInfo` | `public abstract string GetDebugInfo();` | method |
| `CheckTime` | `public float CheckTime` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AgentBehaviorGroup](../AgentBehaviorGroup/)
- [same namespace AlarmedBehaviorGroup](../AlarmedBehaviorGroup/)
- [same namespace BehaviorSets](../BehaviorSets/)
- [same namespace CautiousBehavior](../CautiousBehavior/)
