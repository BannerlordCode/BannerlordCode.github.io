---
title: "JavelinBarrel"
description: "JavelinBarrel: a public class in TaleWorlds.MountAndBlade, inheriting AmmoBarrelBase; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Objects/Usables/JavelinBarrel.cs."
---
# JavelinBarrel

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Usables`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class JavelinBarrel : AmmoBarrelBase`
**File:** `TaleWorlds.MountAndBlade/Objects/Usables/JavelinBarrel.cs`

## Overview

JavelinBarrel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/Usables/JavelinBarrel.cs. It is a public class, implementing/inheriting AmmoBarrelBase; the inheritance chain is JavelinBarrel → AmmoBarrelBase → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: JavelinBarrel is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Objects.Usables) the module directory; inheritance chain JavelinBarrel → AmmoBarrelBase → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/Usables/JavelinBarrel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetSoundEvent` | `protected override int GetSoundEvent()` | method |
| `WeaponClass[]GetRequiredWeaponClasses` | `protected override WeaponClass[]GetRequiredWeaponClasses()` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface AmmoBarrelBase](../AmmoBarrelBase)
- [same namespace AmmoBarrelBase](../AmmoBarrelBase)
- [same namespace ArrowBarrel](../ArrowBarrel)
- [same namespace ClimbingMachine](../ClimbingMachine)
- [same namespace EventTriggeringUsableMachine](../EventTriggeringUsableMachine)
