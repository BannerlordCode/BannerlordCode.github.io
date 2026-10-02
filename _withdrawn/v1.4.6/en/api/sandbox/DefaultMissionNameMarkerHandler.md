---
title: "DefaultMissionNameMarkerHandler"
description: "DefaultMissionNameMarkerHandler: a public class in SandBox.View.Missions.NameMarkers, inheriting MissionNameMarkerProvider; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.View/Missions/NameMarkers/DefaultMissionNameMarkerHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultMissionNameMarkerHandler

**Namespace:** `SandBox.View.Missions.NameMarkers`
**Module:** `SandBox.View`
**Type:** `public class DefaultMissionNameMarkerHandler : MissionNameMarkerProvider`
**File:** `SandBox.View/Missions/NameMarkers/DefaultMissionNameMarkerHandler.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

DefaultMissionNameMarkerHandler lives in the SandBox.View module, source file SandBox.View/Missions/NameMarkers/DefaultMissionNameMarkerHandler.cs. It is a public class, implementing/inheriting MissionNameMarkerProvider; the inheritance chain is DefaultMissionNameMarkerHandler → MissionNameMarkerProvider. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultMissionNameMarkerHandler lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.View.Missions.NameMarkers`, inheritance chain DefaultMissionNameMarkerHandler → MissionNameMarkerProvider. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Missions/NameMarkers/DefaultMissionNameMarkerHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnInitialize` | `protected override void OnInitialize(Mission mission)` | method |
| `OnDestroy` | `protected override void OnDestroy(Mission mission)` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `CreateMarkers` | `public override void CreateMarkers(List<MissionNameMarkerTargetBaseVM>markers)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionNameMarkerProvider](../MissionNameMarkerProvider/)
- [same namespace MissionNameMarkerUIHandler](../MissionNameMarkerUIHandler/)
- [same namespace StealthNameMarkerProvider](../StealthNameMarkerProvider/)
