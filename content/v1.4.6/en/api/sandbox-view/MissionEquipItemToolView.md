---
title: "MissionEquipItemToolView"
description: "MissionEquipItemToolView: a public class in SandBox.View, inheriting MissionView; 4 exposed members (2 methods, 1 properties, 0 fields). Source: SandBox.View/Missions/MissionEquipItemToolView.cs."
---
# MissionEquipItemToolView

**Namespace:** `SandBox.View.Missions`
**Module:** `SandBox.View`
**Type:** `public class MissionEquipItemToolView : MissionView`
**File:** `SandBox.View/Missions/MissionEquipItemToolView.cs`

## Overview

MissionEquipItemToolView lives in the SandBox.View module, source file SandBox.View/Missions/MissionEquipItemToolView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionEquipItemToolView → MissionView. It exposes 4 public/protected members: 2 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionEquipItemToolView is a top-level type in SandBox.View, namespace differing from (SandBox.View.Missions) the module directory; inheritance chain MissionEquipItemToolView → MissionView. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. MissionView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Missions/MissionEquipItemToolView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `GenderEnum` | `public enum GenderEnum` | property |
| `GenderEnum` | `public enum GenderEnum` | nested type |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EavesdroppingMissionCameraView](../EavesdroppingMissionCameraView)
- [same namespace MissionAgentAlarmStateView](../MissionAgentAlarmStateView)
- [same namespace MissionArenaPracticeFightView](../MissionArenaPracticeFightView)
- [same namespace MissionAudienceHandler](../MissionAudienceHandler)
