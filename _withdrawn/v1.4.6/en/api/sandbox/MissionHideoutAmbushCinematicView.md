---
title: "MissionHideoutAmbushCinematicView"
description: "MissionHideoutAmbushCinematicView: a public class in SandBox.View.Missions, inheriting MissionView; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.View/Missions/MissionHideoutAmbushCinematicView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionHideoutAmbushCinematicView

**Namespace:** `SandBox.View.Missions`
**Module:** `SandBox.View`
**Type:** `public class MissionHideoutAmbushCinematicView : MissionView`
**File:** `SandBox.View/Missions/MissionHideoutAmbushCinematicView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionHideoutAmbushCinematicView lives in the SandBox.View module, source file SandBox.View/Missions/MissionHideoutAmbushCinematicView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionHideoutAmbushCinematicView → MissionView → MissionBehavior → IMissionBehavior. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionHideoutAmbushCinematicView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.View.Missions`, inheritance chain MissionHideoutAmbushCinematicView → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Missions/MissionHideoutAmbushCinematicView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SetPlayerMovementEnabled` | `protected virtual void SetPlayerMovementEnabled(bool isPlayerMovementEnabled)` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnObjectUsed` | `public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionView](../../mission-ext/MissionView/)
- [same namespace EavesdroppingMissionCameraView](../EavesdroppingMissionCameraView/)
- [same namespace MissionAgentAlarmStateView](../MissionAgentAlarmStateView/)
- [same namespace MissionArenaPracticeFightView](../MissionArenaPracticeFightView/)
- [same namespace MissionAudienceHandler](../MissionAudienceHandler/)
