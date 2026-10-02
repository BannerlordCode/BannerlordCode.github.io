---
title: "StandingPointWithWeaponRequirement"
description: "StandingPointWithWeaponRequirement: a public class in TaleWorlds.MountAndBlade, inheriting StandingPoint; 9 exposed members (8 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/StandingPointWithWeaponRequirement.cs."
---
# StandingPointWithWeaponRequirement

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class StandingPointWithWeaponRequirement : StandingPoint`
**File:** `TaleWorlds.MountAndBlade/StandingPointWithWeaponRequirement.cs`

## Overview

StandingPointWithWeaponRequirement lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/StandingPointWithWeaponRequirement.cs. It is a public class, implementing/inheriting StandingPoint; the inheritance chain is StandingPointWithWeaponRequirement → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 9 public/protected members: 8 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StandingPointWithWeaponRequirement is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain StandingPointWithWeaponRequirement → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 8/9, properties 0/9), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/StandingPointWithWeaponRequirement.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StandingPointWithWeaponRequirement` | `public StandingPointWithWeaponRequirement()` | constructor |
| `OnInit` | `protected internal override void OnInit()` | method |
| `InitRequiredWeaponClasses` | `public void InitRequiredWeaponClasses(WeaponClass[]requiredWeaponClasses)` | method |
| `InitRequiredWeapon` | `public void InitRequiredWeapon(ItemObject weapon)` | method |
| `InitGivenWeapon` | `public void InitGivenWeapon(ItemObject weapon)` | method |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | method |
| `SetHasAlternative` | `public void SetHasAlternative(bool hasAlternative)` | method |
| `HasAlternative` | `public override bool HasAlternative()` | method |
| `SetUsingBattleSide` | `public void SetUsingBattleSide(BattleSideEnum side)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface StandingPoint](../StandingPoint)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
