---
title: "RangedSiegeWeaponView"
description: "RangedSiegeWeaponView: a public class in TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon, inheriting UsableMissionObjectComponent; 14 exposed members (9 methods, 5 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/RangedSiegeWeaponView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RangedSiegeWeaponView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class RangedSiegeWeaponView : UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/RangedSiegeWeaponView.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

RangedSiegeWeaponView lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/RangedSiegeWeaponView.cs. It is a public class, implementing/inheriting UsableMissionObjectComponent; the inheritance chain is RangedSiegeWeaponView → UsableMissionObjectComponent. It exposes 14 public/protected members: 9 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RangedSiegeWeaponView lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon`, inheritance chain RangedSiegeWeaponView → UsableMissionObjectComponent. The surface is method-led (methods 9/14, properties 5/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/RangedSiegeWeaponView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface UsableMissionObjectComponent](../UsableMissionObjectComponent/)
- [same namespace BallistaView](../BallistaView/)
- [same namespace BricoleView](../BricoleView/)
- [same namespace MangonelView](../MangonelView/)
- [same namespace RangedSiegeWeaponViewController](../RangedSiegeWeaponViewController/)
