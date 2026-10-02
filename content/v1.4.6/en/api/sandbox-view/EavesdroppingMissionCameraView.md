---
title: "EavesdroppingMissionCameraView"
description: "EavesdroppingMissionCameraView: a public class in SandBox.View, inheriting MissionView; 3 exposed members (3 methods, 0 properties, 0 fields). Source: SandBox.View/Missions/EavesdroppingMissionCameraView.cs."
---
# EavesdroppingMissionCameraView

**Namespace:** `SandBox.View.Missions`
**Module:** `SandBox.View`
**Type:** `public class EavesdroppingMissionCameraView : MissionView`
**File:** `SandBox.View/Missions/EavesdroppingMissionCameraView.cs`

## Overview

EavesdroppingMissionCameraView lives in the SandBox.View module, source file SandBox.View/Missions/EavesdroppingMissionCameraView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is EavesdroppingMissionCameraView → MissionView. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EavesdroppingMissionCameraView is a top-level type in SandBox.View, namespace differing from (SandBox.View.Missions) the module directory; inheritance chain EavesdroppingMissionCameraView → MissionView. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. MissionView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Missions/EavesdroppingMissionCameraView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetPlayerMovementEnabled` | `protected virtual void SetPlayerMovementEnabled(bool isPlayerMovementEnabled)` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionAgentAlarmStateView](../MissionAgentAlarmStateView)
- [same namespace MissionArenaPracticeFightView](../MissionArenaPracticeFightView)
- [same namespace MissionAudienceHandler](../MissionAudienceHandler)
- [same namespace MissionCampaignBattleSpectatorView](../MissionCampaignBattleSpectatorView)
