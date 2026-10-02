---
title: "MissionGauntletNameMarkerView"
description: "MissionGauntletNameMarkerView: a public class in SandBox.GauntletUI, inheriting MissionNameMarkerUIHandler; 11 exposed members (11 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/Missions/MissionGauntletNameMarkerView.cs."
---
# MissionGauntletNameMarkerView

**Namespace:** `SandBox.GauntletUI.Missions`
**Module:** `SandBox.GauntletUI`
**Type:** `public class MissionGauntletNameMarkerView : MissionNameMarkerUIHandler`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletNameMarkerView.cs`

## Overview

MissionGauntletNameMarkerView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Missions/MissionGauntletNameMarkerView.cs. It is a public class, implementing/inheriting MissionNameMarkerUIHandler; the inheritance chain is MissionGauntletNameMarkerView → MissionNameMarkerUIHandler. It exposes 11 public/protected members: 11 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletNameMarkerView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Missions) the module directory; inheritance chain MissionGauntletNameMarkerView → MissionNameMarkerUIHandler. The surface is method-led (methods 11/11, properties 0/11), so it mostly exposes operations. MissionNameMarkerUIHandler on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Missions/MissionGauntletNameMarkerView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionGauntletAgentAlarmStateView](../MissionGauntletAgentAlarmStateView)
- [same namespace MissionGauntletArenaPracticeFightView](../MissionGauntletArenaPracticeFightView)
- [same namespace MissionGauntletBarterView](../MissionGauntletBarterView)
- [same namespace MissionGauntletBoardGameView](../MissionGauntletBoardGameView)
