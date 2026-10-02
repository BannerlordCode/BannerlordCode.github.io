---
title: "DailyBehaviorGroup"
description: "DailyBehaviorGroup: a public class in SandBox.Missions.AgentBehaviors, inheriting AgentBehaviorGroup; 8 exposed members (7 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/AgentBehaviors/DailyBehaviorGroup.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DailyBehaviorGroup

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public class DailyBehaviorGroup : AgentBehaviorGroup`
**File:** `SandBox/Missions/AgentBehaviors/DailyBehaviorGroup.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

DailyBehaviorGroup lives in the SandBox module, source file SandBox/Missions/AgentBehaviors/DailyBehaviorGroup.cs. It is a public class, implementing/inheriting AgentBehaviorGroup; the inheritance chain is DailyBehaviorGroup → AgentBehaviorGroup. It exposes 8 public/protected members: 7 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DailyBehaviorGroup lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.AgentBehaviors`, inheritance chain DailyBehaviorGroup → AgentBehaviorGroup. The surface is method-led (methods 7/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/AgentBehaviors/DailyBehaviorGroup.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DailyBehaviorGroup` | `public DailyBehaviorGroup(AgentNavigator navigator, Mission mission) : base(navigator, mission)` | constructor |
| `Tick` | `public override void Tick(float dt, bool isSimulation)` | method |
| `ConversationTick` | `public override void ConversationTick()` | method |
| `GetScore` | `public override float GetScore(bool isSimulation)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent agent)` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `ForceThink` | `public override void ForceThink(float inSeconds)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AgentBehaviorGroup](../AgentBehaviorGroup/)
- [same namespace AgentBehavior](../AgentBehavior/)
- [same namespace AgentBehaviorGroup](../AgentBehaviorGroup/)
- [same namespace AlarmedBehaviorGroup](../AlarmedBehaviorGroup/)
- [same namespace BehaviorSets](../BehaviorSets/)
