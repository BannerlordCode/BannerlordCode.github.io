---
title: "MissionObject"
description: "MissionObject: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 30 exposed members (21 methods, 5 properties, 2 fields). Source: TaleWorlds.MountAndBlade/MissionObject.cs."
---
# MissionObject

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionObject : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/MissionObject.cs`

## Overview

MissionObject lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionObject.cs. It is a public class (abstract), implementing/inheriting ScriptComponentBehavior; the inheritance chain is MissionObject → ScriptComponentBehavior. It exposes 30 public/protected members: 21 methods, 5 properties, 2 fields, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionObject is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionObject → ScriptComponentBehavior. The surface is method-led (methods 21/30, properties 5/30), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionObject.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public MissionObjectId Id` | property |
| `IsDisabled` | `public bool IsDisabled` | property |
| `HitObjectName` | `public virtual TextObject HitObjectName` | property |
| `MissionObject` | `public MissionObject()` | constructor |
| `SetAbilityOfFaces` | `public virtual void SetAbilityOfFaces(bool enabled)` | method |
| `SetAbilityOfConditionalFaces` | `protected void SetAbilityOfConditionalFaces(bool enabled)` | method |
| `OnInit` | `protected internal override void OnInit()` | method |
| `AttachDynamicNavmeshToEntity` | `protected virtual void AttachDynamicNavmeshToEntity()` | method |
| `GetEntityToAttachNavMeshFaces` | `protected virtual WeakGameEntity GetEntityToAttachNavMeshFaces()` | method |
| `OnCheckForProblems` | `protected internal override bool OnCheckForProblems()` | method |
| `OnPreInit` | `protected internal override void OnPreInit()` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `OnMissionReset` | `protected internal virtual void OnMissionReset()` | method |
| `AfterMissionStart` | `public virtual void AfterMissionStart()` | method |
| `OnMissionEnded` | `public virtual void OnMissionEnded()` | method |
| `OnDeploymentFinished` | `public virtual void OnDeploymentFinished()` | method |
| `OnHit` | `protected internal virtual bool OnHit(Agent attackerAgent, int damage, Vec3 impactPosition, Vec3 impactDirection, in MissionWeapon weapon, int affectorWeaponSlotOrMissileIndex, ScriptComponentBehavior attackerScriptComponentBehavior, out bool reportDamage, out float finalDamage, out float fireDamage, out float modifiedFireDamage)` | method |
| `SetEnabled` | `public void SetEnabled(bool isParentObject = false)` | method |
| `SetEnabledAndMakeVisible` | `public void SetEnabledAndMakeVisible(bool isParentObject = false, bool enableFaces = false)` | method |
| `SetDisabled` | `public void SetDisabled(bool isParentObject = false)` | method |
| `SetDisabledAndMakeInvisible` | `public void SetDisabledAndMakeInvisible(bool isParentObject = false, bool disableFaces = false)` | method |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | method |
| `OnEndMission` | `public virtual void OnEndMission()` | method |
| `CreatedAtRuntime` | `public bool CreatedAtRuntime` | property |
| `MovesEntity` | `protected internal override bool MovesEntity()` | method |
| `AddStuckMissile` | `public virtual void AddStuckMissile(GameEntity missileEntity)` | method |
| `MaxNavMeshPerDynamicObject` | `public const int MaxNavMeshPerDynamicObject` | field |
| `NavMeshPrefabName` | `protected string NavMeshPrefabName` | field |
| `DynamicNavmeshLocalIds` | `protected enum DynamicNavmeshLocalIds` | property |
| `DynamicNavmeshLocalIds` | `protected enum DynamicNavmeshLocalIds` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
