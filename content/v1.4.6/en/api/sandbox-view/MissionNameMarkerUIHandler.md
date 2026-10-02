---
title: "MissionNameMarkerUIHandler"
description: "MissionNameMarkerUIHandler: a public class in SandBox.View, inheriting MissionBattleUIBaseView; 5 exposed members (5 methods, 0 properties, 0 fields). Source: SandBox.View/Missions/NameMarkers/MissionNameMarkerUIHandler.cs."
---
# MissionNameMarkerUIHandler

**Namespace:** `SandBox.View.Missions.NameMarkers`
**Module:** `SandBox.View`
**Type:** `public class MissionNameMarkerUIHandler : MissionBattleUIBaseView`
**File:** `SandBox.View/Missions/NameMarkers/MissionNameMarkerUIHandler.cs`

## Overview

MissionNameMarkerUIHandler lives in the SandBox.View module, source file SandBox.View/Missions/NameMarkers/MissionNameMarkerUIHandler.cs. It is a public class, implementing/inheriting MissionBattleUIBaseView; the inheritance chain is MissionNameMarkerUIHandler → MissionBattleUIBaseView. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionNameMarkerUIHandler is a top-level type in SandBox.View, namespace differing from (SandBox.View.Missions.NameMarkers) the module directory; inheritance chain MissionNameMarkerUIHandler → MissionBattleUIBaseView. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. MissionBattleUIBaseView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Missions/NameMarkers/MissionNameMarkerUIHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetMarkersDirty` | `public virtual void SetMarkersDirty()` | method |
| `OnCreateView` | `protected override void OnCreateView()` | method |
| `OnDestroyView` | `protected override void OnDestroyView()` | method |
| `OnResumeView` | `protected override void OnResumeView()` | method |
| `OnSuspendView` | `protected override void OnSuspendView()` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DefaultMissionNameMarkerHandler](../DefaultMissionNameMarkerHandler)
- [same namespace StealthNameMarkerProvider](../StealthNameMarkerProvider)
