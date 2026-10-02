---
title: "DefaultMissionNameMarkerHandler"
description: "DefaultMissionNameMarkerHandler: a public class in SandBox.View, inheriting MissionNameMarkerProvider; 4 exposed members (4 methods, 0 properties, 0 fields). Source: SandBox.View/Missions/NameMarkers/DefaultMissionNameMarkerHandler.cs."
---
# DefaultMissionNameMarkerHandler

**Namespace:** `SandBox.View.Missions.NameMarkers`
**Module:** `SandBox.View`
**Type:** `public class DefaultMissionNameMarkerHandler : MissionNameMarkerProvider`
**File:** `SandBox.View/Missions/NameMarkers/DefaultMissionNameMarkerHandler.cs`

## Overview

DefaultMissionNameMarkerHandler lives in the SandBox.View module, source file SandBox.View/Missions/NameMarkers/DefaultMissionNameMarkerHandler.cs. It is a public class, implementing/inheriting MissionNameMarkerProvider; the inheritance chain is DefaultMissionNameMarkerHandler → MissionNameMarkerProvider. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultMissionNameMarkerHandler is a top-level type in SandBox.View, namespace differing from (SandBox.View.Missions.NameMarkers) the module directory; inheritance chain DefaultMissionNameMarkerHandler → MissionNameMarkerProvider. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. MissionNameMarkerProvider on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Missions/NameMarkers/DefaultMissionNameMarkerHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInitialize` | `protected override void OnInitialize(Mission mission)` | method |
| `OnDestroy` | `protected override void OnDestroy(Mission mission)` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `CreateMarkers` | `public override void CreateMarkers(List<MissionNameMarkerTargetBaseVM>markers)` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionNameMarkerUIHandler](../MissionNameMarkerUIHandler)
- [same namespace StealthNameMarkerProvider](../StealthNameMarkerProvider)
