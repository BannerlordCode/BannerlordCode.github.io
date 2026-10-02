---
title: "MissionConversationCameraView"
description: "MissionConversationCameraView: a public class in SandBox.View.Missions, inheriting MissionView; 5 exposed members (4 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.View/Missions/MissionConversationCameraView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionConversationCameraView

**Namespace:** `SandBox.View.Missions`
**Module:** `SandBox.View`
**Type:** `public class MissionConversationCameraView : MissionView`
**File:** `SandBox.View/Missions/MissionConversationCameraView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionConversationCameraView lives in the SandBox.View module, source file SandBox.View/Missions/MissionConversationCameraView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionConversationCameraView → MissionView → MissionBehavior → IMissionBehavior. It exposes 5 public/protected members: 4 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionConversationCameraView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.View.Missions`, inheritance chain MissionConversationCameraView → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 4/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Missions/MissionConversationCameraView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsCameraOverridden` | `public bool IsCameraOverridden` | property |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `UpdateOverridenCamera` | `public override bool UpdateOverridenCamera(float dt)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionView](../../mission-ext/MissionView/)
- [same namespace EavesdroppingMissionCameraView](../EavesdroppingMissionCameraView/)
- [same namespace MissionAgentAlarmStateView](../MissionAgentAlarmStateView/)
- [same namespace MissionArenaPracticeFightView](../MissionArenaPracticeFightView/)
- [same namespace MissionAudienceHandler](../MissionAudienceHandler/)
