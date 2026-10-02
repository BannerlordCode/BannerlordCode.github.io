---
title: "WalkingBehavior"
description: "WalkingBehavior: a public class in SandBox.Missions.AgentBehaviors, inheriting AgentBehavior; 10 exposed members (9 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/AgentBehaviors/WalkingBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WalkingBehavior

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public class WalkingBehavior : AgentBehavior`
**File:** `SandBox/Missions/AgentBehaviors/WalkingBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

WalkingBehavior lives in the SandBox module, source file SandBox/Missions/AgentBehaviors/WalkingBehavior.cs. It is a public class, implementing/inheriting AgentBehavior; the inheritance chain is WalkingBehavior → AgentBehavior. It exposes 10 public/protected members: 9 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WalkingBehavior lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.AgentBehaviors`, inheritance chain WalkingBehavior → AgentBehavior. The surface is method-led (methods 9/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/AgentBehaviors/WalkingBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `WalkingBehavior` | `public WalkingBehavior(AgentBehaviorGroup behaviorGroup) : base(behaviorGroup)` | constructor |
| `SetIndoorWandering` | `public void SetIndoorWandering(bool isActive)` | method |
| `SetOutdoorWandering` | `public void SetOutdoorWandering(bool isActive)` | method |
| `Tick` | `public override void Tick(float dt, bool isSimulation)` | method |
| `ConversationTick` | `public override void ConversationTick()` | method |
| `GetAvailability` | `public override float GetAvailability(bool isSimulation)` | method |
| `SetCustomWanderTarget` | `public override void SetCustomWanderTarget(UsableMachine customUsableMachine)` | method |
| `OnSpecialTargetChanged` | `public override void OnSpecialTargetChanged()` | method |
| `GetDebugInfo` | `public override string GetDebugInfo()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AgentBehavior](../AgentBehavior/)
- [same namespace AgentBehavior](../AgentBehavior/)
- [same namespace AgentBehaviorGroup](../AgentBehaviorGroup/)
- [same namespace AlarmedBehaviorGroup](../AlarmedBehaviorGroup/)
- [same namespace BehaviorSets](../BehaviorSets/)
