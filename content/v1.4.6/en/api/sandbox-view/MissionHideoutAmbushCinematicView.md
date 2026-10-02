---
title: "MissionHideoutAmbushCinematicView"
description: "MissionHideoutAmbushCinematicView: a public class in SandBox.View, inheriting MissionView; 4 exposed members (4 methods, 0 properties, 0 fields). Source: SandBox.View/Missions/MissionHideoutAmbushCinematicView.cs."
---
# MissionHideoutAmbushCinematicView

**Namespace:** `SandBox.View.Missions`
**Module:** `SandBox.View`
**Type:** `public class MissionHideoutAmbushCinematicView : MissionView`
**File:** `SandBox.View/Missions/MissionHideoutAmbushCinematicView.cs`

## Overview

MissionHideoutAmbushCinematicView lives in the SandBox.View module, source file SandBox.View/Missions/MissionHideoutAmbushCinematicView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionHideoutAmbushCinematicView → MissionView. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionHideoutAmbushCinematicView is a top-level type in SandBox.View, namespace differing from (SandBox.View.Missions) the module directory; inheritance chain MissionHideoutAmbushCinematicView → MissionView. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. MissionView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Missions/MissionHideoutAmbushCinematicView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetPlayerMovementEnabled` | `protected virtual void SetPlayerMovementEnabled(bool isPlayerMovementEnabled)` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnObjectUsed` | `public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EavesdroppingMissionCameraView](../EavesdroppingMissionCameraView)
- [same namespace MissionAgentAlarmStateView](../MissionAgentAlarmStateView)
- [same namespace MissionArenaPracticeFightView](../MissionArenaPracticeFightView)
- [same namespace MissionAudienceHandler](../MissionAudienceHandler)
