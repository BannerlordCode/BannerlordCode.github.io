---
title: "ArrowBarrel"
description: "ArrowBarrel: a public class in TaleWorlds.MountAndBlade.Objects.Usables, inheriting AmmoBarrelBase; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Objects/Usables/ArrowBarrel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ArrowBarrel

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Usables`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ArrowBarrel : AmmoBarrelBase`
**File:** `TaleWorlds.MountAndBlade/Objects/Usables/ArrowBarrel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ArrowBarrel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/Usables/ArrowBarrel.cs. It is a public class, implementing/inheriting AmmoBarrelBase; the inheritance chain is ArrowBarrel → AmmoBarrelBase → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArrowBarrel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Objects.Usables`, inheritance chain ArrowBarrel → AmmoBarrelBase → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/Usables/ArrowBarrel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetSoundEvent` | `protected override int GetSoundEvent()` | method |
| `WeaponClass[]GetRequiredWeaponClasses` | `protected override WeaponClass[]GetRequiredWeaponClasses()` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AmmoBarrelBase](../AmmoBarrelBase/)
- [same namespace AmmoBarrelBase](../AmmoBarrelBase/)
- [same namespace ClimbingMachine](../ClimbingMachine/)
- [same namespace EventTriggeringUsableMachine](../EventTriggeringUsableMachine/)
- [same namespace JavelinBarrel](../JavelinBarrel/)
