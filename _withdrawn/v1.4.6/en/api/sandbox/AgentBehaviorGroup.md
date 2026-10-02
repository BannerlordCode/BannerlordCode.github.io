---
title: "AgentBehaviorGroup"
description: "AgentBehaviorGroup: a public class in SandBox.Missions.AgentBehaviors; 21 exposed members (15 methods, 4 properties, 1 fields). Canonical bucket sandbox. Source: SandBox/Missions/AgentBehaviors/AgentBehaviorGroup.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentBehaviorGroup

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public abstract class AgentBehaviorGroup`
**File:** `SandBox/Missions/AgentBehaviors/AgentBehaviorGroup.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

AgentBehaviorGroup lives in the SandBox module, source file SandBox/Missions/AgentBehaviors/AgentBehaviorGroup.cs. It is a public class (abstract); the inheritance chain is AgentBehaviorGroup. It exposes 21 public/protected members: 15 methods, 4 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentBehaviorGroup lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.AgentBehaviors`, inheritance chain AgentBehaviorGroup. The surface is method-led (methods 15/21, properties 4/21), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/AgentBehaviors/AgentBehaviorGroup.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OwnerAgent` | `public Agent OwnerAgent` | property |
| `ScriptedBehavior` | `public AgentBehavior ScriptedBehavior` | property |
| `IsActive` | `public bool IsActive` | property |
| `Mission` | `public Mission Mission` | property |
| `AgentBehaviorGroup` | `protected AgentBehaviorGroup(AgentNavigator navigator, Mission mission)` | constructor |
| `AddBehavior` | `public T AddBehavior<T>() where T : AgentBehavior` | method |
| `GetBehavior` | `public T GetBehavior<T>() where T : AgentBehavior` | method |
| `HasBehavior` | `public bool HasBehavior<T>() where T : AgentBehavior` | method |
| `RemoveBehavior` | `public void RemoveBehavior<T>() where T : AgentBehavior` | method |
| `SetScriptedBehavior` | `public void SetScriptedBehavior<T>() where T : AgentBehavior` | method |
| `DisableScriptedBehavior` | `public void DisableScriptedBehavior()` | method |
| `DisableAllBehaviors` | `public void DisableAllBehaviors()` | method |
| `GetActiveBehavior` | `public AgentBehavior GetActiveBehavior()` | method |
| `Tick` | `public virtual void Tick(float dt, bool isSimulation)` | method |
| `ConversationTick` | `public virtual void ConversationTick()` | method |
| `OnAgentRemoved` | `public virtual void OnAgentRemoved(Agent agent)` | method |
| `OnActivate` | `protected virtual void OnActivate()` | method |
| `OnDeactivate` | `protected virtual void OnDeactivate()` | method |
| `GetScore` | `public virtual float GetScore(bool isSimulation)` | method |
| `ForceThink` | `public virtual void ForceThink(float inSeconds)` | method |
| `CheckBehaviorTime` | `protected float CheckBehaviorTime` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AgentBehavior](../AgentBehavior/)
- [same namespace AlarmedBehaviorGroup](../AlarmedBehaviorGroup/)
- [same namespace BehaviorSets](../BehaviorSets/)
- [same namespace CautiousBehavior](../CautiousBehavior/)
