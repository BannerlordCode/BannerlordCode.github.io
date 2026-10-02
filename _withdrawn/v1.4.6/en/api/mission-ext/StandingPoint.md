---
title: "StandingPoint"
description: "StandingPoint: a public class in TaleWorlds.MountAndBlade, inheriting UsableMissionObject; 33 exposed members (21 methods, 7 properties, 3 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/StandingPoint.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StandingPoint

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class StandingPoint : UsableMissionObject`
**File:** `TaleWorlds.MountAndBlade/StandingPoint.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

StandingPoint lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/StandingPoint.cs. It is a public class, implementing/inheriting UsableMissionObject; the inheritance chain is StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 33 public/protected members: 21 methods, 7 properties, 3 fields, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StandingPoint lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 21/33, properties 7/33), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/StandingPoint.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DisableScriptedFrameFlags` | `public virtual Agent.AIScriptedFrameFlags DisableScriptedFrameFlags` | property |
| `DisableCombatActionsOnUse` | `public override bool DisableCombatActionsOnUse` | property |
| `FavoredUser` | `public Agent FavoredUser` | property |
| `PlayerStopsUsingWhenInteractsWithOther` | `public virtual bool PlayerStopsUsingWhenInteractsWithOther` | property |
| `UseOwnPositionInsteadOfWorldPosition` | `public bool UseOwnPositionInsteadOfWorldPosition` | property |
| `CustomPlayerInteractionDistance` | `public float CustomPlayerInteractionDistance` | property |
| `OnInit` | `protected internal override void OnInit()` | method |
| `OnParentMachinePhysicsStateChanged` | `public void OnParentMachinePhysicsStateChanged()` | method |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTickParallel3` | `protected internal override void OnTickParallel3(float dt)` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `DoesActionTypeStopUsingGameObject` | `protected virtual bool DoesActionTypeStopUsingGameObject(Agent.ActionCodeType actionType)` | method |
| `OnUse` | `public override void OnUse(Agent userAgent, sbyte agentBoneIndex)` | method |
| `OnUseStopped` | `public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)` | method |
| `GetUserFrameForAgent` | `public override WorldFrame GetUserFrameForAgent(Agent agent)` | method |
| `HasAlternative` | `public virtual bool HasAlternative()` | method |
| `GetUsageScoreForAgent` | `public virtual float GetUsageScoreForAgent(Agent agent)` | method |
| `GetUsageScoreForAgent` | `public virtual float GetUsageScoreForAgent(ValueTuple<Agent, float>agentPair)` | method |
| `SetupOnUsingStoppedBehavior` | `public void SetupOnUsingStoppedBehavior(bool autoAttach, Action<Agent, bool>action)` | method |
| `OnEndMission` | `public override void OnEndMission()` | method |
| `IsUsableBySide` | `protected internal virtual bool IsUsableBySide(BattleSideEnum side)` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `IsUsableByAgent` | `public override bool IsUsableByAgent(Agent userAgent)` | method |
| `SetUsableByAIOnly` | `public void SetUsableByAIOnly()` | method |
| `SetUsableByPlayerOnly` | `public void SetUsableByPlayerOnly()` | method |
| `SetUsableByPlayerOrAI` | `public void SetUsableByPlayerOrAI()` | method |
| `StandingPoint` | `public StandingPoint() : base(false)` | constructor |
| `AutoSheathWeapons` | `public bool AutoSheathWeapons` | field |
| `TranslateUser` | `public readonly bool TranslateUser` | field |
| `StandingPointSide` | `protected BattleSideEnum StandingPointSide` | field |
| `StackArray8StandingPoint` | `public struct StackArray8StandingPoint` | property |
| `StackArray8StandingPoint` | `public struct StackArray8StandingPoint` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface UsableMissionObject](../UsableMissionObject/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
