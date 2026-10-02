---
title: "MissionCampaignView"
description: "MissionCampaignView: a public class in SandBox.View.Missions, inheriting MissionView; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.View/Missions/MissionCampaignView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionCampaignView

**Namespace:** `SandBox.View.Missions`
**Module:** `SandBox.View`
**Type:** `public class MissionCampaignView : MissionView`
**File:** `SandBox.View/Missions/MissionCampaignView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionCampaignView lives in the SandBox.View module, source file SandBox.View/Missions/MissionCampaignView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionCampaignView → MissionView → MissionBehavior → IMissionBehavior. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionCampaignView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.View.Missions`, inheritance chain MissionCampaignView → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Missions/MissionCampaignView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnMissionScreenPreLoad` | `public override void OnMissionScreenPreLoad()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `GetFaceAndHelmetInfoOfFollowedAgent` | `public static string GetFaceAndHelmetInfoOfFollowedAgent(List<string>strings)` | method |
| `EarlyStart` | `public override void EarlyStart()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionView](../../mission-ext/MissionView/)
- [same namespace EavesdroppingMissionCameraView](../EavesdroppingMissionCameraView/)
- [same namespace MissionAgentAlarmStateView](../MissionAgentAlarmStateView/)
- [same namespace MissionArenaPracticeFightView](../MissionArenaPracticeFightView/)
- [same namespace MissionAudienceHandler](../MissionAudienceHandler/)
