---
title: "StonePile"
description: "StonePile: a public class in TaleWorlds.MountAndBlade, inheriting UsableMachine, IDetachment; 27 exposed members (17 methods, 5 properties, 2 fields). Source: TaleWorlds.MountAndBlade/StonePile.cs."
---
# StonePile

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class StonePile : UsableMachine, IDetachment`
**File:** `TaleWorlds.MountAndBlade/StonePile.cs`

## Overview

StonePile lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/StonePile.cs. It is a public class, implementing/inheriting UsableMachine, IDetachment; the inheritance chain is StonePile → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 27 public/protected members: 17 methods, 5 properties, 2 fields, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StonePile is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain StonePile → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 17/27, properties 5/27), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/StonePile.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AmmoCount` | `public int AmmoCount` | property |
| `HasThrowingPointUsed` | `public bool HasThrowingPointUsed` | property |
| `Side` | `public virtual BattleSideEnum Side` | property |
| `MaxUserCount` | `public override int MaxUserCount` | property |
| `StonePile` | `protected StonePile()` | constructor |
| `ConsumeAmmo` | `protected void ConsumeAmmo()` | method |
| `SetAmmo` | `public void SetAmmo(int ammoLeft)` | method |
| `CheckAmmo` | `protected virtual void CheckAmmo()` | method |
| `OnInit` | `protected internal override void OnInit()` | method |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | method |
| `AfterMissionStart` | `public override void AfterMissionStart()` | method |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | method |
| `IsInRangeToCheckAlternativePoints` | `public override bool IsInRangeToCheckAlternativePoints(Agent agent)` | method |
| `GetBestPointAlternativeTo` | `public override StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `WriteToNetwork` | `public override void WriteToNetwork()` | method |
| `GetSuitableStandingPointFor` | `protected override StandingPoint GetSuitableStandingPointFor(BattleSideEnum side, Agent agent = null, List<Agent>agents = null, List<ValueTuple<Agent, float>>agentValuePairs = null)` | method |
| `GetDetachmentWeightAux` | `protected override float GetDetachmentWeightAux(BattleSideEnum side)` | method |
| `UpdateAmmoMesh` | `protected virtual void UpdateAmmoMesh()` | method |
| `StartingAmmoCount` | `public int StartingAmmoCount` | field |
| `GivenItemID` | `public string GivenItemID` | field |
| `ISynchedMissionObjectReadableRecord` | `public struct StonePileRecord : ISynchedMissionObjectReadableRecord` | property |
| `ISynchedMissionObjectReadableRecord` | `public struct StonePileRecord : ISynchedMissionObjectReadableRecord` | nested type |
| `StackArray8ThrowingPoint` | `public struct StackArray8ThrowingPoint` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface UsableMachine](../UsableMachine)
- [base / interface IDetachment](../IDetachment)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
