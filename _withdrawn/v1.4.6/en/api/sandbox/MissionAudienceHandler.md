---
title: "MissionAudienceHandler"
description: "MissionAudienceHandler: a public class in SandBox.View.Missions, inheriting MissionView; 7 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.View/Missions/MissionAudienceHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionAudienceHandler

**Namespace:** `SandBox.View.Missions`
**Module:** `SandBox.View`
**Type:** `public class MissionAudienceHandler : MissionView`
**File:** `SandBox.View/Missions/MissionAudienceHandler.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionAudienceHandler lives in the SandBox.View module, source file SandBox.View/Missions/MissionAudienceHandler.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionAudienceHandler → MissionView → MissionBehavior → IMissionBehavior. It exposes 7 public/protected members: 6 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAudienceHandler lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.View.Missions`, inheritance chain MissionAudienceHandler → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 6/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Missions/MissionAudienceHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionAudienceHandler` | `public MissionAudienceHandler(float density)` | constructor |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `OnInit` | `public void OnInit()` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnMissionModeChange` | `public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionView](../../mission-ext/MissionView/)
- [same namespace EavesdroppingMissionCameraView](../EavesdroppingMissionCameraView/)
- [same namespace MissionAgentAlarmStateView](../MissionAgentAlarmStateView/)
- [same namespace MissionArenaPracticeFightView](../MissionArenaPracticeFightView/)
- [same namespace MissionCampaignBattleSpectatorView](../MissionCampaignBattleSpectatorView/)
