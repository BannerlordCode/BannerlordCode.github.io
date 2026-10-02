---
title: "MissionGauntletNameMarkerView"
description: "MissionGauntletNameMarkerView: a public class in SandBox.GauntletUI.Missions, inheriting MissionNameMarkerUIHandler; 11 exposed members (11 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/Missions/MissionGauntletNameMarkerView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionGauntletNameMarkerView

**Namespace:** `SandBox.GauntletUI.Missions`
**Module:** `SandBox.GauntletUI`
**Type:** `public class MissionGauntletNameMarkerView : MissionNameMarkerUIHandler`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletNameMarkerView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionGauntletNameMarkerView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Missions/MissionGauntletNameMarkerView.cs. It is a public class, implementing/inheriting MissionNameMarkerUIHandler; the inheritance chain is MissionGauntletNameMarkerView → MissionNameMarkerUIHandler → MissionBattleUIBaseView → MissionView → MissionBehavior → IMissionBehavior. It exposes 11 public/protected members: 11 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletNameMarkerView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.Missions`, inheritance chain MissionGauntletNameMarkerView → MissionNameMarkerUIHandler → MissionBattleUIBaseView → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 11/11, properties 0/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Missions/MissionGauntletNameMarkerView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `SetMarkersDirty` | `public override void SetMarkersDirty()` | method |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent affectedAgent, Banner banner)` | method |
| `OnAgentDeleted` | `public override void OnAgentDeleted(Agent affectedAgent)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `OnPhotoModeActivated` | `public override void OnPhotoModeActivated()` | method |
| `OnPhotoModeDeactivated` | `public override void OnPhotoModeDeactivated()` | method |
| `OnResumeView` | `protected override void OnResumeView()` | method |
| `OnSuspendView` | `protected override void OnSuspendView()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionNameMarkerUIHandler](../MissionNameMarkerUIHandler/)
- [same namespace MissionGauntletAgentAlarmStateView](../MissionGauntletAgentAlarmStateView/)
- [same namespace MissionGauntletArenaPracticeFightView](../MissionGauntletArenaPracticeFightView/)
- [same namespace MissionGauntletBarterView](../MissionGauntletBarterView/)
- [same namespace MissionGauntletBoardGameView](../MissionGauntletBoardGameView/)
