---
title: "IdleAgentBehavior"
description: "IdleAgentBehavior: a public class in SandBox.Missions.AgentBehaviors, inheriting AgentBehavior; 5 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/AgentBehaviors/IdleAgentBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IdleAgentBehavior

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public class IdleAgentBehavior : AgentBehavior`
**File:** `SandBox/Missions/AgentBehaviors/IdleAgentBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

IdleAgentBehavior lives in the SandBox module, source file SandBox/Missions/AgentBehaviors/IdleAgentBehavior.cs. It is a public class, implementing/inheriting AgentBehavior; the inheritance chain is IdleAgentBehavior → AgentBehavior. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IdleAgentBehavior lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.AgentBehaviors`, inheritance chain IdleAgentBehavior → AgentBehavior. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/AgentBehaviors/IdleAgentBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IdleAgentBehavior` | `public IdleAgentBehavior(AgentBehaviorGroup behaviorGroup) : base(behaviorGroup)` | constructor |
| `GetAvailability` | `public override float GetAvailability(bool isSimulation)` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `GetDebugInfo` | `public override string GetDebugInfo()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AgentBehavior](../AgentBehavior/)
- [same namespace AgentBehavior](../AgentBehavior/)
- [same namespace AgentBehaviorGroup](../AgentBehaviorGroup/)
- [same namespace AlarmedBehaviorGroup](../AlarmedBehaviorGroup/)
- [same namespace BehaviorSets](../BehaviorSets/)
