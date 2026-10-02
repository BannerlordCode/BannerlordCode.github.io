---
title: "MissionGauntletAgentAlarmStateView"
description: "MissionGauntletAgentAlarmStateView: a public class in SandBox.GauntletUI, inheriting MissionAgentAlarmStateView; 9 exposed members (8 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/Missions/MissionGauntletAgentAlarmStateView.cs."
---
# MissionGauntletAgentAlarmStateView

**Namespace:** `SandBox.GauntletUI.Missions`
**Module:** `SandBox.GauntletUI`
**Type:** `public class MissionGauntletAgentAlarmStateView : MissionAgentAlarmStateView`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletAgentAlarmStateView.cs`

## Overview

MissionGauntletAgentAlarmStateView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Missions/MissionGauntletAgentAlarmStateView.cs. It is a public class, implementing/inheriting MissionAgentAlarmStateView; the inheritance chain is MissionGauntletAgentAlarmStateView → MissionAgentAlarmStateView. It exposes 9 public/protected members: 8 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletAgentAlarmStateView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Missions) the module directory; inheritance chain MissionGauntletAgentAlarmStateView → MissionAgentAlarmStateView. The surface is method-led (methods 8/9, properties 0/9), so it mostly exposes operations. MissionAgentAlarmStateView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Missions/MissionGauntletAgentAlarmStateView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionGauntletAgentAlarmStateView` | `public MissionGauntletAgentAlarmStateView()` | constructor |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | method |
| `OnAgentTeamChanged` | `public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `OnResumeView` | `protected override void OnResumeView()` | method |
| `OnSuspendView` | `protected override void OnSuspendView()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionGauntletArenaPracticeFightView](../MissionGauntletArenaPracticeFightView)
- [same namespace MissionGauntletBarterView](../MissionGauntletBarterView)
- [same namespace MissionGauntletBoardGameView](../MissionGauntletBoardGameView)
- [same namespace MissionGauntletCheatView](../MissionGauntletCheatView)
