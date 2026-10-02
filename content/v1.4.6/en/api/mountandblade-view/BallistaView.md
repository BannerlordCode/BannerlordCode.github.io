---
title: "BallistaView"
description: "BallistaView: a public class in TaleWorlds.MountAndBlade.View, inheriting RangedSiegeWeaponView; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/BallistaView.cs."
---
# BallistaView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class BallistaView : RangedSiegeWeaponView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/BallistaView.cs`

## Overview

BallistaView lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/BallistaView.cs. It is a public class, implementing/inheriting RangedSiegeWeaponView; the inheritance chain is BallistaView → RangedSiegeWeaponView → UsableMissionObjectComponent. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BallistaView is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon) the module directory; inheritance chain BallistaView → RangedSiegeWeaponView → UsableMissionObjectComponent. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. UsableMissionObjectComponent on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/BallistaView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnAdded` | `protected override void OnAdded(Scene scene)` | method |
| `StartUsingWeaponCamera` | `protected override void StartUsingWeaponCamera()` | method |
| `HandleUserCameraRotation` | `protected override void HandleUserCameraRotation(float dt)` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface RangedSiegeWeaponView](../RangedSiegeWeaponView)
- [same namespace BricoleView](../BricoleView)
- [same namespace MangonelView](../MangonelView)
- [same namespace RangedSiegeWeaponView](../RangedSiegeWeaponView)
- [same namespace RangedSiegeWeaponViewController](../RangedSiegeWeaponViewController)
