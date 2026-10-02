---
title: "EavesdroppingMissionCameraView"
description: "EavesdroppingMissionCameraView: a public class in SandBox.View.Missions, inheriting MissionView; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.View/Missions/EavesdroppingMissionCameraView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EavesdroppingMissionCameraView

**Namespace:** `SandBox.View.Missions`
**Module:** `SandBox.View`
**Type:** `public class EavesdroppingMissionCameraView : MissionView`
**File:** `SandBox.View/Missions/EavesdroppingMissionCameraView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

EavesdroppingMissionCameraView lives in the SandBox.View module, source file SandBox.View/Missions/EavesdroppingMissionCameraView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is EavesdroppingMissionCameraView → MissionView → MissionBehavior → IMissionBehavior. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EavesdroppingMissionCameraView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.View.Missions`, inheritance chain EavesdroppingMissionCameraView → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Missions/EavesdroppingMissionCameraView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SetPlayerMovementEnabled` | `protected virtual void SetPlayerMovementEnabled(bool isPlayerMovementEnabled)` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionView](../../mission-ext/MissionView/)
- [same namespace MissionAgentAlarmStateView](../MissionAgentAlarmStateView/)
- [same namespace MissionArenaPracticeFightView](../MissionArenaPracticeFightView/)
- [same namespace MissionAudienceHandler](../MissionAudienceHandler/)
- [same namespace MissionCampaignBattleSpectatorView](../MissionCampaignBattleSpectatorView/)
