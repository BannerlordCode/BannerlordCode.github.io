---
title: "MissionSoundParametersView"
description: "MissionSoundParametersView: a public class in SandBox.View, inheriting MissionView; 5 exposed members (3 methods, 1 properties, 0 fields). Source: SandBox.View/Missions/MissionSoundParametersView.cs."
---
# MissionSoundParametersView

**Namespace:** `SandBox.View.Missions`
**Module:** `SandBox.View`
**Type:** `public class MissionSoundParametersView : MissionView`
**File:** `SandBox.View/Missions/MissionSoundParametersView.cs`

## Overview

MissionSoundParametersView lives in the SandBox.View module, source file SandBox.View/Missions/MissionSoundParametersView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionSoundParametersView → MissionView. It exposes 5 public/protected members: 3 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionSoundParametersView is a top-level type in SandBox.View, namespace differing from (SandBox.View.Missions) the module directory; inheritance chain MissionSoundParametersView → MissionView. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. MissionView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Missions/MissionSoundParametersView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `OnMissionModeChange` | `public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)` | method |
| `short` | `public enum SoundParameterMissionCulture : short` | property |
| `short` | `public enum SoundParameterMissionCulture : short` | nested type |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EavesdroppingMissionCameraView](../EavesdroppingMissionCameraView)
- [same namespace MissionAgentAlarmStateView](../MissionAgentAlarmStateView)
- [same namespace MissionArenaPracticeFightView](../MissionArenaPracticeFightView)
- [same namespace MissionAudienceHandler](../MissionAudienceHandler)
