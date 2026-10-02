---
title: "MissionGauntletKillNotificationSingleplayerUIHandler"
description: "MissionGauntletKillNotificationSingleplayerUIHandler: a public class in TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer, inheriting MissionBattleUIBaseView; 12 exposed members (10 methods, 0 properties, 2 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletKillNotificationSingleplayerUIHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionGauntletKillNotificationSingleplayerUIHandler

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class MissionGauntletKillNotificationSingleplayerUIHandler : MissionBattleUIBaseView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletKillNotificationSingleplayerUIHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionGauntletKillNotificationSingleplayerUIHandler lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletKillNotificationSingleplayerUIHandler.cs. It is a public class, implementing/inheriting MissionBattleUIBaseView; the inheritance chain is MissionGauntletKillNotificationSingleplayerUIHandler → MissionBattleUIBaseView → MissionView → MissionBehavior → IMissionBehavior. It exposes 12 public/protected members: 10 methods, 2 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletKillNotificationSingleplayerUIHandler lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`, inheritance chain MissionGauntletKillNotificationSingleplayerUIHandler → MissionBattleUIBaseView → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 10/12, properties 0/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletKillNotificationSingleplayerUIHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `OnCreateView` | `protected override void OnCreateView()` | method |
| `OnDestroyView` | `protected override void OnDestroyView()` | method |
| `OnSuspendView` | `protected override void OnSuspendView()` | method |
| `OnResumeView` | `protected override void OnResumeView()` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `OnPhotoModeActivated` | `public override void OnPhotoModeActivated()` | method |
| `OnPhotoModeDeactivated` | `public override void OnPhotoModeDeactivated()` | method |
| `_isGeneralFeedEnabled` | `protected bool _isGeneralFeedEnabled` | field |
| `_isPersonalFeedEnabled` | `protected bool _isPersonalFeedEnabled` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionBattleUIBaseView](../MissionBattleUIBaseView/)
- [same namespace MissionGauntletAgentLockVisualizerView](../MissionGauntletAgentLockVisualizerView/)
- [same namespace MissionGauntletBattleScore](../MissionGauntletBattleScore/)
- [same namespace MissionGauntletFormationMarker](../MissionGauntletFormationMarker/)
- [same namespace MissionGauntletLeaveView](../MissionGauntletLeaveView/)
