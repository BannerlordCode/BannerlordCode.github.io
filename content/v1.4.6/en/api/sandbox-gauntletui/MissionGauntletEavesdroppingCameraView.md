---
title: "MissionGauntletEavesdroppingCameraView"
description: "MissionGauntletEavesdroppingCameraView: a public class in SandBox.GauntletUI, inheriting EavesdroppingMissionCameraView; 4 exposed members (3 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/Missions/MissionGauntletEavesdroppingCameraView.cs."
---
# MissionGauntletEavesdroppingCameraView

**Namespace:** `SandBox.GauntletUI.Missions`
**Module:** `SandBox.GauntletUI`
**Type:** `public class MissionGauntletEavesdroppingCameraView : EavesdroppingMissionCameraView`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletEavesdroppingCameraView.cs`

## Overview

MissionGauntletEavesdroppingCameraView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Missions/MissionGauntletEavesdroppingCameraView.cs. It is a public class, implementing/inheriting EavesdroppingMissionCameraView; the inheritance chain is MissionGauntletEavesdroppingCameraView → EavesdroppingMissionCameraView. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletEavesdroppingCameraView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Missions) the module directory; inheritance chain MissionGauntletEavesdroppingCameraView → EavesdroppingMissionCameraView. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. EavesdroppingMissionCameraView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Missions/MissionGauntletEavesdroppingCameraView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionGauntletEavesdroppingCameraView` | `public MissionGauntletEavesdroppingCameraView()` | constructor |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `SetPlayerMovementEnabled` | `protected override void SetPlayerMovementEnabled(bool isPlayerMovementEnabled)` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionGauntletAgentAlarmStateView](../MissionGauntletAgentAlarmStateView)
- [same namespace MissionGauntletArenaPracticeFightView](../MissionGauntletArenaPracticeFightView)
- [same namespace MissionGauntletBarterView](../MissionGauntletBarterView)
- [same namespace MissionGauntletBoardGameView](../MissionGauntletBoardGameView)
