---
title: "RangedSiegeWeaponView"
description: "RangedSiegeWeaponView: a public class in TaleWorlds.MountAndBlade.View, inheriting UsableMissionObjectComponent; 14 exposed members (9 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/RangedSiegeWeaponView.cs."
---
# RangedSiegeWeaponView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class RangedSiegeWeaponView : UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/RangedSiegeWeaponView.cs`

## Overview

RangedSiegeWeaponView lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/RangedSiegeWeaponView.cs. It is a public class, implementing/inheriting UsableMissionObjectComponent; the inheritance chain is RangedSiegeWeaponView → UsableMissionObjectComponent. It exposes 14 public/protected members: 9 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RangedSiegeWeaponView is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon) the module directory; inheritance chain RangedSiegeWeaponView → UsableMissionObjectComponent. The surface is method-led (methods 9/14, properties 5/14), so it mostly exposes operations. UsableMissionObjectComponent on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/RangedSiegeWeaponView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RangedSiegeWeapon` | `public RangedSiegeWeapon RangedSiegeWeapon` | property |
| `MissionScreen` | `public MissionScreen MissionScreen` | property |
| `Camera` | `public Camera Camera` | property |
| `CameraHolder` | `public GameEntity CameraHolder` | property |
| `PilotAgent` | `public Agent PilotAgent` | property |
| `Initialize` | `public void Initialize(RangedSiegeWeapon rangedSiegeWeapon, MissionScreen missionScreen)` | method |
| `OnAdded` | `protected override void OnAdded(Scene scene)` | method |
| `OnMissionReset` | `protected override void OnMissionReset()` | method |
| `IsOnTickRequired` | `public override bool IsOnTickRequired()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `HandleUserInput` | `protected virtual void HandleUserInput(float dt)` | method |
| `StartUsingWeaponCamera` | `protected virtual void StartUsingWeaponCamera()` | method |
| `HandleUserCameraRotation` | `protected virtual void HandleUserCameraRotation(float dt)` | method |
| `OnMissionObjectDisabled` | `protected override void OnMissionObjectDisabled()` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BallistaView](../BallistaView)
- [same namespace BricoleView](../BricoleView)
- [same namespace MangonelView](../MangonelView)
- [same namespace RangedSiegeWeaponViewController](../RangedSiegeWeaponViewController)
