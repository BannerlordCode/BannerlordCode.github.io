---
title: "MissionConversationCameraView"
description: "MissionConversationCameraView: a public class in SandBox.View, inheriting MissionView; 5 exposed members (4 methods, 1 properties, 0 fields). Source: SandBox.View/Missions/MissionConversationCameraView.cs."
---
# MissionConversationCameraView

**Namespace:** `SandBox.View.Missions`
**Module:** `SandBox.View`
**Type:** `public class MissionConversationCameraView : MissionView`
**File:** `SandBox.View/Missions/MissionConversationCameraView.cs`

## Overview

MissionConversationCameraView lives in the SandBox.View module, source file SandBox.View/Missions/MissionConversationCameraView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionConversationCameraView → MissionView. It exposes 5 public/protected members: 4 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionConversationCameraView is a top-level type in SandBox.View, namespace differing from (SandBox.View.Missions) the module directory; inheritance chain MissionConversationCameraView → MissionView. The surface is method-led (methods 4/5, properties 1/5), so it mostly exposes operations. MissionView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Missions/MissionConversationCameraView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsCameraOverridden` | `public bool IsCameraOverridden` | property |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `UpdateOverridenCamera` | `public override bool UpdateOverridenCamera(float dt)` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EavesdroppingMissionCameraView](../EavesdroppingMissionCameraView)
- [same namespace MissionAgentAlarmStateView](../MissionAgentAlarmStateView)
- [same namespace MissionArenaPracticeFightView](../MissionArenaPracticeFightView)
- [same namespace MissionAudienceHandler](../MissionAudienceHandler)
