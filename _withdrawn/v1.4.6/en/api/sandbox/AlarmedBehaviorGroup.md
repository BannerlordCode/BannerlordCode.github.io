---
title: "AlarmedBehaviorGroup"
description: "AlarmedBehaviorGroup: a public class in SandBox.Missions.AgentBehaviors, inheriting AgentBehaviorGroup; 17 exposed members (13 methods, 1 properties, 2 fields). Canonical bucket sandbox. Source: SandBox/Missions/AgentBehaviors/AlarmedBehaviorGroup.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AlarmedBehaviorGroup

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public class AlarmedBehaviorGroup : AgentBehaviorGroup`
**File:** `SandBox/Missions/AgentBehaviors/AlarmedBehaviorGroup.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

AlarmedBehaviorGroup lives in the SandBox module, source file SandBox/Missions/AgentBehaviors/AlarmedBehaviorGroup.cs. It is a public class, implementing/inheriting AgentBehaviorGroup; the inheritance chain is AlarmedBehaviorGroup → AgentBehaviorGroup. It exposes 17 public/protected members: 13 methods, 1 properties, 2 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AlarmedBehaviorGroup lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.AgentBehaviors`, inheritance chain AlarmedBehaviorGroup → AgentBehaviorGroup. The surface is method-led (methods 13/17, properties 1/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/AgentBehaviors/AlarmedBehaviorGroup.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AlarmFactor` | `public float AlarmFactor` | property |
| `AlarmedBehaviorGroup` | `public AlarmedBehaviorGroup(AgentNavigator navigator, Mission mission) : base(navigator, mission)` | constructor |
| `SetCanMoveWhenCautious` | `public void SetCanMoveWhenCautious(bool value)` | method |
| `GetVisualFactor` | `public float GetVisualFactor(Vec3 usedGlobalLookDirection, Agent currentAgent, MBReadOnlyList<GameEntity>stealthIndoorLightingAreas, ref bool hasVisualOnCorpse, ref bool hasVisualOnEnemy)` | method |
| `ResetAlarmFactor` | `public void ResetAlarmFactor()` | method |
| `AddAlarmFactor` | `public void AddAlarmFactor(float addedAlarmFactor, in WorldPosition suspiciousPosition)` | method |
| `Tick` | `public override void Tick(float dt, bool isSimulation)` | method |
| `GetScore` | `public override float GetScore(bool isSimulation)` | method |
| `GetClosestAlarmSource` | `public Agent GetClosestAlarmSource(out float distanceSquared)` | method |
| `AlarmAgent` | `public static void AlarmAgent(Agent agent)` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent agent)` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `ForceThink` | `public override void ForceThink(float inSeconds)` | method |
| `ConversationTick` | `public override void ConversationTick()` | method |
| `SafetyDistance` | `public const float SafetyDistance` | field |
| `SafetyDistanceSquared` | `public const float SafetyDistanceSquared` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AgentBehaviorGroup](../AgentBehaviorGroup/)
- [same namespace AgentBehavior](../AgentBehavior/)
- [same namespace AgentBehaviorGroup](../AgentBehaviorGroup/)
- [same namespace BehaviorSets](../BehaviorSets/)
- [same namespace CautiousBehavior](../CautiousBehavior/)
