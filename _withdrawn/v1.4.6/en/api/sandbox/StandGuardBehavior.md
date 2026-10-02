---
title: "StandGuardBehavior"
description: "StandGuardBehavior: a public class in SandBox.Missions.AgentBehaviors, inheriting AgentBehavior; 5 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/AgentBehaviors/StandGuardBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StandGuardBehavior

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public class StandGuardBehavior : AgentBehavior`
**File:** `SandBox/Missions/AgentBehaviors/StandGuardBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

StandGuardBehavior lives in the SandBox module, source file SandBox/Missions/AgentBehaviors/StandGuardBehavior.cs. It is a public class, implementing/inheriting AgentBehavior; the inheritance chain is StandGuardBehavior → AgentBehavior. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StandGuardBehavior lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.AgentBehaviors`, inheritance chain StandGuardBehavior → AgentBehavior. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/AgentBehaviors/StandGuardBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `StandGuardBehavior` | `public StandGuardBehavior(AgentBehaviorGroup behaviorGroup) : base(behaviorGroup)` | constructor |
| `Tick` | `public override void Tick(float dt, bool isSimulation)` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `GetAvailability` | `public override float GetAvailability(bool isSimulation)` | method |
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
