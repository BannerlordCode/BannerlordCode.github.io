---
title: "MissionGauntletTournamentView"
description: "MissionGauntletTournamentView: a public class in SandBox.GauntletUI, inheriting MissionView; 9 exposed members (8 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/Missions/MissionGauntletTournamentView.cs."
---
# MissionGauntletTournamentView

**Namespace:** `SandBox.GauntletUI.Missions`
**Module:** `SandBox.GauntletUI`
**Type:** `public class MissionGauntletTournamentView : MissionView`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletTournamentView.cs`

## Overview

MissionGauntletTournamentView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Missions/MissionGauntletTournamentView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionGauntletTournamentView → MissionView. It exposes 9 public/protected members: 8 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletTournamentView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Missions) the module directory; inheritance chain MissionGauntletTournamentView → MissionView. The surface is method-led (methods 8/9, properties 0/9), so it mostly exposes operations. MissionView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Missions/MissionGauntletTournamentView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionGauntletTournamentView` | `public MissionGauntletTournamentView()` | constructor |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `IsOpeningEscapeMenuOnFocusChangeAllowed` | `public override bool IsOpeningEscapeMenuOnFocusChangeAllowed()` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `OnPhotoModeActivated` | `public override void OnPhotoModeActivated()` | method |
| `OnPhotoModeDeactivated` | `public override void OnPhotoModeDeactivated()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionGauntletAgentAlarmStateView](../MissionGauntletAgentAlarmStateView)
- [same namespace MissionGauntletArenaPracticeFightView](../MissionGauntletArenaPracticeFightView)
- [same namespace MissionGauntletBarterView](../MissionGauntletBarterView)
- [same namespace MissionGauntletBoardGameView](../MissionGauntletBoardGameView)
