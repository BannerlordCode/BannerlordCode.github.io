---
title: "StealthNameMarkerProvider"
description: "StealthNameMarkerProvider: a public class in SandBox.View, inheriting MissionNameMarkerProvider; 3 exposed members (3 methods, 0 properties, 0 fields). Source: SandBox.View/Missions/NameMarkers/StealthNameMarkerProvider.cs."
---
# StealthNameMarkerProvider

**Namespace:** `SandBox.View.Missions.NameMarkers`
**Module:** `SandBox.View`
**Type:** `public class StealthNameMarkerProvider : MissionNameMarkerProvider`
**File:** `SandBox.View/Missions/NameMarkers/StealthNameMarkerProvider.cs`

## Overview

StealthNameMarkerProvider lives in the SandBox.View module, source file SandBox.View/Missions/NameMarkers/StealthNameMarkerProvider.cs. It is a public class, implementing/inheriting MissionNameMarkerProvider; the inheritance chain is StealthNameMarkerProvider → MissionNameMarkerProvider. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StealthNameMarkerProvider is a top-level type in SandBox.View, namespace differing from (SandBox.View.Missions.NameMarkers) the module directory; inheritance chain StealthNameMarkerProvider → MissionNameMarkerProvider. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. MissionNameMarkerProvider on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Missions/NameMarkers/StealthNameMarkerProvider.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInitialize` | `protected override void OnInitialize(Mission mission)` | method |
| `OnDestroy` | `protected override void OnDestroy(Mission mission)` | method |
| `CreateMarkers` | `public override void CreateMarkers(List<MissionNameMarkerTargetBaseVM>markers)` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DefaultMissionNameMarkerHandler](../DefaultMissionNameMarkerHandler)
- [same namespace MissionNameMarkerUIHandler](../MissionNameMarkerUIHandler)
