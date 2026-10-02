---
title: "AgentComponent"
description: "AgentComponent: a public class in TaleWorlds.MountAndBlade; 20 exposed members (19 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/AgentComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class AgentComponent`
**File:** `TaleWorlds.MountAndBlade/AgentComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

AgentComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/AgentComponent.cs. It is a public class (abstract); the inheritance chain is AgentComponent. It exposes 20 public/protected members: 19 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentComponent lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain AgentComponent. The surface is method-led (methods 19/20, properties 0/20), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/AgentComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AgentComponent` | `protected AgentComponent(Agent agent)` | constructor |
| `Initialize` | `public virtual void Initialize()` | method |
| `OnTick` | `public virtual void OnTick(float dt)` | method |
| `OnTickParallel` | `public virtual void OnTickParallel(float dt)` | method |
| `GetMoraleAddition` | `public virtual float GetMoraleAddition()` | method |
| `GetMoraleDecreaseConstant` | `public virtual float GetMoraleDecreaseConstant()` | method |
| `OnItemPickup` | `public virtual void OnItemPickup(SpawnedItemEntity item)` | method |
| `OnWeaponDrop` | `public virtual void OnWeaponDrop(MissionWeapon droppedWeapon)` | method |
| `OnStopUsingGameObject` | `public virtual void OnStopUsingGameObject()` | method |
| `OnWeaponHPChanged` | `public virtual void OnWeaponHPChanged(ItemObject item, int hitPoints)` | method |
| `OnRetreating` | `public virtual void OnRetreating()` | method |
| `OnMount` | `public virtual void OnMount(Agent mount)` | method |
| `OnDismount` | `public virtual void OnDismount(Agent mount)` | method |
| `OnHit` | `public virtual void OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon, in Blow b, in AttackCollisionData collisionData)` | method |
| `OnDisciplineChanged` | `public virtual void OnDisciplineChanged()` | method |
| `OnAgentRemoved` | `public virtual void OnAgentRemoved()` | method |
| `OnAgentTeleported` | `public virtual void OnAgentTeleported()` | method |
| `OnAIInputSet` | `public virtual void OnAIInputSet(ref Agent.EventControlFlag eventFlag, ref Agent.MovementControlFlag movementFlag, ref Vec2 inputVector)` | method |
| `OnComponentRemoved` | `public virtual void OnComponentRemoved()` | method |
| `OnFormationSet` | `public virtual void OnFormationSet()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
