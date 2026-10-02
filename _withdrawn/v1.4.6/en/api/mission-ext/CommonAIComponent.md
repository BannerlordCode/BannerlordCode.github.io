---
title: "CommonAIComponent"
description: "CommonAIComponent: a public class in TaleWorlds.MountAndBlade, inheriting AgentComponent; 18 exposed members (10 methods, 6 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/CommonAIComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CommonAIComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CommonAIComponent : AgentComponent`
**File:** `TaleWorlds.MountAndBlade/CommonAIComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

CommonAIComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/CommonAIComponent.cs. It is a public class, implementing/inheriting AgentComponent; the inheritance chain is CommonAIComponent → AgentComponent. It exposes 18 public/protected members: 10 methods, 6 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CommonAIComponent lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain CommonAIComponent → AgentComponent. The surface is method-led (methods 10/18, properties 6/18), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/CommonAIComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsPanicked` | `public bool IsPanicked` | property |
| `IsRetreating` | `public bool IsRetreating` | property |
| `ReservedRiderAgentIndex` | `public int ReservedRiderAgentIndex` | property |
| `InitialMorale` | `public float InitialMorale` | property |
| `RecoveryMorale` | `public float RecoveryMorale` | property |
| `Morale` | `public float Morale` | property |
| `CommonAIComponent` | `public CommonAIComponent(Agent agent) : base(agent)` | constructor |
| `Initialize` | `public override void Initialize()` | method |
| `OnTickParallel` | `public override void OnTickParallel(float dt)` | method |
| `OnTick` | `public override void OnTick(float dt)` | method |
| `Panic` | `public void Panic()` | method |
| `Retreat` | `public void Retreat(bool useCachingSystem = false)` | method |
| `StopRetreating` | `public void StopRetreating()` | method |
| `CanPanic` | `public bool CanPanic()` | method |
| `OnHit` | `public override void OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon, in Blow b, in AttackCollisionData collisionData)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved()` | method |
| `OnComponentRemoved` | `public override void OnComponentRemoved()` | method |
| `MoraleThresholdForPanicking` | `public const float MoraleThresholdForPanicking` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AgentComponent](../AgentComponent/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
