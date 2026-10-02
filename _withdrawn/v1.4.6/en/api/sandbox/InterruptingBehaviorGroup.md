---
title: "InterruptingBehaviorGroup"
description: "InterruptingBehaviorGroup: a public class in SandBox.Missions.AgentBehaviors, inheriting AgentBehaviorGroup; 5 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/AgentBehaviors/InterruptingBehaviorGroup.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InterruptingBehaviorGroup

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public class InterruptingBehaviorGroup : AgentBehaviorGroup`
**File:** `SandBox/Missions/AgentBehaviors/InterruptingBehaviorGroup.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

InterruptingBehaviorGroup lives in the SandBox module, source file SandBox/Missions/AgentBehaviors/InterruptingBehaviorGroup.cs. It is a public class, implementing/inheriting AgentBehaviorGroup; the inheritance chain is InterruptingBehaviorGroup → AgentBehaviorGroup. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InterruptingBehaviorGroup lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.AgentBehaviors`, inheritance chain InterruptingBehaviorGroup → AgentBehaviorGroup. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/AgentBehaviors/InterruptingBehaviorGroup.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `InterruptingBehaviorGroup` | `public InterruptingBehaviorGroup(AgentNavigator navigator, Mission mission) : base(navigator, mission)` | constructor |
| `Tick` | `public override void Tick(float dt, bool isSimulation)` | method |
| `GetScore` | `public override float GetScore(bool isSimulation)` | method |
| `ForceThink` | `public override void ForceThink(float inSeconds)` | method |
| `ConversationTick` | `public override void ConversationTick()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AgentBehaviorGroup](../AgentBehaviorGroup/)
- [same namespace AgentBehavior](../AgentBehavior/)
- [same namespace AgentBehaviorGroup](../AgentBehaviorGroup/)
- [same namespace AlarmedBehaviorGroup](../AlarmedBehaviorGroup/)
- [same namespace BehaviorSets](../BehaviorSets/)
